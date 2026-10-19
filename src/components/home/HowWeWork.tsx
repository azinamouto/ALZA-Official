import React, { useState } from 'react';
import { PROCESS_STAGES } from '../../data/companyData';
import { PageRoute } from '../../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface HowWeWorkProps {
  onNavigate: (page: PageRoute) => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onNavigate }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = PROCESS_STAGES[activeStageIndex];

  return (
    <section className="py-28 bg-[#FAFAF8] dark:bg-[#0C0D0F] border-b border-[#E2E5EB] dark:border-[#242830] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
            ENGINEERING METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-[1.12] mb-5">
            A disciplined approach from discovery to delivery.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
            We avoid speculative guesswork and chaotic sprints. Every system we build adheres
            to five disciplined phases designed to protect organizational data, time, and resources.
          </p>
        </div>

        {/* Desktop Connected Stepper */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10 relative">
          {PROCESS_STAGES.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#FFFFFF] dark:bg-[#141619] border-[#17191D] dark:border-white shadow-xs ring-1 ring-[#17191D] dark:ring-white'
                    : 'bg-[#FFFFFF]/70 dark:bg-[#121417]/70 border-[#E2E5EB] dark:border-[#242830] hover:bg-[#FFFFFF] dark:hover:bg-[#141619] hover:border-[#17191D]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-sm font-bold ${
                      isSelected ? 'text-[#17191D] dark:text-white' : 'text-[#8B92A0] dark:text-[#6B7280]'
                    }`}
                  >
                    {stage.number}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#17191D] dark:bg-white" aria-hidden="true" />
                  )}
                </div>
                <h3 className="text-base font-bold text-[#17191D] dark:text-[#F7F7F8] mb-1">{stage.name}</h3>
                <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF] line-clamp-2 leading-relaxed">
                  {stage.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Surface */}
        <div className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 sm:p-10 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-[#17191D] dark:text-white bg-[#F2F4F7] dark:bg-[#1D2026] px-2.5 py-1 rounded">
                  STAGE {activeStage.number} OF 05
                </span>
                <span className="text-xs text-[#5F6573] dark:text-[#9CA3AF] font-semibold uppercase tracking-wider font-mono">
                  {activeStage.name}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#17191D] dark:text-[#F7F7F8] tracking-tight mb-3">
                {activeStage.tagline}
              </h3>

              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed mb-6">
                {activeStage.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-2 font-mono text-[11px]">
                  Disciplines Involved
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStage.disciplines.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-[#17191D] dark:text-[#E5E7EB] bg-[#FAFAF8] dark:bg-[#1A1D23] border border-[#E2E5EB] dark:border-[#242830] px-3 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-lg p-6">
              <span className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-4 font-mono text-[11px]">
                Tangible Deliverables
              </span>
              <ul className="space-y-3">
                {activeStage.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#17191D] dark:text-[#E5E7EB]">
                    <CheckCircle2 className="w-4 h-4 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-[#E2E5EB] dark:border-[#242830]">
                <span className="text-[11px] text-[#5F6573] dark:text-[#9CA3AF] block">
                  All deliverables undergo formal review and client signoff prior to phase progression.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper View */}
        <div className="lg:hidden space-y-3 mb-10">
          <span className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-3 font-mono">
            Switch Phase Overview
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {PROCESS_STAGES.map((stage, idx) => (
              <button
                key={stage.number}
                onClick={() => setActiveStageIndex(idx)}
                className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-colors ${
                  activeStageIndex === idx
                    ? 'bg-[#17191D] dark:bg-white text-white dark:text-[#0C0D0F] border-[#17191D] dark:border-white'
                    : 'bg-[#FFFFFF] dark:bg-[#141619] text-[#5F6573] dark:text-[#9CA3AF] border-[#E2E5EB] dark:border-[#242830]'
                }`}
              >
                {stage.number}. {stage.name}
              </button>
            ))}
          </div>
        </div>

        {/* Link to Full Approach Page */}
        <div className="flex items-center justify-between pt-6 border-t border-[#E2E5EB] dark:border-[#242830]">
          <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF]">
            Want to see how we guarantee system reliability and documentation handover?
          </p>
          <button
            onClick={() => onNavigate('approach')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17191D] dark:text-white hover:text-[#5F6573] dark:hover:text-[#9CA3AF] transition-colors cursor-pointer"
          >
            <span>Read full methodology</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
