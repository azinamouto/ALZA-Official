import React, { useEffect, useRef, useState } from 'react';
import { SERVICES_DATA } from '../../data/companyData';
import { PageRoute, ServiceItem } from '../../types';
import { Code, Building2, Network, BarChart3, ArrowRight } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, DepthCard } from '../common/MotionPrimitives';

interface WhatWeDoProps {
  onNavigate: (page: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onNavigate, onSelectService }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const effectiveActive = hoveredIndex !== null ? hoveredIndex : activeIndex;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-service-index'));
            if (!Number.isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        rootMargin: '-34% 0px -42% 0px',
        threshold: 0.15,
      }
    );

    rowRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Building2':
        return Building2;
      case 'Network':
        return Network;
      case 'BarChart3':
        return BarChart3;
      default:
        return Code;
    }
  };

  return (
    <section className="py-28 sm:py-32 bg-[#FAFAFA] dark:bg-[#050506] border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <Reveal className="max-w-3xl mb-16 lg:mb-20">
          <div className="font-mono text-xs font-semibold tracking-[0.24em] text-[#27272C] dark:text-[#D4D4D8] uppercase mb-5">
            CORE SERVICE CAPABILITIES
          </div>
          <h2 className="type-h1 text-[#0E0E10] dark:text-[#F5F5F7] mb-5 text-balance">
            Engineering solutions for the way organizations work.
          </h2>
          <p className="text-base sm:text-[17px] text-[#52525B] dark:text-[#A1A1AA] leading-[1.68] max-w-2xl">
            We focus on software systems that reduce friction, automate statutory paperwork,
            and provide structural durability for public offices and enterprise operations.
          </p>
        </Reveal>

        {/* Top edge-fading hairline divider */}
        <div className="divider-fade" aria-hidden="true" />

        {/* Services Rows (01-04) */}
        <StaggerGroup>
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isActive = effectiveActive === index;

            return (
              <StaggerItem key={service.id}>
                <div
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  data-service-index={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start group/row transition-opacity duration-300"
                >
                  {/* Col 1: Tactile Number & Icon Tile with Active-In-View Highlight */}
                  <div
                    className={`lg:col-span-1 flex items-center lg:flex-col lg:items-start gap-3.5 transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-45 group-hover/row:opacity-100'
                    }`}
                  >
                    <span
                      className={`font-mono text-sm font-semibold tabular-nums transition-colors duration-300 ${
                        isActive
                          ? 'text-[#0E0E10] dark:text-[#F5F5F7]'
                          : 'text-[#71717A] dark:text-[#71717A]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0E0E10] text-white border-[#0E0E10] dark:bg-[#F5F5F7] dark:text-[#050506] dark:border-[#F5F5F7] shadow-[0_8px_20px_-4px_rgba(14,14,16,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] dark:shadow-[0_8px_22px_-4px_rgba(255,255,255,0.22),inset_0_1px_0_rgba(255,255,255,0.8)]'
                          : 'bg-[#F4F4F6] dark:bg-[#121215] text-[#27272A] dark:text-[#D4D4D8] border-[var(--border)] shadow-[0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_2px_rgba(0,0,0,0.6)]'
                      }`}
                    >
                      <Icon className="w-[18px] h-[18px] transition-transform duration-300 group-hover/row:scale-110" />
                    </div>
                  </div>

                  {/* Col 2: Expanded High-Contrast Typography & Primary Action */}
                  <div className="lg:col-span-5">
                    <h3 className="text-[1.75rem] sm:text-[2rem] font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.028em] leading-[1.12] mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-[1.0625rem] font-medium text-[#27272C] dark:text-[#D4D4D8] leading-[1.45] mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-base text-[#4A4A52] dark:text-[#A1A1AA] leading-[1.7] max-w-xl mb-7">
                      {service.description}
                    </p>

                    {/* Primary Action Button (distinct from secondary Explore Details link) */}
                    <button
                      onClick={() => onSelectService(service)}
                      className="group/btn btn-primary-depth inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white rounded-xl cursor-pointer"
                    >
                      <span>View Technical Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  {/* Col 3: Elevated Glass Panel — Operational Invariants Addressed */}
                  <div className="lg:col-span-6 w-full">
                    <DepthCard
                      tiltStrength={2.2}
                      hoverY={-5}
                      roundedClass="rounded-[20px]"
                      className="p-7 sm:p-8 bg-white/75 dark:bg-[#111114]/75 backdrop-blur-xl"
                    >
                      <div>
                        <span className="font-mono text-[11px] font-semibold text-[#27272C] dark:text-[#E4E4E7] uppercase tracking-[0.16em] block mb-5">
                          Operational Invariants Addressed
                        </span>
                        <ul className="space-y-3.5">
                          {service.operationalProblemsSolved.map((problem, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-[14.5px] text-[#3F3F46] dark:text-[#C4C4CC] leading-[1.6]"
                            >
                              <span
                                className="w-2 h-2 rounded-full border-[1.5px] border-[#0E0E10]/75 dark:border-[#F5F5F7]/80 shrink-0 mt-[7px]"
                                aria-hidden="true"
                              />
                              <span>{problem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-7 pt-5 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                        <span className="text-xs font-medium text-[#52525B] dark:text-[#9898A2]">
                          Verified Implementation Handover
                        </span>
                        <button
                          onClick={() => onNavigate('services')}
                          className="group/sec inline-flex items-center gap-1.5 text-xs font-medium text-[#52525B] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] transition-colors cursor-pointer underline-offset-4 hover:underline"
                        >
                          <span>Explore Details</span>
                          <span
                            aria-hidden="true"
                            className="inline-block transition-transform duration-300 group-hover/sec:translate-x-1"
                          >
                            →
                          </span>
                        </button>
                      </div>
                    </DepthCard>
                  </div>
                </div>

                {/* Edge-fading hairline divider */}
                <div className="divider-fade" aria-hidden="true" />
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Bottom Consultation Banner */}
        <Reveal delay={0.1} className="mt-16 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#52525B] dark:text-[#9898A2] text-xs">
          <div>
            <strong className="text-[#0E0E10] dark:text-[#F5F5F7] text-sm font-semibold block mb-1">
              Have specific institutional compliance or legacy records?
            </strong>
            <p className="leading-[1.6] text-sm text-[#52525B] dark:text-[#A1A1AA]">
              We evaluate existing databases, paper forms, and departmental workflows prior to architectural commitments.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary-depth px-6 py-3 bg-[#0E0E10] dark:bg-[#F5F5F7] text-white dark:text-[#050506] text-xs font-semibold rounded-xl hover:bg-[#1E1E22] dark:hover:bg-white whitespace-nowrap cursor-pointer shrink-0"
          >
            Consult Our Engineers
          </button>
        </Reveal>
      </div>
    </section>
  );
};
