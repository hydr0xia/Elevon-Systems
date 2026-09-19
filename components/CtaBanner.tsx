import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0a] rounded-xl px-8 py-10 sm:px-12 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-lg">
          
          {/* Left Text */}
          <div>
            <div className="text-[11px] font-mono font-bold tracking-widest text-stone-400 uppercase mb-2">
              LET'S BUILD TOGETHER
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Sovereign autonomy starts here.
            </h2>
          </div>

          {/* Right Action */}
          <div className="shrink-0">
            <a
              href="mailto:tech@elevonsystems.in"
              className="inline-flex items-center gap-2 bg-elevon-blue hover:bg-elevon-blueDark text-white px-7 py-3.5 rounded-xs font-semibold text-xs tracking-wider uppercase transition-colors shadow-md"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
