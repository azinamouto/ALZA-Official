import React from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { PageRoute, ServiceItem } from '../types';
import { Code, Building2, Network, BarChart3, CheckCircle2, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, DepthCard } from '../components/common/MotionPrimitives';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
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
      <div className="bg-[#FFFFFF] dark:bg-[#08080A] border-b border-[var(--border)] py-18 relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 cosmic-grid opacity-55 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl">
            <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-4">
              ENGINEERING DISCIPLINES
            </div>
            <h1 className="type-h1 text-[#0E0E10] dark:text-[#F5F5F7] mb-6 text-balance">
              Services & Technical Solutions
            </h1>
            <p className="type-body text-[#585860] dark:text-[#9898A2] max-w-2xl">
              We design and construct reliable software systems tailored to real organizational workflows.
              From GovTech compliance engines to enterprise database architecture, our focus is practical durability.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16 space-y-20">
        {/* Deep Dive into 4 Services */}
        <StaggerGroup className="space-y-12">
          {SERVICES_DATA.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <StaggerItem key={service.id}>
                <DepthCard id={service.id} tiltStrength={2} className="p-8 sm:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-[var(--border)]">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-[#EFEFF2] dark:bg-[#161619] border border-[var(--border)] text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-semibold text-[#868690] dark:text-[#64646E] tabular-nums">
                          SERVICE {service.number}
                        </span>
                      </div>

                      <h2 className="type-h3 sm:text-3xl text-[#0E0E10] dark:text-[#F5F5F7] mb-2">
                        {service.title}
                      </h2>
                      <p className="text-sm font-semibold text-[#585860] dark:text-[#9898A2] mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                        {service.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="group btn-primary-depth inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white rounded-xl whitespace-nowrap cursor-pointer self-start"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    {/* Col 1: Capabilities */}
                    <div>
                      <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-4">
                        Technical Capabilities
                      </h3>
                      <ul className="space-y-2.5">
                        {service.detailedPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E10] dark:bg-[#F5F5F7] shrink-0 mt-1.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 2: Problems Solved */}
                    <div>
                      <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-4">
                        Operational Bottlenecks Solved
                      </h3>
                      <ul className="space-y-2.5">
                        {service.operationalProblemsSolved.map((problem, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                            <span className="text-[#0E0E10] dark:text-[#F5F5F7] font-mono mt-0.5">•</span>
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Col 3: Handover Deliverables */}
                    <div>
                      <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-4">
                        Standard Deliverables
                      </h3>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#0E0E10] dark:text-[#E2E2E6] leading-[1.6]">
                            <CheckCircle2 className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </DepthCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Engagement Models */}
        <Reveal>
          <DepthCard enableTilt={false} className="p-8 sm:p-10">
            <div className="max-w-2xl mb-10">
              <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-2">
                STRUCTURED COLLABORATION
              </div>
              <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7]">
                Engagement Models
              </h2>
              <p className="text-sm text-[#585860] dark:text-[#9898A2] mt-2 leading-[1.65]">
                We align our engagement structure with your institutional procurement and governance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engagementModels.map((model, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#F5F5F7]/75 dark:bg-[#111114]/80 border border-[var(--border)] rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-2">
                      {model.title}
                    </h3>
                    <p className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6] mb-6">
                      {model.scope}
                    </p>
                    <ul className="space-y-2.5 pt-4 border-t border-[var(--border)]">
                      {model.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#0E0E10] dark:text-[#E2E2E6]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </DepthCard>
        </Reveal>

        {/* FAQ Section */}
        <Reveal>
          <DepthCard enableTilt={false} className="p-8 sm:p-10">
            <div className="flex items-center gap-2.5 mb-8">
              <HelpCircle className="w-5 h-5 text-[#0E0E10] dark:text-[#F5F5F7]" />
              <h2 className="type-h3 text-[#0E0E10] dark:text-[#F5F5F7]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {commonQuestions.map((item, idx) => (
                <div key={idx} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-sm font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-2">{item.q}</h3>
                  <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">{item.a}</p>
                </div>
              ))}
            </div>
          </DepthCard>
        </Reveal>

        {/* CTA Strip */}
        <Reveal>
          <div className="p-8 sm:p-10 bg-[#0A0A0C] dark:bg-[#0D0D0F] border border-white/10 text-white rounded-2xl shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#F5F5F7]">
                Ready to discuss your organization's digital system?
              </h3>
              <p className="text-xs text-white/65 max-w-xl leading-[1.6]">
                We provide prompt technical consultations and clear project roadmaps.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="group px-6 py-3 bg-[#F5F5F7] text-[#050506] text-xs font-semibold rounded-xl hover:bg-white transition-all duration-300 hover:-translate-y-0.5 shadow-[0_6px_20px_-4px_rgba(255,255,255,0.18)] whitespace-nowrap cursor-pointer shrink-0 inline-flex items-center gap-2"
            >
              <span>Start Project Discussion</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
