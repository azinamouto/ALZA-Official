import React, { useState } from 'react';
import { PROCESS_STAGES } from '../../data/companyData';
import { PageRoute } from '../../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Reveal, DepthCard } from '../common/MotionPrimitives';

interface HowWeWorkProps {
  onNavigate: (page: PageRoute) => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigate }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = PROCESS_STAGES[activeStageIndex];
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-28 bg-[#FAFAFA] dark:bg-[#050506] border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <Reveal className="max-w-2xl mb-20">
          <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-4">
            ENGINEERING METHODOLOGY
          </div>
          <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7] mb-5 text-balance">
            A disciplined approach from discovery to delivery.
          </h2>
          <p className="type-body text-[#585860] dark:text-[#9898A2]">
            We avoid speculative guesswork and chaotic sprints. Every system we build adheres
            to five disciplined phases designed to protect organizational data, time, and resources.
          </p>
        </Reveal>

        {/* Desktop Connected Stepper */}
        <Reveal delay={0.05} className="hidden lg:grid grid-cols-5 gap-3.5 mb-10 relative">
          {PROCESS_STAGES.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative ${
                  isSelected
                    ? 'depth-surface border-[#0E0E10] dark:border-white/60 -translate-y-0.5'
                    : 'bg-[#FFFFFF]/65 dark:bg-[#0D0D0F]/65 border-[var(--border)] hover:bg-[#FFFFFF] dark:hover:bg-[#111114] hover:border-[var(--border-strong)] hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-sm font-semibold tabular-nums ${
                      isSelected ? 'text-[#0E0E10] dark:text-[#F5F5F7]' : 'text-[#868690] dark:text-[#64646E]'
                    }`}
                  >
                    {stage.number}
                  </span>
                  {isSelected && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0E0E10] dark:text-[#F5F5F7]">
                      Active
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-1">
                  {stage.name}
                </h3>
                <p className="text-xs text-[#585860] dark:text-[#9898A2] line-clamp-2 leading-[1.55]">
                  {stage.tagline}
                </p>
              </button>
            );
          })}
        </Reveal>

        {/* Active Stage Deep-Dive Surface */}
        <Reveal delay={0.1}>
          <DepthCard enableTilt={false} className="p-8 sm:p-10 mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.number}
                initial={prefersReduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] bg-[#EFEFF2] dark:bg-[#161619] border border-[var(--border)] px-3 py-1 rounded-lg tabular-nums">
                      STAGE {activeStage.number} OF 05
                    </span>
                    <span className="text-xs text-[#585860] dark:text-[#9898A2] font-semibold uppercase tracking-[0.14em] font-mono">
                      {activeStage.name}
                    </span>
                  </div>

                  <h3 className="type-h3 text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                    {activeStage.tagline}
                  </h3>

                  <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65] mb-6">
                    {activeStage.description}
                  </p>

                  <div className="space-y-2.5">
                    <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block">
                      Disciplines Involved
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeStage.disciplines.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-[#0E0E10] dark:text-[#E2E2E6] bg-[#F3F3F5] dark:bg-[#141417] border border-[var(--border)] px-3 py-1.5 rounded-xl"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F5F5F7]/70 dark:bg-[#111114]/80 border border-[var(--border)] rounded-2xl p-6">
                  <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block mb-4">
                    Tangible Deliverables
                  </span>
                  <ul className="space-y-3">
                    {activeStage.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0E0E10] dark:text-[#E2E2E6]">
                        <CheckCircle2 className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                        <span className="leading-[1.55]">{deliv}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <span className="text-[11px] text-[#585860] dark:text-[#9898A2] block leading-[1.5]">
                      All deliverables undergo formal review and client signoff prior to phase progression.
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </DepthCard>
        </Reveal>

        {/* Mobile Vertical Stepper View */}
        <div className="lg:hidden space-y-3 mb-10">
          <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block mb-3">
            Switch Phase Overview
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {PROCESS_STAGES.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`py-2.5 px-3 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                  activeStageIndex === idx
                    ? 'bg-[#0E0E10] dark:bg-[#F5F5F7] text-white dark:text-[#050506] border-[#0E0E10] dark:border-[#F5F5F7]'
                    : 'bg-[#FFFFFF] dark:bg-[#0D0D0F] text-[#585860] dark:text-[#9898A2] border-[var(--border)]'
                }`}
              >
                {stage.number}. {stage.name}
              </button>
            ))}
          </div>
        </div>

        {/* Link to Full Approach Page */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-[#585860] dark:text-[#9898A2]">
            Want to see how we guarantee system reliability and documentation handover?
          </p>
          <button
            onClick={() => onNavigate('approach')}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] hover:opacity-75 transition-opacity cursor-pointer"
          >
            <span>Read full methodology</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
