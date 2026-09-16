import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  customLogoUrl?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  customLogoUrl
}) => {
  if (customLogoUrl) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img
          src={customLogoUrl}
          alt="Elevon Logo"
          className={
            size === 'sm' ? 'h-6 w-auto' : size === 'lg' ? 'h-12 w-auto' : 'h-8 w-auto'
          }
        />
        {showText && (
          <span className="font-display font-extrabold tracking-widest text-elevon-black text-xl">
            ELEVON
          </span>
        )}
      </div>
    );
  }

  const heightClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Aerodynamic Elevon Winglet SVG Logo */}
      <svg
        viewBox="0 0 54 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heightClasses[size]} w-auto transition-transform hover:scale-105 duration-200`}
        aria-label="Elevon Logo Glyph"
      >
        {/* Base dark winglet structure in high-contrast black */}
        <polygon
          points="4,38 20,6 32,6 16,38"
          fill="#0A0A0A"
        />
        {/* Aerodynamic active control surface / elevon flap in #2E4AF0 */}
        <polygon
          points="22,38 38,6 48,6 32,38"
          fill="#2E4AF0"
        />
        {/* Precision micro-slot edge */}
        <polygon
          points="41,6 45,6 38,20 34,20"
          fill="#0A0A0A"
          opacity="0.3"
        />
      </svg>

      {showText && (
        <div className="flex items-baseline">
          <span className="font-display font-extrabold tracking-[0.2em] text-elevon-black text-xl md:text-2xl leading-none">
            ELEVON
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-elevon-blue ml-1.5 self-center"></span>
        </div>
      )}
    </div>
  );
};
