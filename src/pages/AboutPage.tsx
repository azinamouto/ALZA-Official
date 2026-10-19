import React from 'react';
import { COMPANY_INFO, LEADERSHIP_DATA } from '../data/companyData';
import { PageRoute } from '../types';
import { MapPin, Target, Eye, Compass, Briefcase, Code } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24">
      {/* Page Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] py-16 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-[11px] font-mono font-medium text-[#5F6573] dark:text-[#9CA3AF] uppercase tracking-[0.2em] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#17191D] dark:text-white" />
              <span>BOHOL, PHILIPPINES · ESTABLISHED {COMPANY_INFO.foundingYear}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-tight mb-6">
              About ALZA.Net IT Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
              We are an engineering consultancy based in Bohol, Philippines.
              We build practical digital systems for local government units, organizations,
              and businesses — transforming complex operations into reliable, auditable software.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16 space-y-20">
        {/* The Motto Section */}
        <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-[11px] font-mono font-bold text-[#8B92A0] dark:text-[#6B7280] uppercase tracking-[0.16em] block mb-2">
              CORPORATE MOTTO
            </span>
            <h2 className="text-3xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
              WE FIND. WE SOLVE. WE LIFT.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#E2E5EB] dark:border-[#242830]">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono">
                <span className="text-xs font-bold text-[#17191D] dark:text-white">01.</span>
                <h3 className="text-base font-bold text-[#17191D] dark:text-[#F7F7F8]">WE FIND</h3>
              </div>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                We uncover the authentic operational friction: fragmented records, misplaced documents, manual recalculations, and reporting bottlenecks that exhaust institutional staff.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 font-mono">
                <span className="text-xs font-bold text-[#17191D] dark:text-white">02.</span>
                <h3 className="text-base font-bold text-[#17191D] dark:text-[#F7F7F8]">WE SOLVE</h3>
              </div>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                We engineer solid solutions with normalized relational schemas, explicit state machines, and intuitive interfaces designed around the people who actually operate them every day.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 font-mono">
                <span className="text-xs font-bold text-[#17191D] dark:text-white">03.</span>
                <h3 className="text-base font-bold text-[#17191D] dark:text-[#F7F7F8]">WE LIFT</h3>
              </div>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                We elevate organizations by modernizing public service delivery, giving decision-makers clear data visibility, and building systems that endure across leadership terms.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Engineering Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white rounded-lg w-fit mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#17191D] dark:text-[#F7F7F8] mb-3">Our Mission</h3>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                To design and deploy dependable, localized information systems and custom software that empower Philippine public offices and enterprises with clarity, efficiency, and compliance.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white rounded-lg w-fit mb-5">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#17191D] dark:text-[#F7F7F8] mb-3">Our Vision</h3>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                To be the benchmark software engineering partner for institutional modernization in Bohol and Central Visayas — recognized for craftsmanship, honesty, and pragmatic execution.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white rounded-lg w-fit mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#17191D] dark:text-[#F7F7F8] mb-3">Engineering Philosophy</h3>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                Simplicity, transparency, and data integrity over transient hype. We avoid fragile shortcuts and fabricate no vanity metrics. We measure value by how cleanly a system operates.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-2">
              EXECUTIVE & TECHNICAL LEADERSHIP
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
              The People Behind ALZA
            </h2>
            <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] mt-2">
              Founder-led engineering and client consultation on every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_DATA.map((leader, idx) => {
              const isCEO = idx === 0;
              const Icon = isCEO ? Briefcase : Code;

              return (
                <div
                  key={leader.name}
                  className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs flex flex-col justify-between"
                >
                  <div>
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

                  <div className="pt-6 mt-8 border-t border-[#E2E5EB] dark:border-[#242830] flex items-center justify-between text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                    <span>ALZA.Net IT Solutions</span>
                    <span className="font-mono text-[#17191D] dark:text-white">Bohol, Philippines</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location & Presence */}
        <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-2">
                REGIONAL PRESENCE
              </div>
              <h2 className="text-2xl font-bold text-[#17191D] dark:text-[#F7F7F8] mb-3">
                Rooted in Bohol, Serving Central Visayas and Beyond
              </h2>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                Operating from Bohol allows us to maintain direct, in-person discovery sessions with municipal heads, local government units, and regional enterprises. When building software that touches citizen services and administrative records, there is no substitute for walking the floor and understanding the operational reality.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FAFAF8] dark:bg-[#1A1D23] border border-[#E2E5EB] dark:border-[#242830] rounded-lg p-6 text-xs text-[#5F6573] dark:text-[#9CA3AF] space-y-3 font-mono">
              <div>
                <strong className="text-[#17191D] dark:text-white block mb-0.5">Primary Location</strong>
                <span>Bohol, Central Visayas, Philippines</span>
              </div>
              <div>
                <strong className="text-[#17191D] dark:text-white block mb-0.5">Consultation Inquiries</strong>
                <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-[#17191D] dark:text-white underline">
                  {COMPANY_INFO.primaryEmail}
                </a>
              </div>
              <div>
                <strong className="text-[#17191D] dark:text-white block mb-0.5">Focus Sectors</strong>
                <span>Local Government Units, Cooperatives, Regional Enterprises</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="p-8 sm:p-10 bg-[#17191D] dark:bg-[#141619] border border-[#242830] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Partner with our engineering team</h3>
            <p className="text-xs text-white/70 max-w-xl">
              Discuss your organization's technical needs directly with Jhary and AJ.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#FFFFFF] text-[#17191D] text-xs font-semibold rounded-lg hover:bg-[#FAFAF8] transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Schedule Discussion
          </button>
        </div>
      </div>
    </div>
  );
};
