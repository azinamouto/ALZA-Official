import React, { useEffect } from 'react';
import { ServiceItem } from '../../types';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="bg-[#FFFFFF]/95 dark:bg-[#0D0D0F]/95 backdrop-blur-2xl border border-[var(--border)] rounded-2xl shadow-[var(--shadow-card-hover)] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#FFFFFF]/90 dark:bg-[#0D0D0F]/90 backdrop-blur-xl border-b border-[var(--border)] p-6 flex items-start justify-between z-10">
              <div>
                <span className="font-mono text-xs font-semibold text-[#585860] dark:text-[#9898A2] block mb-1">
                  SERVICE DOMAIN {service.number}
                </span>
                <h2 id="service-modal-title" className="text-2xl font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.02em]">
                  {service.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] hover:bg-[#F3F3F5] dark:hover:bg-[#161619] rounded-xl transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2">
                  {service.subtitle}
                </h3>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                  Technical Capabilities
                </h3>
                <ul className="space-y-2">
                  {service.detailedPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E10] dark:bg-[#F5F5F7] shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 bg-[#F5F5F7]/75 dark:bg-[#111114] border border-[var(--border)] rounded-2xl">
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2.5">
                  Operational Problems Solved
                </h3>
                <ul className="space-y-2">
                  {service.operationalProblemsSolved.map((pr, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#0E0E10] dark:text-[#E2E2E6] leading-[1.6]">
                      <span className="font-mono">•</span>
                      <span>{pr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-3">
                  Expected Project Deliverables
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#0E0E10] dark:text-[#E2E2E6] leading-[1.55]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-[#F5F5F7]/85 dark:bg-[#111114]/90 border-t border-[var(--border)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="btn-frosted px-4 py-2 text-xs font-medium text-[#585860] dark:text-[#9898A2] hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] rounded-xl cursor-pointer w-full sm:w-auto"
              >
                Close
              </button>

              <button
                onClick={() => {
                  onClose();
                  onInquire();
                }}
                className="group btn-primary-depth inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white rounded-xl cursor-pointer w-full sm:w-auto"
              >
                <span>Inquire About {service.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
