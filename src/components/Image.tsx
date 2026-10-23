import React, { useState } from 'react';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  showSkeleton?: boolean;
}

export default function Image({
  src,
  alt = '',
  fill,
  priority,
  className = '',
  sizes,
  loading,
  style,
  showSkeleton = true,
  onLoad,
  onError,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const fillClass = fill ? 'absolute inset-0 w-full h-full' : '';
  const loadMode = priority ? 'eager' : (loading || 'lazy');

  return (
    <>
      {showSkeleton && !isLoaded && !hasError && (
        <div
          className={`shimmer-skeleton absolute inset-0 z-0 bg-[var(--bg-surface-elevated)] pointer-events-none transition-opacity duration-300 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={loadMode}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setHasError(true);
          onError?.(e);
        }}
        className={`${fillClass} ${className} ${
          showSkeleton ? `transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}` : ''
        }`.trim()}
        style={style}
        sizes={sizes}
        {...props}
      />
    </>
  );
}
