import React, { useState } from 'react';

interface ImagePlaceholderProps {
  id?: string;
  src?: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  label?: string;
  defaultGraphic?: React.ReactNode;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  label,
  defaultGraphic,
}) => {
  const [hasError, setHasError] = useState(false);

  // If a src is provided and hasn't errored, try rendering it
  const showImage = src && !hasError;

  return (
    <div
      className={`relative overflow-hidden rounded-lg flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="w-full h-full object-contain"
        />
      ) : defaultGraphic ? (
        <div className="w-full h-full flex items-center justify-center">
          {defaultGraphic}
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 border border-dashed border-stone-400/80 bg-stone-200/50 text-stone-500 rounded-lg">
          <div className="text-[11px] font-mono font-medium text-center text-stone-600">
            {label || alt}
          </div>
          <div className="text-[10px] font-mono text-stone-400 mt-1">
            [Add image file to public/images]
          </div>
        </div>
      )}
    </div>
  );
};
