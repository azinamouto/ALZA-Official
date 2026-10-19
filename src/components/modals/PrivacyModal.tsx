import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#17191D]/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div
        className="bg-[#FFFFFF] border border-[#E2E5EB] rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E5EB] p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#17191D]" />
            <h2 id="privacy-modal-title" className="text-xl font-bold text-[#17191D]">
              Privacy & Institutional Data Policy
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5F6573] hover:text-[#17191D] hover:bg-[#FAFAF8] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-sm text-[#5F6573] leading-relaxed">
          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-2 font-mono">
              1. Institutional Confidentiality
            </h3>
            <p>
              ALZA.Net IT Solutions strictly adheres to non-disclosure protocols regarding municipal records, institutional workflows, and proprietary business databases. We treat all client technical requirements, schemas, and operational data as privileged information.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-2 font-mono">
              2. Philippine Data Privacy Act (RA 10173) Compliance
            </h3>
            <p>
              All software architectures and information systems engineered by ALZA are designed with statutory compliance in mind, including principles of transparency, legitimate purpose, and proportionality under Republic Act No. 10173.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-2 font-mono">
              3. Project Inquiry Submissions
            </h3>
            <p>
              Information submitted via our corporate contact form (such as your organization name, email address, and project brief) is used solely to evaluate technical feasibility and schedule direct engineering consultations. We do not sell, rent, or share inquiry data with third-party advertisers.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-2 font-mono">
              4. Code Ownership & Handover
            </h3>
            <p>
              Unless otherwise specified in custom bilateral service agreements, customized software deliverables, schemas, and database migrations belong to the commissioning client organization upon final project handover and acceptance.
            </p>
          </div>

          <div className="p-4 bg-[#FAFAF8] border border-[#E2E5EB] rounded-lg text-xs">
            <span className="font-semibold text-[#17191D] block mb-1 font-mono">
              Direct Inquiries & DPO Contact
            </span>
            <span>
              For questions concerning institutional data security or NDA requests, contact{' '}
              <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-[#17191D] underline">
                {COMPANY_INFO.primaryEmail}
              </a>
              .
            </span>
          </div>
        </div>

        <div className="bg-[#FAFAF8] border-t border-[#E2E5EB] p-4 px-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#17191D] hover:bg-[#2B2F38] rounded-lg transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
