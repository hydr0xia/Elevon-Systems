import React from 'react';
import { Play } from 'lucide-react';

export const ProofSection: React.FC = () => {
  const proofItems = [
    {
      icon: (
        <svg viewBox="0 0 36 36" className="w-7 h-7 text-elevon-blue" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Central fuselage body */}
          <rect x="14" y="14" width="8" height="8" rx="2" stroke="#2E4AF0" strokeWidth="1.8" />
          <circle cx="18" cy="18" r="1.5" fill="#2E4AF0" />
          {/* 4 Diagonal Arms */}
          <line x1="14" y1="14" x2="8" y2="8" stroke="#2E4AF0" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="22" y1="14" x2="28" y2="8" stroke="#2E4AF0" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="14" y1="22" x2="8" y2="28" stroke="#2E4AF0" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="22" y1="22" x2="28" y2="28" stroke="#2E4AF0" strokeWidth="1.8" strokeLinecap="round" />
          {/* 4 Rotors */}
          <circle cx="7" cy="7" r="4" stroke="#2E4AF0" strokeWidth="1.5" />
          <circle cx="29" cy="7" r="4" stroke="#2E4AF0" strokeWidth="1.5" />
          <circle cx="7" cy="29" r="4" stroke="#2E4AF0" strokeWidth="1.5" />
          <circle cx="29" cy="29" r="4" stroke="#2E4AF0" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Flying',
      desc: 'working radar module on a live quadcopter (TRL 4/5)',
    },
    {
      icon: (
        <svg viewBox="0 0 36 36" className="w-7 h-7 text-elevon-blue" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Trophy Cup */}
          <path d="M10 7H26V16C26 20.4 22.4 24 18 24C13.6 24 10 20.4 10 16V7Z" stroke="#2E4AF0" strokeWidth="1.8" strokeLinejoin="round" />
          {/* Left Handle */}
          <path d="M10 10H7C5.5 10 4 11.5 4 13.5C4 15.5 5.5 17 7 17H10" stroke="#2E4AF0" strokeWidth="1.8" strokeLinecap="round" />
          {/* Right Handle */}
          <path d="M26 10H29C30.5 10 32 11.5 32 13.5C32 15.5 30.5 17 29 17H26" stroke="#2E4AF0" strokeWidth="1.8" strokeLinecap="round" />
          {/* Stem */}
          <line x1="18" y1="24" x2="18" y2="29" stroke="#2E4AF0" strokeWidth="1.8" />
          {/* Pedestal Base */}
          <line x1="11" y1="29" x2="25" y2="29" stroke="#2E4AF0" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Top 5',
      desc: "of all teams at India's national RISC-V challenge (C2S)",
    },
    {
      icon: (
        <svg viewBox="0 0 36 36" className="w-7 h-7 text-elevon-blue" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Coin */}
          <ellipse cx="18" cy="11" rx="10" ry="4" stroke="#2E4AF0" strokeWidth="1.8" />
          {/* Second Layer Coin */}
          <path d="M8 11V17C8 19.2 12.5 21 18 21C23.5 21 28 19.2 28 17V11" stroke="#2E4AF0" strokeWidth="1.8" />
          {/* Third Layer Coin */}
          <path d="M8 17V23C8 25.2 12.5 27 18 27C23.5 27 28 25.2 28 23V17" stroke="#2E4AF0" strokeWidth="1.8" />
        </svg>
      ),
      title: '₹ 3 L',
      desc: 'Grant won and already deployed to build the PoC',
    },
    {
      icon: (
        <svg viewBox="0 0 36 36" className="w-7 h-7 text-elevon-blue" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Leader Node */}
          <circle cx="18" cy="8.5" r="3.5" stroke="#2E4AF0" strokeWidth="1.8" />
          <path d="M12 17C12 14.8 14.5 13.5 18 13.5C21.5 13.5 24 14.8 24 17" stroke="#2E4AF0" strokeWidth="1.8" strokeLinecap="round" />
          {/* Lower Left Partner Node */}
          <circle cx="9" cy="21.5" r="3" stroke="#2E4AF0" strokeWidth="1.6" />
          <path d="M4 29C4 27 6.2 25.5 9 25.5C11.8 25.5 14 27 14 29" stroke="#2E4AF0" strokeWidth="1.6" strokeLinecap="round" />
          {/* Lower Right Partner Node */}
          <circle cx="27" cy="21.5" r="3" stroke="#2E4AF0" strokeWidth="1.6" />
          <path d="M22 29C22 27 24.2 25.5 27 25.5C29.8 25.5 32 27 32 29" stroke="#2E4AF0" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
      title: 'C-DAC',
      desc: 'Secured as our R&D partner for the silicon',
    },
  ];

  return (
    <section id="proof" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="w-8 h-[3px] bg-elevon-blue mb-2.5"></div>
        <div className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase mb-6">
          PROOF
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight leading-tight mb-4">
              We've already<br />
              de-risked the hard part.
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-xs mb-6 font-normal">
              Most pre-seed hardware teams pitch a slide. We fly a working system.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-elevon-blue hover:text-elevon-blueDark uppercase transition-colors"
            >
              <span>WATCH DEMO</span>
              <Play size={13} fill="currentColor" />
            </a>
          </div>

          {/* Right Cards (8 cols: 4 cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {proofItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border border-stone-200/90 shadow-xs flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-elevon-black tracking-tight mb-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
