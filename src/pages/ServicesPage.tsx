import React from 'react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/companyData';
import { PageRoute, ServiceItem } from '../types';
import { Code, Building2, Network, BarChart3, CheckCircle2, ArrowRight, ArrowUpRight, HelpCircle } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
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

  const engagementModels = [
    {
      title: 'Phase-Based Turnkey Delivery',
      scope: 'Ideal for bounded systems with clear statutory requirements (e.g., municipal compliance tools, record registries).',
      features: ['Fixed milestone checkpoints', 'Complete documentation & handover', 'Staff training included'],
    },
    {
      title: 'Consultative Systems Architecture',
      scope: 'For organizations needing technical direction before development (database modeling, API contracts, security review).',
      features: ['Architectural blueprints & ERDs', 'Technical feasibility analysis', 'Procurement & technology roadmap'],
    },
    {
      title: 'Continuous System Maintenance & Retainer',
      scope: 'Post-handover support, system upgrades, database backups, and operational improvements.',
      features: ['Guaranteed SLA response times', 'Quarterly security reviews', 'Continuous patch cycles'],
    },
  ];

  const commonQuestions = [
    {
      q: 'Do you work with Philippine Local Government Units (LGUs)?',
      a: 'Yes. A primary pillar of ALZA is GovTech and municipal information systems. We understand localized workflows, statutory reporting requirements (such as GAD), and procurement constraints.',
    },
    {
      q: 'Can you migrate our legacy Excel or paper records into a new system?',
      a: 'Yes. Data sanitization and relational ingestion are core disciplines. We build custom ETL scripts and validation rules to safely import historical files without loss.',
    },
    {
      q: 'What happens to the source code upon project completion?',
      a: 'We provide full code handovers, relational schemas, database migration files, and administrative documentation. The commissioning organization maintains complete ownership.',
    },
  ];

  return (
    <div className="pt-28 pb-24">
      {/* Page Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] py-16 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
              ENGINEERING DISCIPLINES
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-tight mb-6">
              Services & Technical Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
              We design and construct reliable software systems tailored to real organizational workflows.
              From GovTech compliance engines to enterprise database architecture, our focus is practical durability.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16 space-y-20">
        {/* Deep Dive into 4 Services */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[#E2E5EB] dark:border-[#242830]">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white rounded-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#8B92A0] dark:text-[#6B7280]">
                        SERVICE {service.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-semibold text-[#5F6573] dark:text-[#9CA3AF] mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white dark:text-[#0C0D0F] bg-[#17191D] dark:bg-white hover:bg-[#2B2F38] dark:hover:bg-[#E5E7EB] rounded-lg transition-colors shadow-xs whitespace-nowrap cursor-pointer self-start"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  {/* Col 1: Capabilities */}
                  <div>
                    <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-4 font-mono">
                      Technical Capabilities
                    </h3>
                    <ul className="space-y-2.5">
                      {service.detailedPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#17191D] dark:bg-white shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 2: Problems Solved */}
                  <div>
                    <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-4 font-mono">
                      Operational Bottlenecks Solved
                    </h3>
                    <ul className="space-y-2.5">
                      {service.operationalProblemsSolved.map((problem, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                          <span className="text-[#17191D] dark:text-white font-mono mt-0.5">•</span>
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3: Handover Deliverables */}
                  <div>
                    <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-4 font-mono">
                      Standard Deliverables
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#17191D] dark:text-[#E5E7EB]">
                          <CheckCircle2 className="w-4 h-4 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engagement Models */}
        <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-10">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-2">
              STRUCTURED COLLABORATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
              Engagement Models
            </h2>
            <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] mt-2 leading-relaxed">
              We align our engagement structure with your institutional procurement and governance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model, idx) => (
              <div key={idx} className="p-6 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-lg flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#17191D] dark:text-[#F7F7F8] mb-2">{model.title}</h3>
                  <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed mb-6">{model.scope}</p>
                  <ul className="space-y-2 pt-4 border-t border-[#E2E5EB] dark:border-[#242830]">
                    {model.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#17191D] dark:text-[#E5E7EB]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#17191D] dark:text-white shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-[#17191D] dark:text-white" />
            <h2 className="text-xl font-bold text-[#17191D] dark:text-[#F7F7F8]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E2E5EB] dark:divide-[#242830]">
            {commonQuestions.map((item, idx) => (
              <div key={idx} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-sm font-bold text-[#17191D] dark:text-[#F7F7F8] mb-2">{item.q}</h3>
                <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className="p-8 sm:p-10 bg-[#17191D] dark:bg-[#141619] border border-[#242830] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Ready to discuss your organization's digital system?</h3>
            <p className="text-xs text-white/70 max-w-xl">
              We provide prompt technical consultations and clear project roadmaps.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#FFFFFF] text-[#17191D] text-xs font-semibold rounded-lg hover:bg-[#FAFAF8] transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Start Project Discussion
          </button>
        </div>
      </div>
    </div>
  );
};
