import React, { useEffect } from 'react';
import { ProjectItem } from '../../types';
import { X, CheckCircle2, Shield, Layers, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussProject: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject,
}) => {
  const prefersReduced = useReducedMotion();

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

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="bg-[#FFFFFF]/95 dark:bg-[#0D0D0F]/95 backdrop-blur-2xl border border-[var(--border)] rounded-2xl shadow-[var(--shadow-card-hover)] max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#FFFFFF]/90 dark:bg-[#0D0D0F]/90 backdrop-blur-xl border-b border-[var(--border)] p-6 flex items-start justify-between z-10">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#585860] dark:text-[#9898A2] font-medium mb-1">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#0E0E10] dark:text-[#F5F5F7] font-semibold">
                    {project.verifiedStatus}
                  </span>
                </div>
                <h2 id="project-modal-title" className="text-2xl font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.02em]">
                  {project.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] hover:bg-[#F3F3F5] dark:hover:bg-[#161619] rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-[#0E0E10] dark:focus-visible:ring-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Status Alert */}
              <div className="p-4 bg-[#F3F3F5] dark:bg-[#141417] border border-[var(--border)] rounded-2xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] block mb-1 font-mono">
                    VERIFIED STATUS: {project.verifiedStatus.toUpperCase()}
                  </span>
                  <p className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                    {project.statusDescription}
                  </p>
                </div>
              </div>

              {/* Context & Problem */}
              <div className="space-y-4">
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7]">
                  Operational Context & Problem Solved
                </h3>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  {project.context}
                </p>
                <div className="p-4 bg-[#F5F5F7]/75 dark:bg-[#111114] border border-[var(--border)] rounded-2xl">
                  <span className="text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] block mb-1 font-mono">
                    Solution Engineering
                  </span>
                  <p className="text-sm text-[#0E0E10] dark:text-[#E2E2E6] leading-[1.65]">
                    {project.problemSolved}
                  </p>
                </div>
              </div>

              {/* Key Capabilities */}
              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                  Key Functional Capabilities
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#0E0E10] dark:text-[#E2E2E6] leading-[1.55]">
                      <CheckCircle2 className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Highlights */}
              <div className="p-5 bg-[#F5F5F7]/75 dark:bg-[#111114] border border-[var(--border)] rounded-2xl space-y-2">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0E0E10] dark:text-[#F5F5F7]" />
                  <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7]">
                    Architectural Invariants
                  </h3>
                </div>
                <p className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.65] font-mono">
                  {project.architecturalHighlights}
                </p>
              </div>

              {/* Technical Foundation */}
              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                  Verified Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technicalFoundation.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F3F3F5] dark:bg-[#141417] border border-[var(--border)] rounded-lg text-xs font-mono text-[#0E0E10] dark:text-[#E2E2E6]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Confidentiality Warning if present */}
              {project.confidentialityNote && (
                <div className="pt-4 border-t border-[var(--border)] text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                  <strong className="text-[#0E0E10] dark:text-[#F5F5F7]">Client & Statutory Confidentiality:</strong> {project.confidentialityNote}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="bg-[#F5F5F7]/85 dark:bg-[#111114]/90 border-t border-[var(--border)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#585860] dark:text-[#9898A2]">
                Need a similar system for your municipality or organization?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="btn-frosted px-4 py-2 text-xs font-medium text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] rounded-xl cursor-pointer w-full sm:w-auto"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onDiscussProject();
                  }}
                  className="group btn-primary-depth inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white rounded-xl cursor-pointer w-full sm:w-auto"
                >
                  <span>Discuss Similar System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
