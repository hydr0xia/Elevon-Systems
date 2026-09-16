import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Check, RefreshCw, Eye } from 'lucide-react';

interface ImageSlotProps {
  id: string;
  pageNumber: number;
  label: string;
  aspectRatio?: string;
  recommendedSize?: string;
  customUrl?: string;
  onImageChange?: (id: string, url: string) => void;
  className?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  id,
  pageNumber,
  label,
  aspectRatio = '16:9',
  recommendedSize = '1600 × 900 px',
  customUrl,
  onImageChange,
  className = ''
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(customUrl || null);
  const [isDragging, setIsDragging] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImageUrl(result);
        if (onImageChange) {
          onImageChange(id, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageUrl(null);
    if (onImageChange) {
      onImageChange(id, '');
    }
  };

  return (
    <>
      <div
        className={`relative group rounded-xl overflow-hidden border-2 transition-all duration-300 ${
          isDragging
            ? 'border-elevon-blue bg-elevon-blue/10'
            : imageUrl
            ? 'border-elevon-black/80 bg-elevon-black'
            : 'border-dashed border-stone-400/80 bg-[#d1d1d1] hover:border-elevon-blue hover:bg-[#cacaca]'
        } ${className}`}
        style={{ aspectRatio: aspectRatio === '16:9' ? '16/9' : '4/3' }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleFile(e.target.files[0]);
            }
          }}
        />

        {imageUrl ? (
          <div className="relative w-full h-full">
            <img
              src={imageUrl}
              alt={label}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-elevon-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold px-2 py-1 bg-elevon-blue text-white rounded">
                  PAGE {pageNumber.toString().padStart(2, '0')}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="p-1.5 bg-white/20 hover:bg-white/40 rounded text-white transition-colors"
                    title="View full size"
                  >
                    <Eye size={15} />
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-1.5 bg-red-600/80 hover:bg-red-600 rounded text-white transition-colors"
                    title="Remove image"
                  >
                    <RefreshCw size={15} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-stone-200 line-clamp-1">{label}</p>
                <p className="text-[10px] font-mono text-stone-400 mt-0.5">
                  Static path: /public/images/slide-{pageNumber.toString().padStart(2, '0')}.png
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-full flex flex-col items-center justify-center p-6 text-center cursor-pointer select-none"
          >
            {/* Decorative Corner Reticles */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-elevon-black/40"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-elevon-black/40"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-elevon-black/40"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-elevon-black/40"></div>

            {/* Slide Index Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono font-bold tracking-widest px-2.5 py-0.5 bg-elevon-black text-white rounded">
                SLIDE {pageNumber.toString().padStart(2, '0')}
              </span>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 border border-elevon-black/40 text-stone-700 rounded">
                {recommendedSize}
              </span>
            </div>

            {/* Icon Graphic */}
            <div className="w-12 h-12 rounded-lg bg-stone-300/80 border border-stone-400/60 flex items-center justify-center text-stone-700 group-hover:text-elevon-blue group-hover:border-elevon-blue group-hover:scale-110 transition-all duration-200 mb-3 shadow-inner">
              <ImageIcon size={24} />
            </div>

            {/* Label */}
            <h4 className="font-display font-bold text-sm text-elevon-black mb-1 max-w-[280px]">
              {label}
            </h4>

            {/* Upload Callout */}
            <div className="flex items-center gap-1.5 text-xs text-elevon-blue font-semibold mt-1">
              <Upload size={13} />
              <span>Click or drag slide image here</span>
            </div>

            <p className="text-[10px] font-mono text-stone-600 mt-2">
              Add to repo: <code className="text-elevon-black bg-stone-200 px-1 py-0.5 rounded">public/images/slide-{pageNumber.toString().padStart(2, '0')}.png</code>
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && imageUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-stone-900 rounded-lg overflow-hidden border border-stone-700">
            <div className="flex items-center justify-between p-3 bg-stone-950 border-b border-stone-800 text-white text-xs font-mono">
              <span>{label} (Page {pageNumber})</span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="px-2 py-1 bg-stone-800 hover:bg-stone-700 rounded text-stone-300"
              >
                Close (ESC)
              </button>
            </div>
            <img
              src={imageUrl}
              alt={label}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
