import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  customLogoUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  customLogoUrl,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', href: '#home' },
    { id: 'products', label: 'PRODUCTS', href: '#products' },
    { id: 'technology', label: 'TECHNOLOGY', href: '#technology' },
    { id: 'market', label: 'MARKET', href: '#market' },
    { id: 'story', label: 'OUR STORY', href: '#story' },
    { id: 'team', label: 'TEAM', href: '#team' },
    { id: 'careers', label: 'CAREERS', href: '#careers' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#d9d9d9] border-b border-stone-300/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Logo
            size="md"
            customLogoUrl={customLogoUrl}
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[12px] font-semibold tracking-widest text-[#262626]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`relative py-2 transition-colors hover:text-elevon-blue ${
                  isActive ? 'text-elevon-black' : 'text-stone-700'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-elevon-blue rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-elevon-blue hover:bg-elevon-blueDark text-white text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-xs"
          >
            REQUEST BRIEF
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-elevon-blue focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#d9d9d9] border-b border-stone-300 px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 text-sm font-semibold tracking-wider text-stone-800 hover:text-elevon-blue"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 bg-elevon-blue hover:bg-elevon-blueDark text-white text-xs font-semibold tracking-wider uppercase rounded-xs"
            >
              REQUEST BRIEF
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
