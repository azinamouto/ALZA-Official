import React from 'react';
import { COMPANY_INFO, LEADERSHIP_DATA } from '../data/companyData';
import { PageRoute } from '../types';
import { MapPin, Target, Eye, Compass, Briefcase, Code, ArrowUpRight } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, DepthCard } from '../components/common/MotionPrimitives';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24">
      {/* Page Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#08080A] border-b border-[var(--border)] py-18 relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 cosmic-grid opacity-55 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl">
            <div className="flex items-center gap-2 type-eyebrow text-[#585860] dark:text-[#9898A2] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#0E0E10] dark:text-[#F5F5F7]" />
              <span>BOHOL, PHILIPPINES · ESTABLISHED {COMPANY_INFO.foundingYear}</span>
            </div>
            <h1 className="type-h1 text-[#0E0E10] dark:text-[#F5F5F7] mb-6 text-balance">
              About ALZA.Net IT Solutions
            </h1>
            <p className="type-body text-[#585860] dark:text-[#9898A2] max-w-2xl">
              We are an engineering consultancy based in Bohol, Philippines.
              We build practical digital systems for local government units, organizations,
              and businesses — transforming complex operations into reliable, auditable software.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16 space-y-20">
        {/* The Motto Section */}
        <Reveal>
          <DepthCard enableTilt={false} className="p-8 sm:p-10">
            <div className="max-w-2xl mb-8">
              <span className="type-eyebrow text-[#868690] dark:text-[#64646E] block mb-2">
                CORPORATE MOTTO
              </span>
              <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7]">
                WE FIND. WE SOLVE. WE LIFT.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[var(--border)]">
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono">
                  <span className="text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7]">01.</span>
                  <h3 className="text-base font-semibold text-[#0E0E10] dark:text-[#F5F5F7]">WE FIND</h3>
                </div>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  We uncover the authentic operational friction: fragmented records, misplaced documents, manual recalculations, and reporting bottlenecks that exhaust institutional staff.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 font-mono">
                  <span className="text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7]">02.</span>
                  <h3 className="text-base font-semibold text-[#0E0E10] dark:text-[#F5F5F7]">WE SOLVE</h3>
                </div>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  We engineer solid solutions with normalized relational schemas, explicit state machines, and intuitive interfaces designed around the people who actually operate them every day.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 font-mono">
                  <span className="text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7]">03.</span>
                  <h3 className="text-base font-semibold text-[#0E0E10] dark:text-[#F5F5F7]">WE LIFT</h3>
                </div>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  We elevate organizations by modernizing public service delivery, giving decision-makers clear data visibility, and building systems that endure across leadership terms.
                </p>
              </div>
            </div>
          </DepthCard>
        </Reveal>

        {/* Mission, Vision & Engineering Philosophy */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem className="h-full">
            <DepthCard tiltStrength={3} className="p-8 h-full">
              <div>
                <div className="p-3 bg-[#EFEFF2] dark:bg-[#161619] border border-[var(--border)] text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl w-fit mb-5">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-3">Our Mission</h3>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  To design and deploy dependable, localized information systems and custom software that empower Philippine public offices and enterprises with clarity, efficiency, and compliance.
                </p>
              </div>
            </DepthCard>
          </StaggerItem>

          <StaggerItem className="h-full">
            <DepthCard tiltStrength={3} className="p-8 h-full">
              <div>
                <div className="p-3 bg-[#EFEFF2] dark:bg-[#161619] border border-[var(--border)] text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl w-fit mb-5">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-3">Our Vision</h3>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  To be the benchmark software engineering partner for institutional modernization in Bohol and Central Visayas — recognized for craftsmanship, honesty, and pragmatic execution.
                </p>
              </div>
            </DepthCard>
          </StaggerItem>

          <StaggerItem className="h-full">
            <DepthCard tiltStrength={3} className="p-8 h-full">
              <div>
                <div className="p-3 bg-[#EFEFF2] dark:bg-[#161619] border border-[var(--border)] text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl w-fit mb-5">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-3">Engineering Philosophy</h3>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  Simplicity, transparency, and data integrity over transient hype. We avoid fragile shortcuts and fabricate no vanity metrics. We measure value by how cleanly a system operates.
                </p>
              </div>
            </DepthCard>
          </StaggerItem>
        </StaggerGroup>

        {/* Leadership Section */}
        <div>
          <Reveal className="max-w-2xl mb-12">
            <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-2">
              EXECUTIVE & TECHNICAL LEADERSHIP
            </div>
            <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7]">
              The People Behind ALZA
            </h2>
            <p className="text-sm text-[#585860] dark:text-[#9898A2] mt-2 leading-[1.6]">
              Founder-led engineering and client consultation on every engagement.
            </p>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_DATA.map((leader, idx) => {
              const isCEO = idx === 0;
              const Icon = isCEO ? Briefcase : Code;

              return (
                <StaggerItem key={leader.name} className="h-full">
                  <DepthCard tiltStrength={3} className="p-8 sm:p-10 h-full">
                    <div>
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

                        <div className="w-11 h-11 rounded-xl bg-[#F3F3F5] dark:bg-[#161619] border border-[var(--border)] flex items-center justify-center font-mono font-semibold text-xs text-[#0E0E10] dark:text-[#F5F5F7] select-none">
                          {leader.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
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

                    <div className="pt-6 mt-8 border-t border-[var(--border)] flex items-center justify-between text-xs text-[#585860] dark:text-[#9898A2]">
                      <span>ALZA.Net IT Solutions</span>
                      <span className="font-mono text-[#0E0E10] dark:text-[#F5F5F7]">Bohol, Philippines</span>
                    </div>
                  </DepthCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Location & Presence */}
        <Reveal>
          <DepthCard enableTilt={false} className="p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-2">
                  REGIONAL PRESENCE
                </div>
                <h2 className="type-h3 text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                  Rooted in Bohol, Serving Central Visayas and Beyond
                </h2>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  Operating from Bohol allows us to maintain direct, in-person discovery sessions with municipal heads, local government units, and regional enterprises. When building software that touches citizen services and administrative records, there is no substitute for walking the floor and understanding the operational reality.
                </p>
              </div>

              <div className="lg:col-span-4 bg-[#F5F5F7]/75 dark:bg-[#111114]/80 border border-[var(--border)] rounded-2xl p-6 text-xs text-[#585860] dark:text-[#9898A2] space-y-3.5 font-mono">
                <div>
                  <strong className="text-[#0E0E10] dark:text-[#F5F5F7] block mb-0.5">Primary Location</strong>
                  <span>Bohol, Central Visayas, Philippines</span>
                </div>
                <div>
                  <strong className="text-[#0E0E10] dark:text-[#F5F5F7] block mb-0.5">Consultation Inquiries</strong>
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-[#0E0E10] dark:text-[#F5F5F7] underline underline-offset-4">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                </div>
                <div>
                  <strong className="text-[#0E0E10] dark:text-[#F5F5F7] block mb-0.5">Focus Sectors</strong>
                  <span>Local Government Units, Cooperatives, Regional Enterprises</span>
                </div>
              </div>
            </div>
          </DepthCard>
        </Reveal>

        {/* Closing CTA */}
        <Reveal>
          <div className="p-8 sm:p-10 bg-[#0A0A0C] dark:bg-[#0D0D0F] border border-white/10 text-white rounded-2xl shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#F5F5F7]">Partner with our engineering team</h3>
              <p className="text-xs text-white/65 max-w-xl leading-[1.6]">
                Discuss your organization's technical needs directly with Jhary and AJ.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="group px-6 py-3 bg-[#F5F5F7] text-[#050506] text-xs font-semibold rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_6px_20px_-4px_rgba(255,255,255,0.18)] whitespace-nowrap cursor-pointer shrink-0 inline-flex items-center gap-2"
            >
              <span>Schedule Discussion</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
