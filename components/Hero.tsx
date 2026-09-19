import React, { useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  customDroneUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  customDroneUrl = '/images/hero-drone.png',
}) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  };

  // High-res SVG graphic representing the quadcopter on test stand
  const droneGraphic = (
    <svg viewBox="0 0 540 420" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Test Stand Base & Uprights */}
      <ellipse cx="270" cy="380" rx="140" ry="24" fill="#000000" opacity="0.08" />
      <path d="M190 380L255 240H285L350 380" stroke="#8a8a8a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M210 340H330" stroke="#737373" strokeWidth="4" />
      <rect x="245" y="235" width="50" height="12" rx="2" fill="#525252" />

      {/* Main Airframe Center Plate */}
      <rect x="220" y="195" width="100" height="42" rx="4" fill="#1c1c1e" />
      
      {/* Blue Avionics & Compute Core */}
      <rect x="235" y="202" width="70" height="28" rx="2" fill="#2E4AF0" />
      <text x="270" y="220" fill="#ffffff" fontSize="9" fontWeight="700" fontFamily="monospace" textAnchor="middle">
        VEGA SoC
      </text>

      {/* Drone Arms (Orange / Carbon) */}
      <line x1="230" y1="210" x2="110" y2="175" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" />
      <line x1="230" y1="210" x2="110" y2="175" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      <line x1="310" y1="210" x2="430" y2="175" stroke="#0a0a0a" strokeWidth="12" strokeLinecap="round" />
      <line x1="310" y1="210" x2="430" y2="175" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      <line x1="240" y1="200" x2="155" y2="140" stroke="#0a0a0a" strokeWidth="10" strokeLinecap="round" />
      <line x1="240" y1="200" x2="155" y2="140" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />
      <line x1="300" y1="200" x2="385" y2="140" stroke="#0a0a0a" strokeWidth="10" strokeLinecap="round" />
      <line x1="300" y1="200" x2="385" y2="140" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />

      {/* Motor Mounts & Rotors */}
      <rect x="92" y="160" width="36" height="26" rx="3" fill="#262626" />
      <ellipse cx="110" cy="155" rx="70" ry="10" fill="#262626" opacity="0.35" />
      <line x1="40" y1="155" x2="180" y2="155" stroke="#171717" strokeWidth="3" strokeLinecap="round" />

      <rect x="412" y="160" width="36" height="26" rx="3" fill="#262626" />
      <ellipse cx="430" cy="155" rx="70" ry="10" fill="#262626" opacity="0.35" />
      <line x1="360" y1="155" x2="500" y2="155" stroke="#171717" strokeWidth="3" strokeLinecap="round" />

      <rect x="142" y="128" width="26" height="20" rx="2" fill="#262626" />
      <ellipse cx="155" cy="125" rx="55" ry="8" fill="#262626" opacity="0.3" />
      <line x1="100" y1="125" x2="210" y2="125" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />

      <rect x="372" y="128" width="26" height="20" rx="2" fill="#262626" />
      <ellipse cx="385" cy="125" rx="55" ry="8" fill="#262626" opacity="0.3" />
      <line x1="330" y1="125" x2="440" y2="125" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />

      {/* Upper Radar Payload Enclosure */}
      <rect x="238" y="145" width="64" height="42" rx="4" fill="#d97706" stroke="#92400e" strokeWidth="2" />
      <rect x="245" y="152" width="50" height="26" rx="2" fill="#b45309" />
      <text x="270" y="168" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="700" textAnchor="middle">
        ASTRAN mmWave
      </text>

      {/* Landing Gear / Wire Guards */}
      <path d="M225 240L205 320L180 320" stroke="#404040" strokeWidth="4" strokeLinecap="round" />
      <path d="M315 240L335 320L360 320" stroke="#404040" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );

  return (
    <section id="home" className="pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Text Column (6.5 cols) */}
          <div className="lg:col-span-7">
            
            {/* Blue Accent Bar & Pre-Seed Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[3px] bg-elevon-blue"></div>
              <div className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase">
                PRE-SEED &bull; TRL 4/5 &bull; 2026
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-elevon-black tracking-tight leading-[1.08] mb-5">
              Invisible to drones.<br />
              Visible to us.
            </h1>

            {/* Subtitle description */}
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-lg mb-8 font-normal">
              Elevon builds the eyes and brains of autonomous machines — from radar today to sovereign silicon tomorrow.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 mb-10">
              <a
                href="#technology"
                className="inline-flex items-center gap-2 bg-elevon-blue hover:bg-elevon-blueDark text-white px-6 py-3 rounded-xs font-semibold text-xs tracking-wider uppercase transition-colors shadow-xs"
              >
                <span>OUR TECHNOLOGY</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#proof"
                className="inline-flex items-center gap-2 text-elevon-black hover:text-elevon-blue px-4 py-3 font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                <span>WATCH DEMO</span>
                <Play size={13} fill="currentColor" />
              </a>
            </div>

            {/* Bottom Proof Line */}
            <div className="pt-2 text-xs font-medium text-elevon-blue tracking-wide flex flex-wrap items-center gap-2">
              <span>Flying PoC</span>
              <span className="text-stone-400">&bull;</span>
              <span>Top-5 national RISC-V challenge (C2S)</span>
              <span className="text-stone-400">&bull;</span>
              <span>C-DAC R&D partner</span>
            </div>
          </div>

          {/* Right Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Vertical Badge Top-Right */}
            <div className="absolute top-2 right-2 z-10 text-right font-mono text-[10px] tracking-widest leading-snug text-stone-700 font-semibold select-none border-l border-stone-400/80 pl-2 bg-[#d9d9d9]/60 backdrop-blur-xs">
              <div>RADAR</div>
              <div>COMPUTE</div>
              <div>AUTONOMY</div>
              <div>INDIGENOUSLY</div>
            </div>

            {/* Drone on Test Stand Image Slot */}
            <div className="relative w-full">
              <ImagePlaceholder
                id="hero-drone-slot"
                src={customDroneUrl}
                alt="Elevon Drone on Test Stand with Radar & RISC-V Compute"
                aspectRatio="4/3"
                label="Elevon Drone on Test Stand"
                defaultGraphic={droneGraphic}
                className="bg-transparent border-0 shadow-none"
              />
            </div>

            {/* Bottom-right Slider / Pagination indicator */}
            <div className="flex items-center justify-end gap-3 text-xs font-mono font-medium text-stone-800 mt-2 select-none">
              <span>
                {String(activeSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1 hover:text-elevon-blue transition-colors cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-stone-400">|</span>
                <button
                  onClick={handleNext}
                  className="p-1 hover:text-elevon-blue transition-colors cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
