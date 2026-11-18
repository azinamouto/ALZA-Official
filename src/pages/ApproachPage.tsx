import React from 'react';
import { PROCESS_STAGES } from '../data/companyData';
import { PageRoute } from '../types';
import { ShieldCheck, CheckCircle2, FileText, Cpu, Lock, Terminal, ArrowUpRight } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, DepthCard } from '../components/common/MotionPrimitives';

interface ApproachPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ onNavigate }) => {
  const principles = [
    {
      title: 'Problem First, Technology Second',
      desc: 'We never force trendy frameworks onto operational problems. If a straightforward relational database and clean forms solve a municipal workflow, we engineer that with precision rather than unnecessary architectural bloat.',
      icon: Terminal,
    },
    {
      title: 'Deterministic State & Data Integrity',
      desc: 'We design software where system state transitions are explicit, validated by strict database constraints and foreign keys, leaving an auditable paper trail for every action.',
      icon: Lock,
    },
    {
      title: 'Built for Low-Bandwidth Reality',
      desc: 'Local government offices and regional branches often operate under intermittent connectivity. Our systems are engineered with offline resiliency, lean network payloads, and fault-tolerant retries.',
      icon: Cpu,
    },
    {
      title: 'Complete Handover & Zero Vendor Lock-in',
      desc: 'Every client receives clean source code, documented relational schemas, deployment scripts, and administrative manuals. You own your system and your data.',
      icon: FileText,
    },
  ];

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
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
              Our Engineering Approach
            </h1>
            <p className="type-body text-[#585860] dark:text-[#9898A2] max-w-2xl">
              We approach software development not as speculative experimentation, but as a disciplined
              engineering practice. From operational discovery to post-deployment support, our five-stage
              framework ensures predictability and structural durability.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16 space-y-20">
        {/* Core Principles Grid */}
        <div>
          <Reveal className="max-w-2xl mb-10">
            <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-2">
              FOUNDATIONAL BELIEFS
            </div>
            <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7]">
              Engineering Principles
            </h2>
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <StaggerItem key={idx} className="h-full">
                  <DepthCard tiltStrength={3} className="p-8 h-full">
                    <div>
                      <div className="p-3 bg-[#EFEFF2] dark:bg-[#161619] border border-[var(--border)] text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl w-fit mb-5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                        {principle.desc}
                      </p>
                    </div>
                  </DepthCard>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>

        {/* The 5 Stages in Full Depth */}
        <div>
          <Reveal className="max-w-2xl mb-12">
            <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-2">
              STEP-BY-STEP DELIVERY
            </div>
            <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7]">
              The Five Stages of Every ALZA Project
            </h2>
            <p className="text-sm text-[#585860] dark:text-[#9898A2] mt-2 leading-[1.6]">
              A transparent roadmap with explicit deliverables at every milestone.
            </p>
          </Reveal>

          <StaggerGroup className="space-y-8">
            {PROCESS_STAGES.map((stage) => (
              <StaggerItem key={stage.number}>
                <DepthCard tiltStrength={1.6} className="p-8 sm:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] bg-[#EFEFF2] dark:bg-[#161619] border border-[var(--border)] px-3 py-1 rounded-lg tabular-nums">
                          PHASE {stage.number}
                        </span>
                        <h3 className="text-2xl font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.02em]">
                          {stage.name}
                        </h3>
                      </div>

                      <p className="text-sm font-semibold text-[#585860] dark:text-[#9898A2] mb-3">
                        {stage.tagline}
                      </p>

                      <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65] mb-6">
                        {stage.description}
                      </p>

                      <div>
                        <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block mb-2.5">
                          Core Disciplines Applied
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {stage.disciplines.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs font-medium text-[#0E0E10] dark:text-[#E2E2E6] bg-[#F3F3F5] dark:bg-[#141417] border border-[var(--border)] px-3 py-1.5 rounded-xl"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#F5F5F7]/75 dark:bg-[#111114]/80 border border-[var(--border)] rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block mb-4">
                          Phase Deliverables & Verification
                        </span>
                        <ul className="space-y-3">
                          {stage.deliverables.map((deliv, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs text-[#0E0E10] dark:text-[#E2E2E6]">
                              <CheckCircle2 className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                              <span className="leading-[1.55]">{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[var(--border)] text-[11px] text-[#585860] dark:text-[#9898A2]">
                        Client review and milestone signoff mandatory before phase transition.
                      </div>
                    </div>
                  </div>
                </DepthCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Quality Assurance & Security Standards */}
        <Reveal>
          <DepthCard enableTilt={false} className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-[#0E0E10] dark:text-[#F5F5F7]" />
              <h2 className="type-h3 text-[#0E0E10] dark:text-[#F5F5F7]">
                Quality Assurance & Security Controls
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#585860] dark:text-[#9898A2] leading-relaxed">
              <div className="p-5 bg-[#F5F5F7]/75 dark:bg-[#111114]/80 border border-[var(--border)] rounded-2xl">
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2.5">
                  Schema-Level Safeguards
                </h3>
                <p className="text-xs leading-[1.6]">
                  We implement SQL constraints, foreign keys, transaction rollbacks, and domain checks at the database layer — preventing data corruption regardless of API client behavior.
                </p>
              </div>
              <div className="p-5 bg-[#F5F5F7]/75 dark:bg-[#111114]/80 border border-[var(--border)] rounded-2xl">
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2.5">
                  Permission Isolation (RBAC)
                </h3>
                <p className="text-xs leading-[1.6]">
                  Departmental boundaries are enforced on every route and data layer. Clerks, officers, supervisors, and auditors only access information authorized by explicit statutory scope.
                </p>
              </div>
              <div className="p-5 bg-[#F5F5F7]/75 dark:bg-[#111114]/80 border border-[var(--border)] rounded-2xl">
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2.5">
                  Audit Logging & Recovery
                </h3>
                <p className="text-xs leading-[1.6]">
                  Crucial actions, record updates, and clearance approvals generate permanent audit logs with timestamps and operator identifiers, providing full transparency during official audits.
                </p>
              </div>
            </div>
          </DepthCard>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal>
          <div className="p-8 sm:p-10 bg-[#0A0A0C] dark:bg-[#0D0D0F] border border-white/10 text-white rounded-2xl shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#F5F5F7]">
                Discuss your technical requirements
              </h3>
              <p className="text-xs text-white/65 max-w-xl leading-[1.6]">
                We provide formal feasibility assessments and architectural scope reviews.
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
