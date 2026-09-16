import React, { useState } from 'react';
import { PitchData, PitchSlide } from '../types';
import { ImageSlot } from './ImageSlot';
import { Layers, FileText, UploadCloud, Check } from 'lucide-react';

interface PitchSlidesSectionProps {
  pitchData: PitchData;
  onImageChange: (slotId: string, url: string) => void;
}

export const PitchSlidesSection: React.FC<PitchSlidesSectionProps> = ({
  pitchData,
  onImageChange,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'early' | 'tech' | 'growth'>('all');

  const filteredSlides = pitchData.slides.filter((slide) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'early') return slide.pageNumber <= 3;
    if (activeFilter === 'tech') return slide.pageNumber === 4 || slide.pageNumber === 5;
    if (activeFilter === 'growth') return slide.pageNumber >= 6;
    return true;
  });

  return (
    <section id="slides" className="py-20 bg-[#d0d0d0] border-t border-b border-stone-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Slide Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-stone-400 gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase block mb-1">
              SLIDE-BY-SLIDE WALKTHROUGH
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight">
              Pitch Deck Slides & Visual Slots
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#bebebe] rounded-lg border border-stone-400 text-xs font-mono">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                activeFilter === 'all'
                  ? 'bg-elevon-black text-white'
                  : 'text-stone-800 hover:text-elevon-blue'
              }`}
            >
              All (1-7)
            </button>
            <button
              onClick={() => setActiveFilter('early')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                activeFilter === 'early'
                  ? 'bg-elevon-black text-white'
                  : 'text-stone-800 hover:text-elevon-blue'
              }`}
            >
              Foundations (1-3)
            </button>
            <button
              onClick={() => setActiveFilter('tech')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                activeFilter === 'tech'
                  ? 'bg-elevon-black text-white'
                  : 'text-stone-800 hover:text-elevon-blue'
              }`}
            >
              Tech & Data (4-5)
            </button>
            <button
              onClick={() => setActiveFilter('growth')}
              className={`px-3 py-1.5 rounded-md font-semibold transition-colors ${
                activeFilter === 'growth'
                  ? 'bg-elevon-black text-white'
                  : 'text-stone-800 hover:text-elevon-blue'
              }`}
            >
              Market & Team (6-7)
            </button>
          </div>
        </div>

        {/* Instructions banner */}
        <div className="mb-8 p-4 bg-[#dedede] border border-stone-400 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-stone-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-elevon-blue text-white flex items-center justify-center shrink-0">
              <UploadCloud size={16} />
            </div>
            <div>
              <span className="font-bold text-elevon-black uppercase block">Slide Visual Placeholders:</span>
              Drag your slide PNG or exported PDF pages into each slot. On GitHub Pages, copy images to <code className="bg-stone-300 px-1 py-0.5 rounded text-black">/public/images/</code>.
            </div>
          </div>
        </div>

        {/* Slide Cards List */}
        <div className="space-y-8">
          {filteredSlides.map((slide) => (
            <div
              key={slide.pageNumber}
              className="bg-[#e4e4e4] rounded-2xl border-2 border-stone-400/90 p-6 md:p-8 shadow-sm hover:border-elevon-black transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Slide Content */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold px-3 py-1 bg-elevon-black text-white rounded">
                      PAGE {slide.pageNumber.toString().padStart(2, '0')}
                    </span>
                    {slide.subtitle && (
                      <span className="text-xs font-mono font-semibold text-stone-600">
                        {slide.subtitle}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-elevon-black">
                    {slide.title}
                  </h3>

                  <ul className="space-y-2.5 pt-2">
                    {slide.summaryPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-elevon-blue mt-1.5 shrink-0"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-[11px] font-mono text-stone-600">
                    Expected visual: <span className="font-semibold text-elevon-black">{slide.imagePlaceholder.label}</span>
                  </div>
                </div>

                {/* Right: Dedicated Image Slot */}
                <div className="lg:col-span-7">
                  <ImageSlot
                    id={slide.imagePlaceholder.id}
                    pageNumber={slide.pageNumber}
                    label={slide.imagePlaceholder.label}
                    aspectRatio={slide.imagePlaceholder.aspectRatio}
                    recommendedSize={slide.imagePlaceholder.recommendedSize}
                    customUrl={slide.imagePlaceholder.customUrl}
                    onImageChange={onImageChange}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
