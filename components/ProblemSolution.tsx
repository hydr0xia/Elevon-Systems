import React from 'react';
import { PitchData } from '../types';
import { ImageSlot } from './ImageSlot';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSolutionProps {
  pitchData: PitchData;
  onImageChange: (slotId: string, url: string) => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({
  pitchData,
  onImageChange,
}) => {
  const slide2 = pitchData.slides.find((s) => s.pageNumber === 2);
  const slide3 = pitchData.slides.find((s) => s.pageNumber === 3);

  return (
    <section id="problem-solution" className="py-20 bg-[#d4d4d4] border-t border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-elevon-border gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase block mb-1">
              SLIDES 02 &bull; 03 COMPARISON
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight">
              Problem & Solution
            </h2>
          </div>
          <p className="text-xs font-mono text-stone-600 max-w-md">
            Direct translation of the core challenge and Elevon architecture from pages 2 and 3 of the deck.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PROBLEM CARD */}
          <div className="bg-[#e2e2e2] rounded-xl p-6 border-2 border-stone-400/70 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-elevon-black text-white text-[11px] font-mono font-bold uppercase rounded">
                  <AlertCircle size={13} className="text-amber-400" />
                  SLIDE 02 &bull; THE PROBLEM
                </span>
                <span className="text-[11px] font-mono text-stone-600 font-semibold">
                  PAGE 2
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-elevon-black mb-4">
                Limitations in Legacy Control Surfaces
              </h3>

              {/* Problem Bullets */}
              <ul className="space-y-3 mb-6">
                {pitchData.problemSummary.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-800 leading-relaxed font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-elevon-black mt-2 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Slide 2 Image Slot */}
            {slide2 && (
              <div className="mt-4 pt-4 border-t border-stone-300">
                <ImageSlot
                  id={slide2.imagePlaceholder.id}
                  pageNumber={slide2.pageNumber}
                  label={slide2.imagePlaceholder.label}
                  aspectRatio="16:9"
                  recommendedSize={slide2.imagePlaceholder.recommendedSize}
                  customUrl={slide2.imagePlaceholder.customUrl}
                  onImageChange={onImageChange}
                  className="w-full"
                />
              </div>
            )}
          </div>

          {/* SOLUTION CARD */}
          <div className="bg-[#e2e2e2] rounded-xl p-6 border-2 border-elevon-blue shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-elevon-blue text-white text-[11px] font-mono font-bold uppercase rounded">
                  <CheckCircle2 size={13} />
                  SLIDE 03 &bull; THE SOLUTION
                </span>
                <span className="text-[11px] font-mono text-elevon-blue font-bold">
                  PAGE 3
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-elevon-black mb-4">
                Unified Elevon Dynamics
              </h3>

              {/* Solution Bullets */}
              <ul className="space-y-3 mb-6">
                {pitchData.solutionSummary.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-stone-900 leading-relaxed font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-elevon-blue mt-2 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Slide 3 Image Slot */}
            {slide3 && (
              <div className="mt-4 pt-4 border-t border-stone-300">
                <ImageSlot
                  id={slide3.imagePlaceholder.id}
                  pageNumber={slide3.pageNumber}
                  label={slide3.imagePlaceholder.label}
                  aspectRatio="16:9"
                  recommendedSize={slide3.imagePlaceholder.recommendedSize}
                  customUrl={slide3.imagePlaceholder.customUrl}
                  onImageChange={onImageChange}
                  className="w-full"
                />
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
