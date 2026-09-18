import React, { useEffect, useRef, useState } from 'react';
import { ImageOff } from 'lucide-react';

type LoadingState = 'loading' | 'loaded' | 'error';

interface LoadingImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export const LoadingImage: React.FC<LoadingImageProps> = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  onLoad,
  onError,
  ...imageProps
}) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [state, setState] = useState<LoadingState>('loading');

  useEffect(() => {
    setState('loading');
    const image = imageRef.current;
    if (image?.complete) {
      setState(image.naturalWidth > 0 ? 'loaded' : 'error');
    }
  }, [src]);

  return (
    <span
      className={`relative block overflow-hidden bg-zinc-900/40 ${wrapperClassName}`}
      aria-busy={state === 'loading'}
      data-image-state={state}
    >
      {state === 'loading' ? <span className="image-skeleton absolute inset-0" aria-hidden="true" /> : null}
      {state === 'error' ? (
        <span className="absolute inset-0 flex min-h-32 items-center justify-center gap-2 bg-zinc-900/70 px-4 text-xs text-zinc-500">
          <ImageOff className="h-4 w-4" aria-hidden="true" />
          Image unavailable
        </span>
      ) : null}
      <img
        {...imageProps}
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${state === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        onLoad={(event) => {
          setState('loaded');
          onLoad?.(event);
        }}
        onError={(event) => {
          setState('error');
          onError?.(event);
        }}
      />
    </span>
  );
};
