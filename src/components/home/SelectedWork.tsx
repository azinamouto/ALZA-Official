import React from 'react';
import { PROJECTS_DATA } from '../../data/companyData';
import { ProjectItem, PageRoute } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, DepthCard } from '../common/MotionPrimitives';

interface SelectedWorkProps {
  onNavigate: (page: PageRoute) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  return (
    <section className="py-28 sm:py-32 bg-[#FFFFFF] dark:bg-[#08080A] border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div className="max-w-3xl">
            <div className="font-mono text-xs font-semibold tracking-[0.24em] text-[#27272C] dark:text-[#D4D4D8] uppercase mb-5">
              VERIFIED ENGINEERING PORTFOLIO
            </div>
            <h2 className="type-work-heading text-[#0E0E10] dark:text-[#F5F5F7] text-balance">
              Selected systems and engineering work.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('work')}
            className="group btn-frosted inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl cursor-pointer self-start md:self-end shrink-0"
          >
            <span>View All Engineering Specifications</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#585860] dark:text-[#9898A2] group-hover:text-[#0E0E10] dark:group-hover:text-[#F5F5F7] transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </Reveal>

        {/* Project Cards (TAGAD, TALGov, ALZA DevKit) */}
        <StaggerGroup className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS_DATA.map((project) => {
            return (
              <StaggerItem key={project.id} className="h-full">
                <DepthCard
                  tiltStrength={3.8}
                  hoverY={-7}
                  roundedClass="rounded-[22px]"
                  className="h-full group/card"
                >
                  {/* Liquid-Metal Architectural Panel Header */}
                  <div
                    className="h-60 relative p-7 flex flex-col justify-between overflow-hidden border-b border-white/10"
                    style={{
                      background:
                        'linear-gradient(145deg, #070709 0%, #151518 52%, #0B0B0D 100%)',
                    }}
                  >
                    {/* Faint animated technical grid */}
                    <div
                      className="absolute inset-0 opacity-[0.11] pointer-events-none animate-liquid-grid"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* Soft grayscale specular light sweep */}
                    <div
                      className="absolute inset-y-0 w-1/2 pointer-events-none animate-liquid-sweep"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 50%, transparent 100%)',
                      }}
                    />

                    {/* Subtle top-edge liquid reflection */}
                    <div
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />

                    {/* Top Bar inside liquid-metal panel */}
                    <div className="flex items-center justify-between gap-2 relative z-10 text-white">
                      <span className="font-mono text-xs text-white/75 tracking-[0.12em]">
                        {project.id.toUpperCase()} · ARCHITECTURE
                      </span>
                      <span className="text-[10px] uppercase font-mono font-medium text-white/95 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full tracking-[0.12em] whitespace-nowrap">
                        {project.verifiedStatus}
                      </span>
                    </div>

                    {/* Crisp High-Contrast Schematic Spec Rows */}
                    <div className="relative z-10 my-auto py-3">
                      {project.id === 'tagad' && (
                        <div className="space-y-2.5 text-xs font-mono">
                          <div className="flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-white/65">Module</span>
                            <span className="text-white font-medium">GAD Reporting Engine</span>
                          </div>
                          <div className="flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-white/65">Pipeline</span>
                            <span className="text-white">Sex-Disaggregated ETL</span>
                          </div>
                          <div className="flex items-center justify-between pt-0.5">
                            <span className="text-white/65">Jurisdiction</span>
                            <span className="text-white/95">Talibon Workflow Model</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'talgov' && (
                        <div className="space-y-2.5 text-xs font-mono">
                          <div className="flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-white/65">System</span>
                            <span className="text-white font-medium">TALGov Municipal Portal</span>
                          </div>
                          <div className="flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-white/65">Routing</span>
                            <span className="text-white">Inter-Office Traceability</span>
                          </div>
                          <div className="flex items-center justify-between pt-0.5">
                            <span className="text-white/65">Integrity</span>
                            <span className="text-white/95">Audit-Verified Clearances</span>
                          </div>
                        </div>
                      )}

                      {project.id === 'alza-devkit' && (
                        <div className="space-y-2.5 text-xs font-mono">
                          <div className="flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-white/65">Utility</span>
                            <span className="text-white font-medium">ALZA DevKit Internal</span>
                          </div>
                          <div className="flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-white/65">Generator</span>
                            <span className="text-white">Schema-Aware AST Synthesizer</span>
                          </div>
                          <div className="flex items-center justify-between pt-0.5">
                            <span className="text-white/65">Seeds</span>
                            <span className="text-white/95">PH Regional Mock Datasets</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Legible Panel Footer */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-white/70 font-mono pt-1 border-t border-white/10">
                      <span>Verified Project Scope</span>
                      <span>Zero Mock Invariants</span>
                    </div>
                  </div>

                  {/* Card Body: Consistent Padding (28-32px) & Bottom-Pinned CTA */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col">
                    <div className="flex-1 flex flex-col">
                      {/* Status & Category Hierarchy */}
                      <div className="flex items-center gap-2 text-xs text-[#52525B] dark:text-[#A1A1AA] mb-3 font-medium">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#0E0E10] dark:text-[#F5F5F7] font-semibold">
                          {project.verifiedStatus}
                        </span>
                      </div>

                      {/* Title: 1.5-1.75rem, weight 600 */}
                      <h3 className="text-[1.55rem] sm:text-[1.7rem] font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.025em] leading-[1.15] mb-3.5">
                        {project.name}
                      </h3>

                      {/* Description: softer gray at 15-16px with 1.65 line-height */}
                      <p className="text-[15.5px] text-[#52525B] dark:text-[#A1A1AA] leading-[1.65] mb-7">
                        {project.summary}
                      </p>

                      {/* Technical Foundation Tags */}
                      <div className="mt-auto space-y-3 pt-5 border-t border-[var(--border)]">
                        <span className="type-eyebrow text-[#27272C] dark:text-[#D4D4D8] block">
                          Technical Foundation
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technicalFoundation.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="h-7 inline-flex items-center px-2.5 text-[11px] font-mono text-[#18181B] dark:text-[#E4E4E7] bg-gradient-to-b from-white to-[#F2F2F5] dark:from-[#1B1B1F] dark:to-[#121215] border border-[var(--border)] rounded-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-[var(--border-strong)] hover:-translate-y-0.5 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Pinned Bottom Button: Full-Width Frosted Outline -> Solid Black on Hover */}
                    <div className="pt-6 mt-7 border-t border-[var(--border)]">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="group/btn btn-frosted w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] hover:bg-[#0E0E10] hover:text-white hover:border-[#0E0E10] dark:hover:bg-[#F5F5F7] dark:hover:text-[#050506] dark:hover:border-[#F5F5F7] rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <span>Inspect Architecture & Scope</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </DepthCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Verification banner */}
        <Reveal delay={0.1}>
          <DepthCard enableTilt={false} roundedClass="rounded-[20px]" className="mt-14 p-5 sm:p-6">
            <div className="flex items-center gap-3 text-xs text-[#52525B] dark:text-[#A1A1AA]">
              <CheckCircle2 className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0" />
              <span className="leading-[1.6]">
                <strong className="text-[#0E0E10] dark:text-[#F5F5F7]">Transparency Notice:</strong> ALZA publishes only verified internal and active client-approved systems.
                We do not fabricate client testimonials, artificial uptime percentages, or unverified contract statistics.
              </span>
            </div>
          </DepthCard>
        </Reveal>
      </div>
    </section>
  );
};
