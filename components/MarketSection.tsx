import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface MarketSectionProps {
  customMarketImageUrl?: string;
}

export const MarketSection: React.FC<MarketSectionProps> = ({
  customMarketImageUrl = '/images/market-drone.png',
}) => {
  // Mountain landscape with drone graphic
  const mountainDroneGraphic = (
    <svg viewBox="0 0 320 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill="#cbd5e1" opacity="0.3" />
      <polygon points="0,150 70,90 140,140 210,75 280,130 320,105 320,200 0,200" fill="#94a3b8" opacity="0.5" />
      <polygon points="0,165 90,120 170,160 250,115 320,155 320,200 0,200" fill="#64748b" opacity="0.65" />
      <polygon points="0,185 110,145 200,180 290,140 320,165 320,200 0,200" fill="#475569" opacity="0.85" />
      
      {/* Flying Drone Silhouette */}
      <g transform="translate(160, 65) scale(0.65)">
        <rect x="-20" y="-5" width="40" height="10" rx="3" fill="#0f172a" />
        <line x1="-35" y1="-5" x2="35" y2="-5" stroke="#0f172a" strokeWidth="4" />
        <ellipse cx="-35" cy="-8" rx="16" ry="3" fill="#0284c7" opacity="0.8" />
        <ellipse cx="35" cy="-8" rx="16" ry="3" fill="#0284c7" opacity="0.8" />
        <circle cx="0" cy="5" r="3" fill="#2E4AF0" />
      </g>
    </svg>
  );

  return (
    <section id="market" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="w-8 h-[3px] bg-elevon-blue mb-2.5"></div>
        <div className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase mb-6">
          MARKET
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight leading-tight mb-4">
              A $3B opportunity.<br />
              Starting in India.
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-xs mb-6 font-normal">
              Affordable detect-and-avoid for drones, robots and autonomous platforms.
            </p>
            <a
              href="#proof"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-elevon-blue hover:text-elevon-blueDark uppercase transition-colors"
            >
              <span>VIEW MARKET ANALYSIS</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Center Metrics (5 cols: 3 columns) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            
            {/* TAM */}
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-elevon-black tracking-tight">
                ~$3B
              </span>
              <span className="text-[11px] font-mono font-bold text-stone-500 uppercase mt-1 mb-2">
                TAM
              </span>
              <p className="text-[11px] text-stone-600 leading-snug">
                Global drone sensor / detect-and-avoid market
              </p>
            </div>

            {/* SAM */}
            <div className="flex flex-col sm:border-l sm:border-stone-300 sm:pl-5">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-elevon-black tracking-tight">
                ~₹280 Cr
              </span>
              <span className="text-[11px] font-mono font-bold text-stone-500 uppercase mt-1 mb-2">
                SAM
              </span>
              <p className="text-[11px] text-stone-600 leading-snug">
                India + aligned drone DAA per year
              </p>
            </div>

            {/* SOM */}
            <div className="flex flex-col sm:border-l sm:border-stone-300 sm:pl-5">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-elevon-black tracking-tight">
                ~₹6 Cr
              </span>
              <span className="text-[11px] font-mono font-bold text-stone-500 uppercase mt-1 mb-2">
                SOM
              </span>
              <p className="text-[11px] text-stone-600 leading-snug">
                Initial attainable market (India)
              </p>
            </div>

          </div>

          {/* Right Card: SAFER SKIES STRONGER NATION (3 cols) */}
          <div className="lg:col-span-3">
            <div className="relative rounded-lg overflow-hidden border border-stone-300 bg-white shadow-xs p-3">
              <div className="flex items-center gap-2 mb-2 pl-1 border-l-2 border-elevon-blue">
                <div className="text-[10px] font-mono font-bold tracking-widest text-stone-800 leading-tight uppercase">
                  <div>SAFER SKIES</div>
                  <div>STRONGER NATION</div>
                </div>
              </div>

              <ImagePlaceholder
                id="market-landscape-slot"
                src={customMarketImageUrl}
                alt="Safer Skies Stronger Nation Drone Operations"
                aspectRatio="16/10"
                label="Drone Operations in India"
                defaultGraphic={mountainDroneGraphic}
                className="w-full bg-slate-100"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
