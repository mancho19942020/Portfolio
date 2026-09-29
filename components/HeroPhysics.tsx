import { useEffect, useRef, type RefObject } from 'react';
import type { Body as PhysicsBody, Vector } from 'matter-js';

type HeroPhysicsProps = {
  containerRef: RefObject<HTMLElement | null>;
  active: boolean;
};

const sizeFor = (width: number, height: number) => {
  const mobile = width < 700;
  return Math.max(28, Math.min(mobile ? 96 : 112, width * (mobile ? 0.25 : 0.145), height * 0.33));
};

export function HeroPhysics({ containerRef, active }: HeroPhysicsProps) {
  const asteriskRef = useRef<SVGSVGElement>(null);
  const squareRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    const asteriskNode = asteriskRef.current;
    const squareNode = squareRef.current;
    const circleNode = circleRef.current;
    if (!container || !asteriskNode || !squareNode || !circleNode) return;

    const nodes = [asteriskNode, squareNode, circleNode];
    let width = container.clientWidth;
    let height = container.clientHeight;
    let size = sizeFor(width, height);
    let disposed = false;

    const draw = (node: SVGSVGElement, x: number, y: number, angle: number) => {
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0) rotate(${angle}rad)`;
      node.style.opacity = '1';
    };

    // People who request less motion see the shapes at rest, without a physics loop.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const rest = () => {
        width = container.clientWidth;
        height = container.clientHeight;
        size = sizeFor(width, height);
        draw(asteriskNode, width * 0.22, height - size * 0.48, -0.12);
        draw(squareNode, width * 0.48, height - size * 0.38, 0.14);
        draw(circleNode, width * 0.74, height - size * 0.38, 0);
      };
      const observer = new ResizeObserver(rest);
      observer.observe(container);
      rest();
      return () => observer.disconnect();
    }

    let cleanup = () => { disposed = true; };
    // Matter is loaded only when the intro is ready, keeping it out of the initial bundle.
    import('matter-js').then(({ default: Matter }) => {
      if (disposed) return;
      const { Engine, Bodies, Body, Composite, Sleeping } = Matter;
      const engine = Engine.create({ enableSleeping: true });
      engine.gravity.y = 1.28;
      engine.positionIterations = 8;
      engine.velocityIterations = 6;

      const makeAsterisk = (x: number, y: number) => Body.create({
        parts: [0, 60, 120].map((degrees) => Bodies.rectangle(x, y, size, size * 0.24, {
          chamfer: { radius: size * 0.015 },
          angle: degrees * Math.PI / 180,
        })),
        restitution: 0.27,
        friction: 0.58,
        frictionAir: 0.025,
      });

      const shapes = [
        makeAsterisk(width * 0.22, -size * 0.7),
        Bodies.rectangle(width * 0.48, -size * 1.35, size * 0.74, size * 0.74, {
          chamfer: { radius: size * 0.015 },
          restitution: 0.19,
          friction: 0.64,
          frictionAir: 0.028,
        }),
        Bodies.circle(width * 0.74, -size * 2.05, size * 0.38, {
          restitution: 0.24,
          friction: 0.56,
          frictionAir: 0.03,
        }),
      ];
      Body.setAngle(shapes[0], -0.18);
      Body.setAngle(shapes[1], 0.15);
      Body.setAngularVelocity(shapes[0], 0.024);
      Body.setAngularVelocity(shapes[1], -0.017);

      const wallThickness = 120;
      let walls: PhysicsBody[] = [];
      const rebuildWalls = () => {
        Composite.remove(engine.world, walls);
        const t = wallThickness;
        const inset = size * 0.22;
        walls = [
          Bodies.rectangle(width / 2, height + t / 2, width + t * 2, t, { isStatic: true }),
          Bodies.rectangle(inset - t / 2, -height / 2, t, height * 4, { isStatic: true }),
          Bodies.rectangle(width - inset + t / 2, -height / 2, t, height * 4, { isStatic: true }),
          Bodies.rectangle(width / 2, -height * 1.5 - t / 2, width + t * 2, t, { isStatic: true }),
        ];
        Composite.add(engine.world, walls);
      };

      const parked = { x: -10000, y: -10000 };
      let pusherRadius = Math.max(12, size * 0.24);
      const pusher = Bodies.circle(parked.x, parked.y, pusherRadius, { isStatic: true });
      let target = parked;
      let pointerInside = false;
      Composite.add(engine.world, [...shapes, pusher]);
      rebuildWalls();

      const onPointerMove = (event: PointerEvent) => {
        if (event.pointerType === 'touch') return;
        const rect = container.getBoundingClientRect();
        target = { x: event.clientX - rect.left, y: event.clientY - rect.top };
        if (!pointerInside) {
          Body.setPosition(pusher, target);
          pointerInside = true;
        }
      };
      const onPointerLeave = () => {
        pointerInside = false;
        target = parked;
        Body.setPosition(pusher, parked);
      };
      container.addEventListener('pointermove', onPointerMove, { passive: true });
      container.addEventListener('pointerleave', onPointerLeave);

      const onResize = () => {
        const nextWidth = container.clientWidth;
        const nextHeight = container.clientHeight;
        if (Math.abs(nextWidth - width) < 1 && Math.abs(nextHeight - height) < 1) return;
        width = nextWidth;
        height = nextHeight;
        const nextSize = sizeFor(width, height);
        if (Math.abs(nextSize - size) > 1) {
          const ratio = nextSize / size;
          shapes.forEach((shape) => Body.scale(shape, ratio, ratio));
          const nextPusherRadius = Math.max(12, nextSize * 0.24);
          Body.scale(pusher, nextPusherRadius / pusherRadius, nextPusherRadius / pusherRadius);
          pusherRadius = nextPusherRadius;
          size = nextSize;
        }
        shapes.forEach((shape) => {
          const horizontalMargin = size * 0.72;
          const x = Math.max(horizontalMargin, Math.min(width - horizontalMargin, shape.position.x));
          const y = Math.min(height - size * 0.45, shape.position.y);
          if (x !== shape.position.x || y !== shape.position.y) {
            Body.setPosition(shape, { x, y });
            Body.setVelocity(shape, { x: 0, y: 0 });
          }
          Sleeping.set(shape, false);
        });
        rebuildWalls();
        onPointerLeave();
      };
      const resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(container);

      const drawShapes = () => shapes.forEach((shape, index) =>
        draw(nodes[index], shape.position.x, shape.position.y, shape.angle));
      drawShapes();

      const step = 1000 / 60;
      let accumulator = 0;
      let previous = performance.now();
      let frame = 0;
      let running = false;
      let inView = false;
      const tick = (now: number) => {
        accumulator += Math.min(now - previous, 100);
        previous = now;
        while (accumulator >= step) {
          if (pointerInside) {
            const deltaX = (target.x - pusher.position.x) * 0.24;
            const deltaY = (target.y - pusher.position.y) * 0.24;
            const distance = Math.hypot(deltaX, deltaY);
            const scale = distance > 44 ? 44 / distance : 1;
            (Body.setPosition as (body: PhysicsBody, position: Vector, updateVelocity: boolean) => void)(pusher, {
              x: pusher.position.x + deltaX * scale,
              y: pusher.position.y + deltaY * scale,
            }, true);
            if (distance > 0.5) shapes.forEach((shape) => Sleeping.set(shape, false));
          }
          Engine.update(engine, step);
          accumulator -= step;
        }
        drawShapes();
        frame = requestAnimationFrame(tick);
      };
      const start = () => {
        if (running) return;
        running = true;
        previous = performance.now();
        accumulator = 0;
        frame = requestAnimationFrame(tick);
      };
      const stop = () => {
        running = false;
        cancelAnimationFrame(frame);
      };
      const visibilityObserver = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !document.hidden) start();
        else stop();
      }, { threshold: 0.05 });
      const onVisibility = () => document.hidden || !inView ? stop() : start();
      visibilityObserver.observe(container);
      document.addEventListener('visibilitychange', onVisibility);

      cleanup = () => {
        disposed = true;
        stop();
        resizeObserver.disconnect();
        visibilityObserver.disconnect();
        document.removeEventListener('visibilitychange', onVisibility);
        container.removeEventListener('pointermove', onPointerMove);
        container.removeEventListener('pointerleave', onPointerLeave);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      };
    });
    return () => cleanup();
  }, [active, containerRef]);

  return (
    <div className="dashboard-hero__physics" aria-hidden="true">
      <svg ref={asteriskRef} className="dashboard-hero__shape dashboard-hero__shape--asterisk" viewBox="-50 -50 100 100">
        {[0, 60, 120].map((degrees) => (
          <rect key={degrees} x="-50" y="-12" width="100" height="24" rx="1.5" transform={`rotate(${degrees})`} />
        ))}
      </svg>
      <svg ref={squareRef} className="dashboard-hero__shape dashboard-hero__shape--square" viewBox="-50 -50 100 100">
        <rect x="-37" y="-37" width="74" height="74" rx="1.5" />
      </svg>
      <svg ref={circleRef} className="dashboard-hero__shape dashboard-hero__shape--circle" viewBox="-50 -50 100 100">
        <circle cx="0" cy="0" r="38" />
      </svg>
    </div>
  );
}
