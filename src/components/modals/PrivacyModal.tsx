import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={prefersReduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
        >
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReduced ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="bg-[#FFFFFF]/95 dark:bg-[#0D0D0F]/95 backdrop-blur-2xl border border-[var(--border)] rounded-2xl shadow-[var(--shadow-card-hover)] max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#FFFFFF]/90 dark:bg-[#0D0D0F]/90 backdrop-blur-xl border-b border-[var(--border)] p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#0E0E10] dark:text-[#F5F5F7]" />
                <h2 id="privacy-modal-title" className="text-xl font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.02em]">
                  Privacy & Institutional Data Policy
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

            <div className="p-6 sm:p-8 space-y-6 text-sm text-[#585860] dark:text-[#9898A2] leading-[1.65]">
              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2">
                  1. Institutional Confidentiality
                </h3>
                <p>
                  ALZA.Net IT Solutions strictly adheres to non-disclosure protocols regarding municipal records, institutional workflows, and proprietary business databases. We treat all client technical requirements, schemas, and operational data as privileged information.
                </p>
              </div>

              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2">
                  2. Philippine Data Privacy Act (RA 10173) Compliance
                </h3>
                <p>
                  All software architectures and information systems engineered by ALZA are designed with statutory compliance in mind, including principles of transparency, legitimate purpose, and proportionality under Republic Act No. 10173.
                </p>
              </div>

              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2">
                  3. Project Inquiry Submissions
                </h3>
                <p>
                  Information submitted via our corporate contact form (such as your organization name, email address, and project brief) is used solely to evaluate technical feasibility and schedule direct engineering consultations. We do not sell, rent, or share inquiry data with third-party advertisers.
                </p>
              </div>

              <div>
                <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-2">
                  4. Code Ownership & Handover
                </h3>
                <p>
                  Unless otherwise specified in custom bilateral service agreements, customized software deliverables, schemas, and database migrations belong to the commissioning client organization upon final project handover and acceptance.
                </p>
              </div>

              <div className="p-5 bg-[#F5F5F7]/75 dark:bg-[#111114] border border-[var(--border)] rounded-2xl text-xs">
                <span className="font-semibold text-[#0E0E10] dark:text-[#F5F5F7] block mb-1 font-mono">
                  Direct Inquiries & DPO Contact
                </span>
                <span>
                  For questions concerning institutional data security or NDA requests, contact{' '}
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-[#0E0E10] dark:text-[#F5F5F7] underline underline-offset-4">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  .
                </span>
              </div>
            </div>

            <div className="bg-[#F5F5F7]/85 dark:bg-[#111114]/90 border-t border-[var(--border)] p-4 px-6 flex justify-end">
              <button
                onClick={onClose}
                className="btn-primary-depth px-5 py-2.5 text-xs font-semibold text-white dark:text-[#050506] bg-[#0E0E10] dark:bg-[#F5F5F7] hover:bg-[#1E1E22] dark:hover:bg-white rounded-xl cursor-pointer"
              >
                Acknowledge & Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
