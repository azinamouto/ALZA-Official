import React from 'react';
import { LEADERSHIP_DATA } from '../../data/companyData';
import { Briefcase, Code } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, DepthCard } from '../common/MotionPrimitives';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#FAFAFA] dark:bg-[#050506] border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <Reveal className="max-w-2xl mb-18">
          <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-4">
            COMPANY LEADERSHIP
          </div>
          <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7] mb-5 text-balance">
            The people behind ALZA.
          </h2>
          <p className="type-body text-[#585860] dark:text-[#9898A2]">
            Founded by engineers and practitioners committed to building dependable digital systems for local institutions and enterprises.
          </p>
        </Reveal>

        {/* Minimalist text-led composition with DepthCard */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_DATA.map((leader, idx) => {
            const isCEO = idx === 0;
            const Icon = isCEO ? Briefcase : Code;

            return (
              <StaggerItem key={leader.name} className="h-full">
                <DepthCard tiltStrength={3} className="p-8 lg:p-10 h-full">
                  <div>
                    {/* Header with clean monogram insignia */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="w-3.5 h-3.5 text-[#585860] dark:text-[#9898A2]" />
                          <span className="font-mono text-xs font-medium text-[#585860] dark:text-[#9898A2] uppercase tracking-[0.14em]">
                            {leader.role}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.02em]">
                          {leader.name}
                        </h3>
                      </div>

                      <img
                        src={leader.imageUrl}
                        alt={leader.name}
                        className="w-11 h-11 rounded-xl object-cover border border-[var(--border)] bg-[#F3F3F5] dark:bg-[#161619]"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-4 bg-[#F5F5F7]/75 dark:bg-[#111114]/80 rounded-xl border border-[var(--border)] mb-5">
                      <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block mb-1">
                        Domain Focus
                      </span>
                      <span className="text-xs text-[#585860] dark:text-[#9898A2] font-medium block leading-[1.5]">
                        {leader.focus}
                      </span>
                    </div>

                    <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                      {leader.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between text-xs text-[#585860] dark:text-[#9898A2]">
                    <span>ALZA.Net IT Solutions</span>
                    <span className="font-mono text-[11px] text-[#0E0E10] dark:text-[#F5F5F7]">Bohol, PH</span>
                  </div>
                </DepthCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Verification note */}
        <Reveal delay={0.1} className="mt-10 text-center">
          <span className="text-xs text-[#868690] dark:text-[#64646E]">
            Leadership records are verified. ALZA operates with direct founder-led engineering and client oversight.
          </span>
        </Reveal>
      </div>
    </section>
  );
};
