import React from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ArrowRight } from 'lucide-react';

interface ProductsSectionProps {
  customAstranUrl?: string;
  customSutraUrl?: string;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  customAstranUrl = '/images/astran.png',
  customSutraUrl = '/images/sutra.png',
}) => {
  // High-res SVG graphic for ASTRAN radar module
  const astranGraphic = (
    <svg viewBox="0 0 260 160" className="w-full h-full max-h-36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="metal-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c2d30" />
          <stop offset="100%" stopColor="#151618" />
        </linearGradient>
      </defs>
      <rect x="50" y="35" width="160" height="95" rx="8" fill="url(#metal-grad)" stroke="#404040" strokeWidth="2" />
      <circle cx="62" cy="47" r="3" fill="#666" stroke="#222" />
      <circle cx="198" cy="47" r="3" fill="#666" stroke="#222" />
      <circle cx="62" cy="118" r="3" fill="#666" stroke="#222" />
      <circle cx="198" cy="118" r="3" fill="#666" stroke="#222" />
      <rect x="30" y="55" width="22" height="14" rx="2" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
      <rect x="24" y="57" width="8" height="10" rx="1" fill="#b45309" />
      <rect x="30" y="85" width="22" height="14" rx="2" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
      <rect x="24" y="87" width="8" height="10" rx="1" fill="#b45309" />
      <rect x="90" y="50" width="80" height="50" rx="4" fill="#0d0e10" stroke="#2E4AF0" strokeWidth="1" />
      <circle cx="115" cy="75" r="8" fill="#2E4AF0" opacity="0.8" />
      <circle cx="145" cy="75" r="8" fill="#2E4AF0" opacity="0.8" />
      <text x="130" y="118" fill="#9ca3af" fontSize="8" fontFamily="monospace" fontWeight="600" textAnchor="middle">
        ELEVON &bull; ASTRAN 60GHz
      </text>
    </svg>
  );

  // High-res SVG graphic for SUTRA-E SoC chip
  const sutraGraphic = (
    <svg viewBox="0 0 240 160" className="w-full h-full max-h-36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="65" y="25" width="110" height="110" rx="6" fill="#121316" stroke="#333" strokeWidth="2" />
      
      {[75, 90, 105, 120, 135, 150].map((x) => (
        <rect key={`t-${x}`} x={x} y="15" width="6" height="10" fill="#a3a3a3" rx="1" />
      ))}
      {[75, 90, 105, 120, 135, 150].map((x) => (
        <rect key={`b-${x}`} x={x} y="135" width="6" height="10" fill="#a3a3a3" rx="1" />
      ))}
      {[35, 50, 65, 80, 95, 110].map((y) => (
        <rect key={`l-${y}`} x="55" y={y} width="10" height="6" fill="#a3a3a3" rx="1" />
      ))}
      {[35, 50, 65, 80, 95, 110].map((y) => (
        <rect key={`r-${y}`} x="175" y={y} width="10" height="6" fill="#a3a3a3" rx="1" />
      ))}

      <circle cx="75" cy="35" r="3" fill="#2E4AF0" />

      <path d="M120 48L112 62H128L120 48Z" stroke="#e5e5e5" strokeWidth="1.5" fill="none" />
      <text x="120" y="78" fill="#ffffff" fontSize="11" fontWeight="800" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">
        SUTRA-E
      </text>
      <text x="120" y="92" fill="#9ca3af" fontSize="7" fontFamily="monospace" textAnchor="middle">
        RISC-V &bull; VEGA
      </text>
      <text x="120" y="104" fill="#6b7280" fontSize="6" fontFamily="monospace" textAnchor="middle">
        C-DAC PARTNERED
      </text>
    </svg>
  );

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="w-8 h-[3px] bg-elevon-blue mb-2.5"></div>
        <div className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase mb-6">
          WHAT WE BUILD
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight leading-tight mb-4">
              A proven product —<br />
              and the platform<br />
              behind it.
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-sm mb-6 font-normal">
              The radar module proves the pipeline in the field and earns revenue now. The SoC turns that proof into sovereign silicon — one narrow product today, a licensable platform across industries tomorrow.
            </p>
            <a
              href="#technology"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-elevon-blue hover:text-elevon-blueDark uppercase transition-colors"
            >
              <span>EXPLORE PRODUCTS</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Column (8 cols: 2 Product Cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Product 1: ASTRAN */}
            <div className="bg-white rounded-lg p-6 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-stone-500 uppercase">
                    PRODUCT 1
                  </span>
                  <span className="px-2.5 py-0.5 border border-elevon-blue text-elevon-blue text-[10px] font-mono font-bold uppercase rounded-full">
                    POC &bull; FLYING
                  </span>
                </div>

                {/* Product Image Slot */}
                <div className="mb-4 bg-stone-50 rounded p-2 flex items-center justify-center">
                  <ImagePlaceholder
                    id="product-astran-slot"
                    src={customAstranUrl}
                    alt="ASTRAN Drone Radar Obstacle-Avoidance Module"
                    aspectRatio="16/9"
                    label="ASTRAN Module"
                    defaultGraphic={astranGraphic}
                    className="w-full bg-transparent border-0"
                  />
                </div>

                <h3 className="font-display font-extrabold text-2xl text-elevon-blue tracking-tight">
                  ASTRAN
                </h3>
                <div className="text-xs font-medium text-stone-700 mb-4">
                  Drone Radar Obstacle-Avoidance Module
                </div>

                <ul className="space-y-2.5 text-xs text-stone-700 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Detects obstacles & wires as thin as 6 mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>mmWave radar + VEGA-on-FPGA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Working, flying today</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Narrow, proven, sellable now</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href="#technology"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-elevon-blue hover:text-elevon-blueDark uppercase transition-colors"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Product 2: SUTRA-E SoC */}
            <div className="bg-white rounded-lg p-6 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-stone-500 uppercase">
                    PRODUCT 2
                  </span>
                  <span className="px-2.5 py-0.5 border border-elevon-blue text-elevon-blue text-[10px] font-mono font-bold uppercase rounded-full">
                    ON-GOING
                  </span>
                </div>

                {/* Product Image Slot */}
                <div className="mb-4 bg-stone-50 rounded p-2 flex items-center justify-center">
                  <ImagePlaceholder
                    id="product-sutra-slot"
                    src={customSutraUrl}
                    alt="SUTRA-E SoC Indigenous edge-compute chip"
                    aspectRatio="16/9"
                    label="SUTRA-E SoC"
                    defaultGraphic={sutraGraphic}
                    className="w-full bg-transparent border-0"
                  />
                </div>

                <h3 className="font-display font-extrabold text-2xl text-elevon-blue tracking-tight">
                  SUTRA-E SoC
                </h3>
                <div className="text-xs font-medium text-stone-700 mb-4">
                  Indigenous edge-compute chip
                </div>

                <ul className="space-y-2.5 text-xs text-stone-700 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Built on C-DAC VEGA RISC-V core</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Same proven pipeline, hardened into silicon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>For UAVs, robotics and industrial systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Broad, high-margin platform</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href="#technology"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-elevon-blue hover:text-elevon-blueDark uppercase transition-colors"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
