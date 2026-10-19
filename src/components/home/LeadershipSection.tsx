import React from 'react';
import { LEADERSHIP_DATA } from '../../data/companyData';
import { Briefcase, Code } from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#FAFAF8] dark:bg-[#0C0D0F] border-b border-[#E2E5EB] dark:border-[#242830] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-18">
          <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
            COMPANY LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-[1.12] mb-5">
            The people behind ALZA.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
            Founded by engineers and practitioners committed to building dependable digital systems for local institutions and enterprises.
          </p>
        </div>

        {/* Minimalist text-led composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_DATA.map((leader, idx) => {
            const isCEO = idx === 0;
            const Icon = isCEO ? Briefcase : Code;

            return (
              <div
                key={leader.name}
                className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 lg:p-10 hover:border-[#17191D] dark:hover:border-white/50 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Header with clean monogram insignia */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-3.5 h-3.5 text-[#5F6573] dark:text-[#9CA3AF]" />
                        <span className="font-mono text-xs font-semibold text-[#5F6573] dark:text-[#9CA3AF] uppercase tracking-wider">
                          {leader.role}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
                        {leader.name}
                      </h3>
                    </div>

                    <div className="w-11 h-11 rounded-lg bg-[#FAFAF8] dark:bg-[#1A1D23] border border-[#E2E5EB] dark:border-[#242830] flex items-center justify-center font-mono font-bold text-xs text-[#17191D] dark:text-white select-none">
                      {leader.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#FAFAF8] dark:bg-[#1A1D23] rounded-lg border border-[#E2E5EB] dark:border-[#242830] mb-5">
                    <span className="text-[10.5px] font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-1 font-mono">
                      Domain Focus
                    </span>
                    <span className="text-xs text-[#5F6573] dark:text-[#9CA3AF] font-medium block">
                      {leader.focus}
                    </span>
                  </div>

                  <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                    {leader.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E5EB] dark:border-[#242830] flex items-center justify-between text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                  <span>ALZA.Net IT Solutions</span>
                  <span className="font-mono text-[11px] text-[#17191D] dark:text-white">Bohol, PH</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification note */}
        <div className="mt-10 text-center">
          <span className="text-xs text-[#8B92A0] dark:text-[#6B7280]">
            Leadership records are verified. ALZA operates with direct founder-led engineering and client oversight.
          </span>
        </div>
      </div>
    </section>
  );
};
