import React from 'react';
import { Logo } from './Logo';
import { Github, ArrowUp, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenGitHubModal: () => void;
  contactEmail?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenGitHubModal,
  contactEmail = 'contact@elevon.aero',
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#cfcfcf] border-t-2 border-elevon-black/80 py-12 text-elevon-black font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-stone-400">
          
          <div className="space-y-2">
            <Logo size="md" />
            <p className="text-xs text-stone-700 max-w-sm">
              Aerodynamic intelligence, high-efficiency actuation, and next-generation flight surface control systems.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <button
              onClick={onOpenGitHubModal}
              className="flex items-center gap-1.5 px-3 py-2 bg-elevon-black text-white hover:bg-stone-900 rounded-lg transition-colors"
            >
              <Github size={14} className="text-elevon-blue" />
              <span>GitHub Pages Deployment</span>
            </button>

            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-1.5 px-3 py-2 bg-white border border-stone-400 hover:bg-stone-100 rounded-lg transition-colors text-elevon-black"
            >
              <Mail size={14} className="text-elevon-blue" />
              <span>{contactEmail}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 bg-white border border-stone-400 hover:bg-stone-100 rounded-lg transition-colors"
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-stone-600">
          <div>
            &copy; {new Date().getFullYear()} ELEVON. Theme: <span className="text-elevon-black font-bold">#d9d9d9</span> / <span className="text-elevon-blue font-bold">#2e4af0</span> / <span className="text-elevon-black font-bold">Black</span>.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-elevon-blue"></span>
            <span>Static Site &bull; GitHub Pages Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
