import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/companyData';
import { ProjectItem, PageRoute } from '../types';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem, DepthCard } from '../components/common/MotionPrimitives';

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
      <div className="bg-[#FFFFFF] dark:bg-[#08080A] border-b border-[var(--border)] py-18 relative overflow-hidden transition-colors duration-300">
        <div
          className="absolute inset-0 cosmic-grid opacity-55 pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <Reveal className="max-w-3xl">
            <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-4">
              VERIFIED PROJECT CATALOG
            </div>
            <h1 className="type-h1 text-[#0E0E10] dark:text-[#F5F5F7] mb-6 text-balance">
              Selected Systems & Engineering Work
            </h1>
            <p className="type-body text-[#585860] dark:text-[#9898A2] max-w-2xl">
              Every system documented here represents genuine software engineering initiatives.
              In accordance with our strict engineering transparency code, we state verified scopes
              without fabricating customer counts, uptime percentages, or client contracts.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-12 space-y-12">
        {/* Interactive Filter Tabs */}
        <Reveal className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-1.5 p-1.5 bg-[#FFFFFF]/80 dark:bg-[#0D0D0F]/80 backdrop-blur-md border border-[var(--border)] rounded-2xl shadow-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#0E0E10] dark:bg-[#F5F5F7] text-white dark:text-[#050506] shadow-xs'
                  : 'text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7]'
              }`}
            >
              All Systems ({PROJECTS_DATA.length})
            </button>
            <button
              onClick={() => setFilter('govtech')}
              className={`px-4 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                filter === 'govtech'
                  ? 'bg-[#0E0E10] dark:bg-[#F5F5F7] text-white dark:text-[#050506] shadow-xs'
                  : 'text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7]'
              }`}
            >
              GovTech & Public Sector (2)
            </button>
            <button
              onClick={() => setFilter('internal')}
              className={`px-4 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                filter === 'internal'
                  ? 'bg-[#0E0E10] dark:bg-[#F5F5F7] text-white dark:text-[#050506] shadow-xs'
                  : 'text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7]'
              }`}
            >
              Developer Infrastructure (1)
            </button>
          </div>

          <span className="text-xs text-[#585860] dark:text-[#9898A2] font-mono">
            STATUS: STRICT TRANSPARENCY PROTOCOL
          </span>
        </Reveal>

        {/* Project List / Detailed Cards */}
        <StaggerGroup className="space-y-12">
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <DepthCard tiltStrength={1.8}>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Area */}
                  <div className="lg:col-span-5 bg-[#0E0E10] dark:bg-[#050506] p-8 text-white flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--border)]">
                    <div
                      className="absolute inset-0 opacity-[0.07] pointer-events-none"
                      style={{
                        backgroundImage:
                          'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    <div className="relative z-10 flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-[#9898A2]">
                        SYS-ID: {project.id.toUpperCase()}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 border border-white/15 bg-white/[0.04] rounded-lg">
                        {project.verifiedStatus}
                      </span>
                    </div>

                    {/* Architectural Graphic */}
                    <div className="relative z-10 my-6 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl p-5">
                      <span className="text-[11px] font-mono text-[#9898A2] block mb-2 font-semibold">
                        ARCHITECTURAL INVARIANTS:
                      </span>
                      <p className="text-xs font-mono text-white/85 leading-[1.65]">
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
                      <div className="flex items-center gap-2 text-xs text-[#585860] dark:text-[#9898A2] mb-2.5 font-medium">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#0E0E10] dark:text-[#F5F5F7] font-semibold">
                          {project.verifiedStatus}
                        </span>
                      </div>

                      <h2 className="type-h3 sm:text-3xl text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                        {project.name}
                      </h2>

                      <p className="text-sm font-medium text-[#0E0E10] dark:text-[#F5F5F7] mb-4">
                        {project.summary}
                      </p>

                      <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65] mb-6">
                        {project.context}
                      </p>

                      <div className="space-y-5 mb-8">
                        <div>
                          <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block mb-3">
                            Capabilities & Specifications
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {project.keyCapabilities.map((cap, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#585860] dark:text-[#9898A2] leading-[1.55]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t border-[var(--border)]">
                          <span className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] block mb-3">
                            Verified Technical Stack
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technicalFoundation.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs font-mono text-[#0E0E10] dark:text-[#E2E2E6] bg-[#F3F3F5] dark:bg-[#141417] border border-[var(--border)] px-2.5 py-1 rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="group btn-primary-depth inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white rounded-xl cursor-pointer"
                      >
                        <span>Full Technical Specification</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>

                      <button
                        onClick={() => onNavigate('contact')}
                        className="text-xs font-semibold text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] transition-colors cursor-pointer"
                      >
                        Inquire About Similar Architecture
                      </button>
                    </div>
                  </div>
                </div>
              </DepthCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Confidentiality & Integrity Banner */}
        <Reveal>
          <DepthCard enableTilt={false} className="p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-5 h-5 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
              <div className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                <strong className="text-[#0E0E10] dark:text-[#F5F5F7] block mb-1 font-mono">
                  PUBLIC DISCLOSURE POLICY & CONFIDENTIALITY COMPLIANCE
                </strong>
                ALZA respects the institutional security of all partner local government units and corporate clients. We do not publish internal database credentials, unapproved interface screenshots, private beneficiary datasets, or contract transaction amounts.
              </div>
            </div>
          </DepthCard>
        </Reveal>
      </div>
    </div>
  );
};
