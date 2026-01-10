import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Gamepad2, Film, Tv2, Dumbbell, Dog } from 'lucide-react';

type InterestId = 'pong' | 'movies' | 'tv' | 'fitness' | 'pet';

interface InterestItem {
  id: InterestId;
  label: string;
  action: string;
  helper: string;
  icon: React.ReactNode;
}

const INTERESTS: InterestItem[] = [
  {
    id: 'pong',
    label: 'videogames',
    action: 'Play pong',
    helper: 'Real-time interaction with keyboard or touch.',
    icon: <Gamepad2 className="h-4 w-4" />
  },
  {
    id: 'movies',
    label: 'movies',
    action: 'Must watch movies',
    helper: 'Personal favorites with clear hierarchy.',
    icon: <Film className="h-4 w-4" />
  },
  {
    id: 'tv',
    label: 'TV series',
    action: 'My top 10',
    helper: 'Current rotation and standout series.',
    icon: <Tv2 className="h-4 w-4" />
  },
  {
    id: 'fitness',
    label: 'fitness',
    action: 'Create a fitness plan',
    helper: 'Simple inputs, practical output.',
    icon: <Dumbbell className="h-4 w-4" />
  },
  {
    id: 'pet',
    label: 'two dogs',
    action: 'Raise one now',
    helper: 'Lightweight, state-driven interaction.',
    icon: <Dog className="h-4 w-4" />
  }
];

const MOVIES = [
  'Her (2013)',
  'Blade Runner 2049 (2017)',
  'Whiplash (2014)',
  'Arrival (2016)',
  'The Social Network (2010)',
  'Mad Max: Fury Road (2015)',
  'Interstellar (2014)',
  'The Grand Budapest Hotel (2014)',
  'No Country for Old Men (2007)',
  'Spirited Away (2001)'
];

const TV_SERIES = [
  'Severance',
  'The Bear',
  'Succession',
  'Mindhunter',
  'Dark',
  'Better Call Saul',
  'Black Mirror',
  'Mr. Robot'
];

const FitnessPlan: React.FC = () => {
  const [goal, setGoal] = useState('strength');
  const [availability, setAvailability] = useState('3');
  const [level, setLevel] = useState('intermediate');
  const [plan, setPlan] = useState<string | null>(null);

  const planText = useMemo(() => {
    const days = Number(availability);
    const focus = goal === 'strength'
      ? 'compound lifts, progressive overload, and recovery'
      : goal === 'endurance'
        ? 'steady-state cardio, interval sessions, and mobility'
        : 'hybrid conditioning, strength circuits, and core stability';

    const volume = days <= 3 ? 'full-body sessions with optional accessories' : 'upper/lower splits with a dedicated conditioning day';
    const nutrition = goal === 'strength'
      ? 'protein-forward meals and steady calories'
      : goal === 'endurance'
        ? 'carb-supported training days and hydration focus'
        : 'balanced macros with consistent meal timing';

    return [
      `Weekly focus: ${focus}.`,
      `Schedule: ${days} days/week, ${volume}.`,
      `Progression: ${level} tempo, track reps, increase load every 1–2 weeks.`,
      `Nutrition: ${nutrition}.`,
      'Recovery: 7–8 hours of sleep, light mobility on off days.'
    ].join(' ');
  }, [availability, goal, level]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Goal
          <select
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100"
          >
            <option value="strength">Strength</option>
            <option value="endurance">Endurance</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Availability
          <select
            value={availability}
            onChange={(event) => setAvailability(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100"
          >
            <option value="2">2 days / week</option>
            <option value="3">3 days / week</option>
            <option value="4">4 days / week</option>
            <option value="5">5 days / week</option>
          </select>
        </label>
        <label className="space-y-2 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Experience
          <select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            className="mt-2 w-full rounded-md border border-zinc-800 bg-zinc-950/40 px-3 py-2 text-sm font-sans text-zinc-100"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </label>
      </div>

      <button
        type="button"
        onClick={() => setPlan(planText)}
        className="glow-reactive glow-button btn-primary inline-flex items-center justify-center px-6 py-3 rounded-sm font-semibold transition-colors"
      >
        Generate plan
      </button>

      {plan ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-sm text-zinc-300 leading-relaxed">
          {plan}
        </div>
      ) : null}

      <p className="text-xs text-zinc-500">
        Informational only. Always adapt training and nutrition to your needs and consult professionals when necessary.
      </p>
    </div>
  );
};

const VirtualPet: React.FC = () => {
  const [mood, setMood] = useState(70);
  const [energy, setEnergy] = useState(60);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMood((value) => Math.max(0, value - 4));
      setEnergy((value) => Math.max(0, value - 3));
    }, 12000);
    return () => window.clearInterval(timer);
  }, []);

  const status = mood > 70 ? 'Happy' : mood > 40 ? 'Calm' : 'Needs attention';

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500">
          <span>Mood</span>
          <span>Energy</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-lg font-semibold text-zinc-100">
          <span>{status}</span>
          <span>{energy}%</span>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-full rounded-full bg-zinc-500" style={{ width: `${mood}%` }} />
          </div>
          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-full rounded-full bg-zinc-400" style={{ width: `${energy}%` }} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setMood((value) => Math.min(100, value + 10))}
          className="glow-reactive glow-button btn-outline px-5 py-2 rounded-sm text-sm font-semibold"
        >
          Pet
        </button>
        <button
          type="button"
          onClick={() => setEnergy((value) => Math.min(100, value + 12))}
          className="glow-reactive glow-button btn-outline px-5 py-2 rounded-sm text-sm font-semibold"
        >
          Feed
        </button>
        <button
          type="button"
          onClick={() => {
            setMood((value) => Math.min(100, value + 6));
            setEnergy((value) => Math.max(0, value - 8));
          }}
          className="glow-reactive glow-button btn-outline px-5 py-2 rounded-sm text-sm font-semibold"
        >
          Play
        </button>
      </div>
    </div>
  );
};

const PongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const keys = useRef({ up: false, down: false });
  const player = useRef({ y: 0, h: 90 });
  const ai = useRef({ y: 0, h: 90 });
  const ball = useRef({ x: 0, y: 0, vx: 3, vy: 2.5, size: 8 });
  const speedScale = useRef(1);
  const [score, setScore] = useState({ player: 0, ai: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const resize = () => {
      const width = Math.min(container.clientWidth, 720);
      const height = Math.max(240, Math.round(width * 0.52));
      canvas.width = width;
      canvas.height = height;
      player.current.y = height / 2 - player.current.h / 2;
      ai.current.y = height / 2 - ai.current.h / 2;
      ball.current.x = width / 2;
      ball.current.y = height / 2;
    };

    resize();
    window.addEventListener('resize', resize);

    const resetBall = (direction: number) => {
      ball.current.x = canvas.width / 2;
      ball.current.y = canvas.height / 2;
      ball.current.vx = 3 * direction;
      ball.current.vy = (Math.random() * 2 + 2) * (Math.random() > 0.5 ? 1 : -1);
    };

    const draw = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const bg = theme === 'light' ? '#f6f5f2' : '#0b0b0b';
      const line = theme === 'light' ? '#d1d5db' : '#27272a';
      const text = theme === 'light' ? '#111827' : '#f2efe9';

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = line;
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 8]);
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = line;
      ctx.fillRect(20, player.current.y, 8, player.current.h);
      ctx.fillRect(canvas.width - 28, ai.current.y, 8, ai.current.h);

      ctx.beginPath();
      ctx.fillStyle = text;
      ctx.arc(ball.current.x, ball.current.y, ball.current.size, 0, Math.PI * 2);
      ctx.fill();
    };

    let rafId = 0;
    let lastBoost = 0;
    const step = () => {
      const { width, height } = canvas;
      if (!lastBoost) {
        lastBoost = performance.now();
      }
      const now = performance.now();
      if (now - lastBoost >= 10000) {
        speedScale.current = Math.min(speedScale.current + 0.05, 1.6);
        lastBoost = now;
      }
      if (keys.current.up) {
        player.current.y -= 6;
      }
      if (keys.current.down) {
        player.current.y += 6;
      }
      player.current.y = Math.max(0, Math.min(height - player.current.h, player.current.y));

      ai.current.y += (ball.current.y - (ai.current.y + ai.current.h / 2)) * 0.06;
      ai.current.y = Math.max(0, Math.min(height - ai.current.h, ai.current.y));

      ball.current.x += ball.current.vx * speedScale.current;
      ball.current.y += ball.current.vy * speedScale.current;

      if (ball.current.y <= ball.current.size || ball.current.y >= height - ball.current.size) {
        ball.current.vy *= -1;
      }

      const hitPlayer = ball.current.x - ball.current.size <= 28 &&
        ball.current.y >= player.current.y &&
        ball.current.y <= player.current.y + player.current.h;
      const hitAi = ball.current.x + ball.current.size >= width - 28 &&
        ball.current.y >= ai.current.y &&
        ball.current.y <= ai.current.y + ai.current.h;

      if (hitPlayer) {
        ball.current.vx = Math.abs(ball.current.vx) + 0.2;
      }
      if (hitAi) {
        ball.current.vx = -Math.abs(ball.current.vx) - 0.2;
      }

      if (ball.current.x < 0) {
        setScore((value) => ({ ...value, ai: value.ai + 1 }));
        resetBall(1);
      }
      if (ball.current.x > width) {
        setScore((value) => ({ ...value, player: value.player + 1 }));
        resetBall(-1);
      }

      draw();
      rafId = window.requestAnimationFrame(step);
    };

    rafId = window.requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent, isDown: boolean) => {
      if (event.key === 'ArrowUp' || event.key === 'w') {
        keys.current.up = isDown;
      }
      if (event.key === 'ArrowDown' || event.key === 's') {
        keys.current.down = isDown;
      }
    };
    const onKeyDown = (event: KeyboardEvent) => handleKey(event, true);
    const onKeyUp = (event: KeyboardEvent) => handleKey(event, false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const relativeY = event.clientY - rect.top;
    player.current.y = Math.max(0, Math.min(canvas.height - player.current.h, relativeY - player.current.h / 2));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-500">
        <span>Player {score.player}</span>
        <span>AI {score.ai}</span>
      </div>
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3"
      >
        <canvas ref={canvasRef} className="block w-full rounded-lg" />
      </div>
      <p className="text-xs text-zinc-500">
        Use Arrow Up/Down or W/S. Touch and drag to move the paddle on mobile.
      </p>
    </div>
  );
};

const InterestModal: React.FC<{
  interest: InterestItem;
  onClose: () => void;
}> = ({ interest, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 text-zinc-100 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-500">
              {interest.icon}
              <span>{interest.label}</span>
            </div>
            <h3 className="text-2xl font-semibold">I like {interest.label} — {interest.action}</h3>
            <p className="text-sm text-zinc-400">{interest.helper}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="glow-reactive glow-button rounded-full border border-zinc-800 p-2 text-zinc-400 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6">
          {interest.id === 'pong' && <PongGame />}
          {interest.id === 'movies' && (
            <div className="grid gap-4 sm:grid-cols-2">
              {MOVIES.map((movie) => (
                <div key={movie} className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300">
                  {movie}
                </div>
              ))}
            </div>
          )}
          {interest.id === 'tv' && (
            <div className="space-y-3">
              <p className="text-sm text-zinc-400">Currently watched + all-time favorites.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {TV_SERIES.map((series) => (
                  <div key={series} className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-300">
                    {series}
                  </div>
                ))}
              </div>
            </div>
          )}
          {interest.id === 'fitness' && <FitnessPlan />}
          {interest.id === 'pet' && <VirtualPet />}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const InterestsRibbon: React.FC = () => {
  const [active, setActive] = useState<InterestItem | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
    return undefined;
  }, [active]);

  const handleOpen = (interest: InterestItem) => {
    setActive(interest);
  };

  return (
    <>
      <div>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
          {INTERESTS.map((interest) => (
            <button
              key={interest.id}
              type="button"
              onClick={() => handleOpen(interest)}
              className="glow-reactive glow-button flex w-full items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm text-zinc-200 transition-colors hover:border-zinc-600 md:w-auto"
              aria-label={`Open ${interest.label} feature`}
            >
              <span className="text-zinc-500">{interest.icon}</span>
              <span>I like {interest.label} — {interest.action}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <InterestModal interest={active} onClose={() => setActive(null)} />
        ) : null}
      </AnimatePresence>
    </>
  );
};
