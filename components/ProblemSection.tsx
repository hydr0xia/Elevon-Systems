import React from 'react';
import { EyeOff, Cpu, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow with Blue Accent Line */}
        <div className="w-8 h-[3px] bg-elevon-blue mb-2.5"></div>
        <div className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase mb-6">
          THE PROBLEM
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight leading-tight mb-4">
              Foreign eyes,<br />
              Foreign brains.
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-sm mb-6 font-normal">
              Today's autonomous machines depend on imported sensors and chips — a safety and sovereignty risk.
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-elevon-blue hover:text-elevon-blueDark uppercase transition-colors"
            >
              <span>LEARN MORE</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right Cards (8 cols: 2 columns of white cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 01 */}
            <div className="bg-white rounded-lg p-6 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-elevon-blue uppercase">
                    01 MACHINES CAN'T SEE
                  </span>
                </div>

                <div className="mb-6 text-stone-900">
                  <EyeOff size={42} strokeWidth={1.5} className="text-elevon-black" />
                </div>

                <ul className="space-y-3.5 text-xs text-stone-700 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Drones & robots hit ultra-thin wires and obstacles cameras and LiDAR miss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Optical sensors fail in fog, dust and glare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>A single wire strike destroys the aircraft — the #1 blocker to safe BVLOS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-white rounded-lg p-6 sm:p-7 border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-elevon-blue uppercase">
                    02 THE CHIPS ARE ALL IMPORTED
                  </span>
                </div>

                <div className="mb-6 text-stone-900">
                  <Cpu size={42} strokeWidth={1.5} className="text-elevon-black" />
                </div>

                <ul className="space-y-3.5 text-xs text-stone-700 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Edge & companion compute relies on imported Cortex-M / foreign MCUs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Sensor ingestion overloads the flight controller — jitter, latency, power draw</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stone-400 mt-0.5">&bull;</span>
                    <span>Foreign silicon = supply-chain bottlenecks and hardware-level security risk</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
