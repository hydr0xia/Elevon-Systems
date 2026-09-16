import React from 'react';
import { TeamMember } from '../types';
import { User, Shield, Award } from 'lucide-react';

interface TeamSectionProps {
  team: TeamMember[];
  onOpenPitchEditor: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  team,
  onOpenPitchEditor,
}) => {
  return (
    <section id="team" className="py-20 bg-[#d9d9d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-elevon-border gap-4">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-elevon-blue uppercase block mb-1">
              SLIDE 07 &bull; LEADERSHIP
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-elevon-black tracking-tight">
              Team & Advisors
            </h2>
          </div>

          <p className="text-xs font-mono text-stone-600 max-w-sm">
            Leadership roster from the pitch deck. Replace placeholder names with exact deck personnel.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#e5e5e5] rounded-xl p-6 border border-stone-400/80 hover:border-elevon-blue transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Avatar Slot */}
                <div className="w-16 h-16 rounded-lg bg-[#cfcfcf] border-2 border-stone-400/80 flex items-center justify-center text-stone-600 mb-5 relative group overflow-hidden">
                  {member.avatarUrl ? (
                    <img src={member.avatarUrl} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User size={28} className="text-elevon-black" />
                  )}
                  <span className="absolute bottom-0 right-0 bg-elevon-blue text-white text-[9px] font-mono px-1">
                    #{idx + 1}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="font-display font-bold text-xl text-elevon-black">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono font-bold text-elevon-blue uppercase mt-1">
                    {member.role}
                  </div>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed font-sans mt-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-300/80 flex items-center justify-between text-[11px] font-mono text-stone-600">
                <span>Slide 7 Verified</span>
                <span className="w-2 h-2 rounded-full bg-elevon-black"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
