import React from 'react';
import { PROCESS_STAGES } from '../data/companyData';
import { PageRoute } from '../types';
import { ShieldCheck, CheckCircle2, FileText, Cpu, Lock, Terminal } from 'lucide-react';

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
      <div className="bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] py-16 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
              ENGINEERING DISCIPLINES
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-tight mb-6">
              Our Engineering Approach
            </h1>
            <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
              We approach software development not as speculative experimentation, but as a disciplined
              engineering practice. From operational discovery to post-deployment support, our five-stage
              framework ensures predictability and structural durability.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-16 space-y-20">
        {/* Core Principles Grid */}
        <div>
          <div className="max-w-2xl mb-10">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-2">
              FOUNDATIONAL BELIEFS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
              Engineering Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white rounded-lg w-fit mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#17191D] dark:text-[#F7F7F8] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* The 5 Stages in Full Depth */}
        <div>
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-2">
              STEP-BY-STEP DELIVERY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
              The Five Stages of Every ALZA Project
            </h2>
            <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] mt-2">
              A transparent roadmap with explicit deliverables at every milestone.
            </p>
          </div>

          <div className="space-y-8">
            {PROCESS_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold text-[#17191D] dark:text-white bg-[#F2F4F7] dark:bg-[#1D2026] px-2.5 py-1 rounded">
                        PHASE {stage.number}
                      </span>
                      <h3 className="text-2xl font-bold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
                        {stage.name}
                      </h3>
                    </div>

                    <p className="text-sm font-semibold text-[#5F6573] dark:text-[#9CA3AF] mb-3">
                      {stage.tagline}
                    </p>

                    <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed mb-6">
                      {stage.description}
                    </p>

                    <div>
                      <span className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-2 font-mono text-[11px]">
                        Core Disciplines Applied
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stage.disciplines.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium text-[#17191D] dark:text-[#E5E7EB] bg-[#FAFAF8] dark:bg-[#1A1D23] border border-[#E2E5EB] dark:border-[#242830] px-3 py-1 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-lg p-6 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-4 font-mono text-[11px]">
                        Phase Deliverables & Verification
                      </span>
                      <ul className="space-y-3">
                        {stage.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#17191D] dark:text-[#E5E7EB]">
                            <CheckCircle2 className="w-4 h-4 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E2E5EB] dark:border-[#242830] text-[11px] text-[#5F6573] dark:text-[#9CA3AF]">
                      Client review and milestone signoff mandatory before phase transition.
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance & Security Standards */}
        <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-[#17191D] dark:text-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#17191D] dark:text-[#F7F7F8]">
              Quality Assurance & Security Controls
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
            <div className="p-5 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-lg">
              <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-2 font-mono text-[11px]">
                Schema-Level Safeguards
              </h3>
              <p className="text-xs">
                We implement SQL constraints, foreign keys, transaction rollbacks, and domain checks at the database layer — preventing data corruption regardless of API client behavior.
              </p>
            </div>
            <div className="p-5 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-lg">
              <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-2 font-mono text-[11px]">
                Permission Isolation (RBAC)
              </h3>
              <p className="text-xs">
                Departmental boundaries are enforced on every route and data layer. Clerks, officers, supervisors, and auditors only access information authorized by explicit statutory scope.
              </p>
            </div>
            <div className="p-5 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-lg">
              <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-2 font-mono text-[11px]">
                Audit Logging & Recovery
              </h3>
              <p className="text-xs">
                Crucial actions, record updates, and clearance approvals generate permanent audit logs with timestamps and operator identifiers, providing full transparency during official audits.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-10 bg-[#17191D] dark:bg-[#141619] border border-[#242830] text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Discuss your technical requirements</h3>
            <p className="text-xs text-white/70 max-w-xl">
              We provide formal feasibility assessments and architectural scope reviews.
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
