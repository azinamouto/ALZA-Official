import React from 'react';
import { SERVICES_DATA } from '../../data/companyData';
import { PageRoute, ServiceItem } from '../../types';
import { Code, Building2, Network, BarChart3, ArrowRight } from 'lucide-react';

interface WhatWeDoProps {
  onNavigate: (page: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onNavigate, onSelectService }) => {
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
    <section className="py-28 bg-[#FAFAF8] dark:bg-[#0C0D0F] border-b border-[#E2E5EB] dark:border-[#242830] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
            CORE SERVICE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-[1.12] mb-5">
            Engineering solutions for the way organizations work.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
            We focus on software systems that reduce friction, automate statutory paperwork,
            and provide structural durability for public offices and enterprise operations.
          </p>
        </div>

        {/* Airy Editorial Service Rows */}
        <div className="divide-y divide-[#E2E5EB] dark:divide-[#242830] border-t border-b border-[#E2E5EB] dark:border-[#242830]">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#FFFFFF]/60 dark:hover:bg-[#141619]/60 transition-colors px-4 -mx-4 rounded-xl"
              >
                {/* Col 1: Number & Icon */}
                <div className="lg:col-span-1 flex items-center lg:flex-col lg:items-start gap-3">
                  <span className="font-mono text-sm font-semibold text-[#8B92A0] dark:text-[#6B7280] group-hover:text-[#17191D] dark:group-hover:text-white transition-colors">
                    {service.number}
                  </span>
                  <div className="p-2 bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white rounded-lg group-hover:bg-[#17191D] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#0C0D0F] transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Col 2: Title & Core Description */}
                <div className="lg:col-span-5">
                  <h3 className="text-2xl font-bold text-[#17191D] dark:text-[#F7F7F8] tracking-tight mb-2 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-[#5F6573] dark:text-[#9CA3AF] mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed max-w-lg mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#17191D] dark:text-white hover:text-[#5F6573] dark:hover:text-[#9CA3AF] transition-colors cursor-pointer"
                  >
                    <span>View Technical Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8B92A0] dark:text-[#6B7280] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Col 3: Operational Problems Solved */}
                <div className="lg:col-span-6 bg-[#FFFFFF]/80 dark:bg-[#141619]/80 border border-[#E2E5EB]/80 dark:border-[#242830] rounded-xl p-6 lg:p-7">
                  <span className="text-[11px] font-bold text-[#17191D] dark:text-white uppercase tracking-[0.14em] block mb-3 font-mono">
                    Operational Invariants Addressed
                  </span>
                  <div className="space-y-2.5">
                    {service.operationalProblemsSolved.map((problem, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                        <span className="text-[#17191D] dark:text-white font-mono mt-0.5">•</span>
                        <span className="leading-relaxed">{problem}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E2E5EB]/70 dark:border-[#242830] flex items-center justify-between text-[11px] text-[#8B92A0] dark:text-[#6B7280]">
                    <span>Verified Implementation Handover</span>
                    <button
                      onClick={() => onNavigate('services')}
                      className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Explore Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#5F6573] dark:text-[#9CA3AF] text-xs">
          <div>
            <strong className="text-[#17191D] dark:text-[#F7F7F8] text-sm block mb-1">
              Have specific institutional compliance or legacy records?
            </strong>
            <p>We evaluate existing databases, paper forms, and departmental workflows prior to architectural commitments.</p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#17191D] dark:bg-white text-white dark:text-[#0C0D0F] text-xs font-semibold rounded-lg hover:bg-[#2B2F38] dark:hover:bg-[#E5E7EB] transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Consult Our Engineers
          </button>
        </div>
      </div>
    </section>
  );
};
