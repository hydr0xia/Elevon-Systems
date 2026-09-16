import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Edit3, Github, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenPitchEditor: () => void;
  onOpenGitHubModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPitchEditor,
  onOpenGitHubModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Problem & Solution', href: '#problem-solution' },
    { label: 'Key Metrics', href: '#metrics' },
    { label: 'Pitch Slides', href: '#slides' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#d9d9d9]/95 backdrop-blur-md shadow-sm border-b border-elevon-border/70 py-3'
          : 'bg-[#d9d9d9] py-4 border-b border-stone-300/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Logo size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-elevon-black">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-elevon-blue transition-colors uppercase tracking-wider text-xs font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenPitchEditor}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-elevon-black bg-[#cfcfcf] hover:bg-white border border-stone-400/80 rounded-lg transition-all shadow-xs"
            title="Edit pitch deck metrics and text"
          >
            <Edit3 size={13} className="text-elevon-blue" />
            <span>Edit Pitch Values</span>
          </button>

          <button
            onClick={onOpenGitHubModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-elevon-blue hover:bg-elevon-blueDark rounded-lg transition-all shadow-xs"
          >
            <Github size={14} />
            <span>GitHub Pages Guide</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-elevon-black hover:text-elevon-blue"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#d9d9d9] border-b border-elevon-border px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-elevon-black hover:text-elevon-blue py-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-stone-300 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPitchEditor();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-elevon-black bg-white border border-stone-400 rounded-lg"
            >
              <Edit3 size={14} className="text-elevon-blue" />
              <span>Edit Pitch Values</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white bg-elevon-blue rounded-lg"
            >
              <Github size={14} />
              <span>GitHub Pages Deployment Guide</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
