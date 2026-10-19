import React from 'react';
import { PageRoute } from '../../types';
import { ArrowUpRight, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface ClosingCTAProps {
  onNavigate: (page: PageRoute) => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-28 bg-[#17191D] text-white relative overflow-hidden border-b border-[#262930]">
      {/* Background cosmic technical grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle monochromatic bloom */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Faint orbital line */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full border border-white/[0.08] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 text-[11px] font-mono font-medium tracking-[0.2em] text-[#8B92A0] uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <span>ENGAGE WITH ALZA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.08] mb-6 text-white text-balance">
            Let's build something that works.
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
            Have an operational challenge or an idea for a digital system? Tell us what you're trying to solve.
            We provide practical engineering assessments and honest technical feasibility reviews.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#17191D] bg-white hover:bg-[#FAFAF8] transition-colors rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#17191D]" />
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-colors rounded-lg whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-white/80" />
              <span>Direct Email Consultation</span>
            </a>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/50 font-mono">
            <span>ENGINEERING CONSULTATION</span>
            <span aria-hidden="true">·</span>
            <span>PUBLIC SECTOR & ENTERPRISE</span>
            <span aria-hidden="true">·</span>
            <span>BOHOL, PHILIPPINES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
