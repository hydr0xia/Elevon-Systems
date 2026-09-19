import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="w-8 h-[3px] bg-elevon-blue mb-2.5"></div>
        <div className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase mb-6">
          TECHNOLOGY
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight leading-tight mb-4">
              From echo to<br />
              autonomy.
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-xs mb-6 font-normal">
              A complete sensing and compute pipeline for real-world autonomy.
            </p>
            <a
              href="#market"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-elevon-blue hover:text-elevon-blueDark uppercase transition-colors"
            >
              <span>SEE HOW IT WORKS</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Pipeline (8 cols: 4 Connected steps with blue arrows) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-stone-200/90 shadow-xs">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2">
                
                {/* Step 1: Radar Sensing */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="mb-4 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="18" r="3" fill="#2E4AF0" />
                      <path d="M12.5 12.5C15.4 9.6 20.6 9.6 23.5 12.5" stroke="#2E4AF0" strokeWidth="2" strokeLinecap="round" />
                      <path d="M23.5 23.5C20.6 26.4 15.4 26.4 12.5 23.5" stroke="#2E4AF0" strokeWidth="2" strokeLinecap="round" />
                      <path d="M8 8C13.5 2.5 22.5 2.5 28 8" stroke="#2E4AF0" strokeWidth="2" strokeLinecap="round" />
                      <path d="M28 28C22.5 33.5 13.5 33.5 8 28" stroke="#2E4AF0" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4 className="font-sans font-bold text-xs text-elevon-black tracking-tight mb-1">
                    Radar Sensing
                  </h4>
                  <div className="text-[11px] font-mono font-semibold text-stone-700">
                    TI IWR6843AOP
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    60 GHz mmWave
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="hidden lg:flex items-center justify-center px-1 text-elevon-blue shrink-0">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="6" x2="20" y2="6" stroke="#2E4AF0" strokeWidth="1.5" />
                    <path d="M16 2L20 6L16 10" stroke="#2E4AF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Step 2: Signal Processing */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="mb-4 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="18" r="1.5" fill="#0A0A0A" />
                      <circle cx="30" cy="18" r="1.5" fill="#0A0A0A" />
                      <line x1="12" y1="10" x2="12" y2="26" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="24" y1="10" x2="24" y2="26" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="18" y1="5" x2="18" y2="31" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4 className="font-sans font-bold text-xs text-elevon-black tracking-tight mb-1">
                    Signal Processing
                  </h4>
                  <div className="text-[11px] font-mono font-semibold text-stone-700">
                    VEGA AT1051
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    parse, fuse & filter
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="hidden lg:flex items-center justify-center px-1 text-elevon-blue shrink-0">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="6" x2="20" y2="6" stroke="#2E4AF0" strokeWidth="1.5" />
                    <path d="M16 2L20 6L16 10" stroke="#2E4AF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Step 3: Obstacle Mapping */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="mb-4 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[7, 12.5, 18, 23.5, 29].map((y) =>
                        [7, 12.5, 18, 23.5, 29].map((x) => (
                          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="#0A0A0A" />
                        ))
                      )}
                    </svg>
                  </div>
                  <h4 className="font-sans font-bold text-xs text-elevon-black tracking-tight mb-1">
                    Obstacle Mapping
                  </h4>
                  <div className="text-[11px] font-mono font-semibold text-stone-700">
                    72-sector map
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    distance & direction
                  </div>
                </div>

                {/* Arrow 3 */}
                <div className="hidden lg:flex items-center justify-center px-1 text-elevon-blue shrink-0">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2" y1="6" x2="20" y2="6" stroke="#2E4AF0" strokeWidth="1.5" />
                    <path d="M16 2L20 6L16 10" stroke="#2E4AF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Step 4: Flight Integration */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="mb-4 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 29L31 6L20 30L15 20L6 29Z"
                        stroke="#0A0A0A"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <line x1="31" y1="6" x2="15" y2="20" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4 className="font-sans font-bold text-xs text-elevon-black tracking-tight mb-1">
                    Flight Integration
                  </h4>
                  <div className="text-[11px] font-mono font-semibold text-stone-700">
                    MAVLink → ArduPilot
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    auto-avoidance
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
