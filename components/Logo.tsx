import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  customLogoUrl?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  customLogoUrl = '/images/logo.png',
  showSubtitle = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : 1;

  // If image URL is provided and has not errored, show it
  if (customLogoUrl && !imageError) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={customLogoUrl}
          alt="Elevon Systems Logo"
          onError={() => setImageError(true)}
          style={{ height: `${36 * scale}px` }}
          className="w-auto object-contain"
        />
      </div>
    );
  }

  // Fallback to high-precision SVG vector matching the Elevon Systems wordmark
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-2">
        <svg
          height={38 * scale}
          viewBox="0 0 160 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-auto"
        >
          {/* Letter E */}
          <path d="M4 8H16V13H9V16.5H14.5V21.5H9V25H16V30H4V8Z" fill="#0A0A0A" />
          {/* Letter L */}
          <path d="M22 8H27V25H35V30H22V8Z" fill="#0A0A0A" />
          {/* Letter E */}
          <path d="M41 8H53V13H46V16.5H51.5V21.5H46V25H53V30H41V8Z" fill="#0A0A0A" />
          
          {/* Stylized V with aerodynamic wings extending upwards */}
          <g>
            <polygon points="57,1 63,1 70,30 64,30" fill="#0A0A0A" />
            <polygon points="68,1 72,1 72,18 69,18" fill="#2E4AF0" />
            <polygon points="76,1 82,1 72,30 68,30" fill="#0A0A0A" />
            <polygon points="80,1 84,1 77,18 74,18" fill="#2E4AF0" />
          </g>

          {/* Letter O */}
          <path
            d="M90 8H104C108 8 111 11 111 15V23C111 27 108 30 104 30H90C86 30 83 27 83 23V15C83 11 86 8 90 8ZM90 13C88.5 13 88 14 88 15.5V22.5C88 24 88.5 25 90 25H104C105.5 25 106 24 106 22.5V15.5C106 14 105.5 13 104 13H90Z"
            fill="#0A0A0A"
          />
          {/* Letter N */}
          <path d="M117 8H122L133 22V8H138V30H133L122 16V30H117V8Z" fill="#0A0A0A" />
        </svg>
      </div>

      {showSubtitle && (
        <span
          className="text-[#0a0a0a] font-sans font-semibold tracking-widest pl-1 leading-none"
          style={{ fontSize: `${10 * scale}px`, marginTop: `-${4 * scale}px` }}
        >
          Systems
        </span>
      )}
    </div>
  );
};
