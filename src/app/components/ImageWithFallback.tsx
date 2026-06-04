import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect width="400" height="400" fill="%23FAF8F5"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%238B7E6F"%3EImage%3C/text%3E%3C/svg%3E'
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className={`${className} bg-[#F5E6D3] animate-pulse flex items-center justify-center`}>
          <span className="text-[#8B7E6F]">Loading...</span>
        </div>
      )}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${loading ? 'hidden' : ''}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </>
  );
}
