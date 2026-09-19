import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  customLogoUrl?: string;
}

export const Footer: React.FC<FooterProps> = ({
  customLogoUrl,
}) => {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Technology', href: '#technology' },
    { label: 'Market', href: '#market' },
    { label: 'Our Story', href: '#story' },
    { label: 'Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
  ];

  return (
    <footer className="pt-12 pb-16 border-t border-stone-300 bg-[#d9d9d9] text-elevon-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Logo, Nav, Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          {/* Logo */}
          <div>
            <Logo
              size="md"
              customLogoUrl={customLogoUrl}
            />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-stone-800">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-elevon-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3 text-elevon-black">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 hover:text-elevon-blue transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-1.5 hover:text-elevon-blue transition-colors"
            >
              <Youtube size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-1.5 hover:text-elevon-blue transition-colors text-sm font-bold font-mono"
            >
              &#120143;
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright & Legal */}
        <div className="pt-6 border-t border-stone-300/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-600 font-sans">
          <p>&copy; {new Date().getFullYear()} Elevon Systems Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-elevon-blue transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-elevon-blue transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-elevon-blue transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
