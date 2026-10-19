import React from 'react';
import { PROJECTS_DATA } from '../../data/companyData';
import { ProjectItem, PageRoute } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SelectedWorkProps {
  onNavigate: (page: PageRoute) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onNavigate,
  onSelectProject,
}) => {
  return (
    <section className="py-28 bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-18 gap-6">
          <div className="max-w-2xl">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
              VERIFIED ENGINEERING PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-[1.12]">
              Selected systems and engineering work.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('work')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#17191D] dark:text-white hover:text-[#5F6573] dark:hover:text-[#9CA3AF] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View All Engineering Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-xl overflow-hidden hover:border-[#17191D] dark:hover:border-white/50 transition-all duration-300 shadow-xs flex flex-col justify-between group"
              >
                {/* Visual Area */}
                <div className="h-52 bg-[#17191D] dark:bg-[#0C0D0F] relative p-6 flex flex-col justify-between overflow-hidden border-b border-[#E2E5EB] dark:border-[#242830]">
                  {/* Faint technical grid */}
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Top Bar inside visual */}
                  <div className="flex items-center justify-between relative z-10 text-white">
                    <span className="font-mono text-[11px] text-[#8B92A0] tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      {project.id.toUpperCase()} // SYS_SCHEMATIC
                    </span>
                    <span className="text-[10px] uppercase font-mono text-white/70 border border-white/20 px-2 py-0.5 rounded">
                      {project.verifiedStatus}
                    </span>
                  </div>

                  {/* Schematic Content Graphic */}
                  <div className="relative z-10 my-auto">
                    {project.id === 'tagad' && (
                      <div className="space-y-1.5 text-[11px] font-mono text-white/80">
                        <div className="flex items-center justify-between border-b border-white/10 pb-1">
                          <span className="text-white/50">Module</span>
                          <span className="text-white font-medium">GAD Reporting Engine</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-1">
                          <span className="text-white/50">Pipeline</span>
                          <span className="text-white">Sex-Disaggregated ETL</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/50">Jurisdiction</span>
                          <span className="text-white/90">Talibon Workflow Model</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'talgov' && (
                      <div className="space-y-1.5 text-[11px] font-mono text-white/80">
                        <div className="flex items-center justify-between border-b border-white/10 pb-1">
                          <span className="text-white/50">System</span>
                          <span className="text-white font-medium">TALGov Municipal Portal</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-1">
                          <span className="text-white/50">Routing</span>
                          <span className="text-white">Inter-Office Traceability</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/50">Integrity</span>
                          <span className="text-white/90">Audit-Verified Clearances</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'alza-devkit' && (
                      <div className="space-y-1.5 text-[11px] font-mono text-white/80">
                        <div className="flex items-center justify-between border-b border-white/10 pb-1">
                          <span className="text-white/50">Utility</span>
                          <span className="text-white font-medium">ALZA DevKit Internal</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-1">
                          <span className="text-white/50">Generator</span>
                          <span className="text-white">Schema-Aware AST Synthesizer</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/50">Seeds</span>
                          <span className="text-white/90">PH Regional Mock Datasets</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[10px] text-white/40 font-mono">
                    <span>Verified Project Scope</span>
                    <span>Zero Mock Invariants</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (NO PILLS) */}
                    <div className="flex items-center gap-2 text-xs text-[#5F6573] dark:text-[#9CA3AF] mb-2 font-medium">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#17191D] dark:text-white font-semibold">{project.verifiedStatus}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#17191D] dark:text-[#F7F7F8] mb-3 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#E2E5EB] dark:border-[#242830]">
                      <span className="text-[11px] font-bold text-[#17191D] dark:text-white uppercase tracking-[0.12em] block font-mono">
                        Technical Foundation
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technicalFoundation.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs text-[#17191D] dark:text-[#E5E7EB] bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] px-2 py-0.5 rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E5EB] dark:border-[#242830]">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#17191D] dark:text-white bg-[#FFFFFF] dark:bg-[#141619] hover:bg-[#17191D] hover:text-white dark:hover:bg-white dark:hover:text-[#0C0D0F] border border-[#E2E5EB] dark:border-[#242830] hover:border-[#17191D] dark:hover:border-white rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      <span>Inspect Architecture & Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification banner */}
        <div className="mt-14 p-5 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-lg flex items-center gap-3 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
          <CheckCircle2 className="w-4 h-4 text-[#17191D] dark:text-white shrink-0" />
          <span>
            <strong className="text-[#17191D] dark:text-white">Transparency Notice:</strong> ALZA publishes only verified internal and active client-approved systems.
            We do not fabricate client testimonials, artificial uptime percentages, or unverified contract statistics.
          </span>
        </div>
      </div>
    </section>
  );
};
