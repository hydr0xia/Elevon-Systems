import React from 'react';
import { PitchMetric } from '../types';
import { Activity, Gauge, TrendingUp, Compass, Edit3 } from 'lucide-react';

interface MetricsGridProps {
  metrics: PitchMetric[];
  onOpenPitchEditor: () => void;
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({
  metrics,
  onOpenPitchEditor,
}) => {
  const icons = [
    <Gauge size={20} className="text-elevon-blue" key="1" />,
    <TrendingUp size={20} className="text-elevon-blue" key="2" />,
    <Activity size={20} className="text-elevon-blue" key="3" />,
    <Compass size={20} className="text-elevon-blue" key="4" />
  ];

  return (
    <section id="metrics" className="py-20 bg-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-elevon-border gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase block mb-1">
              BENCHMARKS & TARGET METRICS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight">
              Exact Pitch Values
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPitchEditor}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-elevon-black hover:bg-stone-900 text-white text-xs font-mono font-semibold rounded-md transition-colors"
            >
              <Edit3 size={12} className="text-elevon-blue" />
              <span>Modify Values</span>
            </button>
          </div>
        </div>

        {/* Notice badge regarding exact pitch deck numbers */}
        <div className="mb-8 p-3.5 bg-[#e4e4e4] border-l-4 border-elevon-blue rounded-r-lg flex items-center justify-between text-xs font-mono text-stone-700">
          <div>
            <strong className="text-elevon-black font-semibold uppercase">Exact Values Rule:</strong> Below figures reflect verified pitch data. You can click 'Modify Values' to update any figure to your exact slide numbers.
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={m.id}
              className="bg-[#e4e4e4] p-6 rounded-xl border border-stone-400/80 hover:border-elevon-blue transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-[#d9d9d9] rounded-lg border border-stone-400/60">
                    {icons[idx % icons.length]}
                  </div>
                  {m.sourceSlide && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-elevon-black text-white rounded">
                      SLIDE {m.sourceSlide}
                    </span>
                  )}
                </div>

                <div className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight mb-2">
                  {m.value}
                </div>

                <h3 className="font-sans font-bold text-sm text-stone-900 mb-1">
                  {m.label}
                </h3>
              </div>

              {m.subtext && (
                <p className="text-[11px] font-mono text-stone-600 mt-4 pt-3 border-t border-stone-300">
                  {m.subtext}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
