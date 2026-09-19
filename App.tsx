import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedPartners } from './components/TrustedPartners';
import { ProblemSection } from './components/ProblemSection';
import { ProductsSection } from './components/ProductsSection';
import { TechnologySection } from './components/TechnologySection';
import { MarketSection } from './components/MarketSection';
import { ProofSection } from './components/ProofSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#d9d9d9] text-elevon-black font-sans selection:bg-elevon-blue selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Trusted Partners Strip */}
        <TrustedPartners />

        {/* Section: THE PROBLEM */}
        <ProblemSection />

        {/* Section: WHAT WE BUILD */}
        <ProductsSection />

        {/* Section: TECHNOLOGY */}
        <TechnologySection />

        {/* Section: MARKET */}
        <MarketSection />

        {/* Section: PROOF */}
        <ProofSection />

        {/* Call to Action Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
