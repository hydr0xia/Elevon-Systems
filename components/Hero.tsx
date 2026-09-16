import React from 'react';
import { PitchData } from '../types';
import { ImageSlot } from './ImageSlot';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  pitchData: PitchData;
  onOpenPitchEditor: () => void;
  onImageChange: (slotId: string, url: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  pitchData,
  onOpenPitchEditor,
  onImageChange,
}) => {
  const slide1 = pitchData.slides[0];

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#d9d9d9] text-elevon-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pitch Tag & Status Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-elevon-border/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-elevon-black text-white text-[11px] font-mono font-bold tracking-widest uppercase rounded">
            <span className="w-2 h-2 rounded-full bg-elevon-blue animate-pulse"></span>
            EXECUTIVE PITCH DECK &bull; PAGE 01
          </div>
          <div className="text-xs font-mono text-stone-700 flex items-center gap-3">
            <span className="hidden sm:inline font-semibold">PALETTE:</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#d9d9d9] border border-black inline-block"></span> #d9d9d9</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-[#2e4af0] inline-block"></span> #2e4af0</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-black inline-block"></span> Black</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Title & Punchy Pitch Thesis */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-elevon-blue uppercase block">
                {pitchData.deckSubtitle}
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-elevon-black leading-[1.05]">
                {pitchData.companyName}
              </h1>
              <p className="text-sm sm:text-base font-mono font-bold text-stone-800 tracking-wider uppercase">
                {pitchData.tagline}
              </p>
            </div>

            {/* Direct Value Drivers (Concise, no fluff) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#e5e5e5] border border-stone-400/80 rounded-lg">
                <div className="flex items-center gap-2 text-elevon-blue text-xs font-bold font-mono uppercase mb-1">
                  <Zap size={14} />
                  <span>Actuation Speed</span>
                </div>
                <div className="text-2xl font-display font-extrabold text-elevon-black">
                  {pitchData.keyMetrics[0]?.value || '< 12ms'}
                </div>
                <p className="text-[11px] text-stone-600 font-mono mt-0.5">
                  {pitchData.keyMetrics[0]?.label || 'Control surface response'}
                </p>
              </div>

              <div className="p-3 bg-[#e5e5e5] border border-stone-400/80 rounded-lg">
                <div className="flex items-center gap-2 text-elevon-blue text-xs font-bold font-mono uppercase mb-1">
                  <ShieldCheck size={14} />
                  <span>Drag Reduction</span>
                </div>
                <div className="text-2xl font-display font-extrabold text-elevon-black">
                  {pitchData.keyMetrics[1]?.value || '- 18.4%'}
                </div>
                <p className="text-[11px] text-stone-600 font-mono mt-0.5">
                  {pitchData.keyMetrics[1]?.label || 'Parasitic drag benchmark'}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#problem-solution"
                className="flex items-center gap-2 px-5 py-2.5 bg-elevon-black hover:bg-stone-900 text-white font-medium text-xs rounded-lg transition-colors uppercase tracking-wider font-mono shadow-xs"
              >
                <span>Explore Pitch Deck</span>
                <ArrowRight size={14} className="text-elevon-blue" />
              </a>

              <button
                onClick={onOpenPitchEditor}
                className="px-4 py-2.5 bg-[#e5e5e5] hover:bg-white text-elevon-black border border-stone-400/90 font-medium text-xs rounded-lg transition-colors uppercase tracking-wider font-mono"
              >
                Set Exact Pitch Values
              </button>
            </div>
          </div>

          {/* Right Column: Slide 1 Feature Image Slot */}
          <div className="lg:col-span-6">
            <div className="bg-[#e5e5e5] p-3 sm:p-4 rounded-2xl border-2 border-elevon-black/80 shadow-md">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-700">
                  Slide 01 Asset Slot
                </span>
                <span className="text-[10px] font-mono bg-elevon-blue text-white px-2 py-0.5 rounded font-semibold">
                  PAGE 1
                </span>
              </div>

              {slide1 && (
                <ImageSlot
                  id={slide1.imagePlaceholder.id}
                  pageNumber={slide1.pageNumber}
                  label={slide1.imagePlaceholder.label}
                  aspectRatio="16:9"
                  recommendedSize={slide1.imagePlaceholder.recommendedSize}
                  customUrl={slide1.imagePlaceholder.customUrl}
                  onImageChange={onImageChange}
                  className="w-full shadow-inner"
                />
              )}

              <p className="text-[11px] font-mono text-stone-600 mt-2.5 text-center">
                Replace with the hero visual / render from <strong>Page 1</strong> of your pitch deck.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
