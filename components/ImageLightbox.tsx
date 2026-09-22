import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react';
import { lockPageScroll, unlockPageScroll } from './SmoothScroll';

type LightboxImage = { src: string; alt: string };

interface ImageLightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.5;

const clampScale = (value: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  index,
  onClose,
  onNavigate,
}) => {
  const isOpen = index !== null;
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const isZoomed = scale > MIN_SCALE;

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const zoomBy = useCallback((delta: number) => {
    setScale((prev) => {
      const next = clampScale(prev + delta);
      if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleNavigate = useCallback(
    (newIndex: number) => {
      resetView();
      onNavigate(newIndex);
    },
    [onNavigate, resetView],
  );

  // Reset zoom whenever the active image changes or the lightbox opens
  useEffect(() => {
    if (isOpen) {
      resetView();
      setImageLoaded(false);
    }
  }, [index, isOpen, resetView]);

  // Keyboard controls
  useEffect(() => {
    if (!isOpen || index === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') handleNavigate((index - 1 + images.length) % images.length);
      else if (e.key === 'ArrowRight') handleNavigate((index + 1) % images.length);
      else if (e.key === '+' || e.key === '=') zoomBy(ZOOM_STEP);
      else if (e.key === '-' || e.key === '_') zoomBy(-ZOOM_STEP);
      else if (e.key === '0') resetView();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, index, images.length, onClose, handleNavigate, zoomBy, resetView]);

  // Lock document + Lenis scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    lockPageScroll();
    return unlockPageScroll;
  }, [isOpen]);

  // Wheel zoom, attached as non-passive so we can preventDefault
  useEffect(() => {
    if (!isOpen) return;
    const node = backdropRef.current;
    if (!node) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY * 0.0025;
      setScale((prev) => {
        const next = clampScale(prev + delta);
        if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
        return next;
      });
    };
    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => node.removeEventListener('wheel', handleWheel);
  }, [isOpen]);

  const current = isOpen && index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {isOpen && index !== null && current && (
      <motion.div
        key="lightbox"
        ref={backdropRef}
        data-lenis-prevent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="lightbox-backdrop fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      >
        {/* Close */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="lightbox-control absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 rounded-full transition-colors flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate((index - 1 + images.length) % images.length);
              }}
              className="lightbox-control absolute left-2 bottom-4 md:left-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full transition-colors flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate((index + 1) % images.length);
              }}
              className="lightbox-control absolute right-2 bottom-4 md:right-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full transition-colors flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image stage */}
        <div
          className="relative min-h-[220px] w-[min(92vw,1600px)] max-h-[88vh] flex items-center justify-center overflow-hidden rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {!imageLoaded ? <div className="image-skeleton absolute inset-0" aria-hidden="true" /> : null}
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale, x: position.x, y: position.y }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.18 },
                scale: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                x: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
              }}
              drag={isZoomed}
              dragMomentum={false}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                setPosition((prev) => ({
                  x: prev.x + info.offset.x,
                  y: prev.y + info.offset.y,
                }));
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (isZoomed) resetView();
                else setScale(2);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                resetView();
              }}
              style={{
                cursor: isZoomed ? 'grab' : 'zoom-in',
                touchAction: isZoomed ? 'none' : 'auto',
              }}
              whileDrag={{ cursor: 'grabbing' }}
              draggable={false}
              onLoad={() => setImageLoaded(true)}
              className="block min-w-0 max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl select-none"
            />
          </AnimatePresence>
        </div>

        {/* Bottom controls, zoom pill + counter pill */}
        <div
          className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="lightbox-utility flex items-center rounded-full overflow-hidden">
            <button
              type="button"
              onClick={() => zoomBy(-ZOOM_STEP)}
              disabled={scale <= MIN_SCALE}
              className="lightbox-control w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={resetView}
              className="lightbox-reset px-3 h-10 min-w-[64px] text-[11px] tracking-[0.02em]"
              aria-label="Reset zoom"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              type="button"
              onClick={() => zoomBy(ZOOM_STEP)}
              disabled={scale >= MAX_SCALE}
              className="lightbox-control w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {images.length > 1 && (
            <div className="lightbox-counter px-4 h-10 flex items-center rounded-full text-[11px] tracking-[0.02em]">
              {index + 1} / {images.length}
            </div>
          )}
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};
