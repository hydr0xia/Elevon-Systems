import React, { useState, useEffect } from 'react';
import { initialPitchData } from './data/pitchData';
import { PitchData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { MetricsGrid } from './components/MetricsGrid';
import { PitchSlidesSection } from './components/PitchSlidesSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { PitchEditorModal } from './components/PitchEditorModal';
import { GitHubPagesModal } from './components/GitHubPagesModal';

const STORAGE_KEY = 'elevon_pitch_data_v1';

const App: React.FC = () => {
  const [pitchData, setPitchData] = useState<PitchData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialPitchData;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  // Save changes locally
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pitchData));
    } catch {
      // ignore
    }
  }, [pitchData]);

  // Handler for custom image uploads on slide slots
  const handleImageChange = (slotId: string, url: string) => {
    setPitchData((prev) => {
      const updatedSlides = prev.slides.map((slide) => {
        if (slide.imagePlaceholder.id === slotId) {
          return {
            ...slide,
            imagePlaceholder: {
              ...slide.imagePlaceholder,
              customUrl: url,
            },
          };
        }
        return slide;
      });
      return { ...prev, slides: updatedSlides };
    });
  };

  const handleSavePitchData = (newData: PitchData) => {
    setPitchData(newData);
  };

  return (
    <div className="min-h-screen bg-[#d9d9d9] text-elevon-black font-sans selection:bg-elevon-blue selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar
        onOpenPitchEditor={() => setIsEditorOpen(true)}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
      />

      <main>
        {/* Slide 1 Cover & Core Thesis */}
        <Hero
          pitchData={pitchData}
          onOpenPitchEditor={() => setIsEditorOpen(true)}
          onImageChange={handleImageChange}
        />

        {/* Slides 2 & 3: Problem & Solution */}
        <ProblemSolution
          pitchData={pitchData}
          onImageChange={handleImageChange}
        />

        {/* Slides 4 & 5: Exact Pitch Metrics & Validation */}
        <MetricsGrid
          metrics={pitchData.keyMetrics}
          onOpenPitchEditor={() => setIsEditorOpen(true)}
        />

        {/* All Pitch Deck Slides (1-7) with Image Placeholders */}
        <PitchSlidesSection
          pitchData={pitchData}
          onImageChange={handleImageChange}
        />

        {/* Slide 7: Team & Leadership */}
        <TeamSection
          team={pitchData.team}
          onOpenPitchEditor={() => setIsEditorOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
        contactEmail={pitchData.callToAction.contactEmail}
      />

      {/* Pitch Value Customizer Modal */}
      <PitchEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        pitchData={pitchData}
        onSave={handleSavePitchData}
      />

      {/* GitHub Pages 60-Second Setup Modal */}
      <GitHubPagesModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />
    </div>
  );
};

export default App;
