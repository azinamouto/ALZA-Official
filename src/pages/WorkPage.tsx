import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem, PageRoute } from '../types';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate, onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'govtech' | 'internal'>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'govtech') return project.id === 'tagad' || project.id === 'talgov';
    if (filter === 'internal') return project.id === 'alza-devkit';
    return true;
  });

  return (
    <div className="pt-28 pb-24">
      {/* Header */}
      <div className="bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] py-16 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
              VERIFIED PROJECT CATALOG
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-tight mb-6">
              Selected Systems & Engineering Work
            </h1>
            <p className="text-base sm:text-lg text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
              Every system documented here represents genuine software engineering initiatives.
              In accordance with our strict engineering transparency code, we state verified scopes
              without fabricating customer counts, uptime percentages, or client contracts.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-12 space-y-12">
        {/* Interactive Filter Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-[#E2E5EB] dark:border-[#242830]">
          <div className="flex items-center gap-1.5 p-1 bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#17191D] dark:bg-white text-white dark:text-[#0C0D0F] shadow-xs'
                  : 'text-[#5F6573] dark:text-[#9CA3AF] hover:text-[#17191D] dark:hover:text-white'
              }`}
            >
              All Systems ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('govtech')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'govtech'
                  ? 'bg-[#17191D] dark:bg-white text-white dark:text-[#0C0D0F] shadow-xs'
                  : 'text-[#5F6573] dark:text-[#9CA3AF] hover:text-[#17191D] dark:hover:text-white'
              }`}
            >
              GovTech & Public Sector (2)
            </button>
            <button
              onClick={() => setFilter('internal')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                filter === 'internal'
                  ? 'bg-[#17191D] dark:bg-white text-white dark:text-[#0C0D0F] shadow-xs'
                  : 'text-[#5F6573] dark:text-[#9CA3AF] hover:text-[#17191D] dark:hover:text-white'
              }`}
            >
              Developer Infrastructure (1)
            </button>
          </div>

          <span className="text-xs text-[#5F6573] dark:text-[#9CA3AF] font-mono">
            STATUS: STRICT TRANSPARENCY PROTOCOL
          </span>
        </div>

        {/* Project List / Detailed Cards */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl overflow-hidden shadow-xs hover:border-[#17191D] dark:hover:border-white/50 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Area */}
                <div className="lg:col-span-5 bg-[#17191D] dark:bg-[#0C0D0F] p-8 text-white flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[#E2E5EB] dark:border-[#242830]">
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#8B92A0]">
                      SYS-ID: {project.id.toUpperCase()}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 border border-white/20 rounded">
                      {project.verifiedStatus}
                    </span>
                  </div>

                  {/* Architectural Graphic */}
                  <div className="relative z-10 my-6 bg-white/5 border border-white/10 rounded-lg p-5">
                    <span className="text-[11px] font-mono text-[#8B92A0] block mb-2 font-semibold">
                      ARCHITECTURAL INVARIANTS:
                    </span>
                    <p className="text-xs font-mono text-white/80 leading-relaxed">
                      {project.architecturalHighlights}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50 font-mono">
                    <span>Verified Implementation</span>
                    <span>Bohol, PH</span>
                  </div>
                </div>

                {/* Details Area */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#5F6573] dark:text-[#9CA3AF] mb-2 font-medium">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#17191D] dark:text-white font-semibold">{project.verifiedStatus}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight mb-3">
                      {project.name}
                    </h2>

                    <p className="text-sm font-medium text-[#17191D] dark:text-white mb-4">
                      {project.summary}
                    </p>

                    <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed mb-6">
                      {project.context}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-2 font-mono text-[11px]">
                          Capabilities & Specifications
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.keyCapabilities.map((cap, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-[#E2E5EB] dark:border-[#242830]">
                        <span className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider block mb-2 font-mono text-[11px]">
                          Verified Technical Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technicalFoundation.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs font-mono text-[#17191D] dark:text-[#E5E7EB] bg-[#FAFAF8] dark:bg-[#1A1D23] border border-[#E2E5EB] dark:border-[#242830] px-2.5 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E2E5EB] dark:border-[#242830] flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white dark:text-[#0C0D0F] bg-[#17191D] dark:bg-white hover:bg-[#2B2F38] dark:hover:bg-[#E5E7EB] rounded-lg transition-colors cursor-pointer"
                    >
                      <span>Full Technical Specification</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-xs font-semibold text-[#5F6573] dark:text-[#9CA3AF] hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Inquire About Similar Architecture
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality & Integrity Banner */}
        <div className="p-6 bg-[#FFFFFF] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-xl flex items-start gap-4">
          <Shield className="w-5 h-5 text-[#17191D] dark:text-white shrink-0 mt-0.5" />
          <div className="text-xs text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
            <strong className="text-[#17191D] dark:text-white block mb-1 font-mono">
              PUBLIC DISCLOSURE POLICY & CONFIDENTIALITY COMPLIANCE
            </strong>
            ALZA respects the institutional security of all partner local government units and corporate clients. We do not publish internal database credentials, unapproved interface screenshots, private beneficiary datasets, or contract transaction amounts.
          </div>
        </div>
      </div>
    </div>
  );
};
