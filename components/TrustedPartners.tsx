import React, { useState } from 'react';

interface PartnerLogoProps {
  id: string;
  imageSrc: string;
  alt: string;
  fallback: React.ReactNode;
}

const PartnerLogoItem: React.FC<PartnerLogoProps> = ({ imageSrc, alt, fallback }) => {
  const [hasError, setHasError] = useState(false);

  if (!hasError && imageSrc) {
    return (
      <div className="flex items-center justify-center h-10 px-2 group">
        <img
          src={imageSrc}
          alt={alt}
          onError={() => setHasError(true)}
          className="h-7 w-auto object-contain transition-opacity"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-10 px-2 group">
      {fallback}
    </div>
  );
};

export const TrustedPartners: React.FC = () => {
  return (
    <section className="py-8 border-y border-stone-300/80 bg-[#d4d4d4]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Label */}
          <div className="text-[11px] font-mono font-bold tracking-widest text-stone-600 uppercase text-center md:text-left shrink-0">
            <div>TRUSTED</div>
            <div>PARTNERS</div>
          </div>

          {/* Divider on Desktop */}
          <div className="hidden md:block w-px h-8 bg-stone-300"></div>

          {/* Partner 1: C-DAC */}
          <PartnerLogoItem
            id="cdac"
            imageSrc="/images/partners/cdac.png"
            alt="C-DAC Logo"
            fallback={
              <div className="flex flex-col items-center">
                <span className="font-semibold text-xs tracking-wider text-stone-800">सी-डैक</span>
                <span className="font-bold text-sm tracking-widest text-[#0a0a0a]">CDAC</span>
              </div>
            }
          />

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-stone-300"></div>

          {/* Partner 2: RISC-V */}
          <PartnerLogoItem
            id="riscv"
            imageSrc="/images/partners/riscv.png"
            alt="RISC-V Logo"
            fallback={
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 32 26" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H12L20 18V4H28V22H20L12 8V22H4V4Z" fill="#0A0A0A" />
                </svg>
                <span className="font-display font-extrabold text-base tracking-widest text-[#0a0a0a]">
                  RISC-V<span className="text-xs align-super">&reg;</span>
                </span>
              </div>
            }
          />

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-stone-300"></div>

          {/* Partner 3: Texas Instruments */}
          <PartnerLogoItem
            id="ti"
            imageSrc="/images/partners/ti.png"
            alt="Texas Instruments Logo"
            fallback={
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-auto" fill="none" stroke="#0a0a0a" strokeWidth="2">
                  <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="font-display font-bold text-xs tracking-wider text-[#0a0a0a]">TEXAS</span>
                  <span className="font-display font-bold text-[10px] tracking-wider text-[#0a0a0a]">INSTRUMENTS</span>
                </div>
              </div>
            }
          />

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-stone-300"></div>

          {/* Right Slogan */}
          <div className="text-xs font-mono text-stone-600 tracking-wide text-center md:text-right shrink-0">
            <div>Building an</div>
            <div className="text-stone-900 font-semibold">Atmanirbhar Tomorrow</div>
          </div>

        </div>
      </div>
    </section>
  );
};
