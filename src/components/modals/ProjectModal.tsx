import React, { useEffect } from 'react';
import { ProjectItem } from '../../types';
import { X, CheckCircle2, Shield, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#17191D]/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="bg-[#FFFFFF] border border-[#E2E5EB] rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E5EB] p-6 flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#5F6573] font-medium mb-1">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#17191D] font-semibold">{project.verifiedStatus}</span>
            </div>
            <h2 id="project-modal-title" className="text-2xl font-bold text-[#17191D]">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5F6573] hover:text-[#17191D] hover:bg-[#FAFAF8] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#17191D] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Status Alert */}
          <div className="p-4 bg-[#F2F4F7] border border-[#E2E5EB] rounded-lg flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#17191D] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-[#17191D] block mb-1 font-mono">
                VERIFIED STATUS: {project.verifiedStatus.toUpperCase()}
              </span>
              <p className="text-xs text-[#5F6573] leading-relaxed">
                {project.statusDescription}
              </p>
            </div>
          </div>

          {/* Context & Problem */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider font-mono">
              Operational Context & Problem Solved
            </h3>
            <p className="text-sm text-[#5F6573] leading-relaxed">
              {project.context}
            </p>
            <div className="p-4 bg-[#FAFAF8] border border-[#E2E5EB] rounded-lg">
              <span className="text-xs font-semibold text-[#17191D] block mb-1 font-mono">
                Solution Engineering
              </span>
              <p className="text-sm text-[#17191D] leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-3 font-mono">
              Key Functional Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#17191D]">
                  <CheckCircle2 className="w-4 h-4 text-[#17191D] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Highlights */}
          <div className="p-5 bg-[#FAFAF8] border border-[#E2E5EB] rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#17191D]" />
              <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider font-mono">
                Architectural Invariants
              </h3>
            </div>
            <p className="text-xs text-[#5F6573] leading-relaxed font-mono">
              {project.architecturalHighlights}
            </p>
          </div>

          {/* Technical Foundation */}
          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-3 font-mono">
              Verified Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technicalFoundation.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#FFFFFF] border border-[#E2E5EB] rounded text-xs font-mono text-[#17191D]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Confidentiality Warning if present */}
          {project.confidentialityNote && (
            <div className="pt-4 border-t border-[#E2E5EB] text-xs text-[#5F6573]">
              <strong>Client & Statutory Confidentiality:</strong> {project.confidentialityNote}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-[#FAFAF8] border-t border-[#E2E5EB] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#5F6573]">
            Need a similar system for your municipality or organization?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#5F6573] hover:text-[#17191D] transition-colors cursor-pointer w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onDiscussProject();
              }}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#17191D] hover:bg-[#2B2F38] rounded-lg transition-colors cursor-pointer w-full sm:w-auto"
            >
              <span>Discuss Similar System</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
