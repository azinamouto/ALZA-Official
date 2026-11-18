import React from 'react';
import { PageRoute } from '../../types';
import { ArrowUpRight, MessageSquare, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { Reveal } from '../common/MotionPrimitives';
import { MagneticButton } from '../common/MagneticButton';

interface ClosingCTAProps {
  onNavigate: (page: PageRoute) => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-28 bg-[#0A0A0C] dark:bg-[#050506] text-[#F5F5F7] relative overflow-hidden border-b border-white/10">
      {/* Background cosmic technical grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Liquid monochromatic ambient bloom */}
      <div
        className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[560px] h-[560px] rounded-full blur-[120px] pointer-events-none opacity-60"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(161,161,170,0.02) 50%, transparent 75%)',
        }}
      />

      {/* Faint orbital line */}
      <div className="absolute -bottom-52 -right-44 w-[620px] h-[620px] rounded-full border border-white/[0.07] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <Reveal className="max-w-3xl">
          <div className="type-eyebrow text-[#9898A2] mb-5">
            ENGAGE WITH ALZA
          </div>

          <h2 className="type-h1 text-white mb-6 text-balance">
            Let's build something that works.
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-[1.65] mb-10 max-w-2xl">
            Have an operational challenge or an idea for a digital system? Tell us what you're trying to solve.
            We provide practical engineering assessments and honest technical feasibility reviews.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() => onNavigate('contact')}
              strength={0.2}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#050506] bg-[#F5F5F7] hover:bg-white transition-all duration-300 hover:-translate-y-0.5 rounded-xl shadow-[0_8px_24px_-4px_rgba(255,255,255,0.18)] whitespace-nowrap cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#050506]" />
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>

            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-[#F5F5F7] bg-white/[0.04] hover:bg-white/[0.09] backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5 rounded-xl whitespace-nowrap"
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
        </Reveal>
      </div>
    </section>
  );
};
