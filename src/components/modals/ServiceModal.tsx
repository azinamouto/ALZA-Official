import React, { useEffect } from 'react';
import { ServiceItem } from '../../types';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
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

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#17191D]/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="bg-[#FFFFFF] border border-[#E2E5EB] rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#E2E5EB] p-6 flex items-start justify-between z-10">
          <div>
            <span className="font-mono text-xs font-bold text-[#17191D] block mb-1">
              SERVICE DOMAIN {service.number}
            </span>
            <h2 id="service-modal-title" className="text-2xl font-bold text-[#17191D]">
              {service.title}
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

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-2 font-mono">
              {service.subtitle}
            </h3>
            <p className="text-sm text-[#5F6573] leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-3 font-mono">
              Technical Capabilities
            </h3>
            <ul className="space-y-2">
              {service.detailedPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#5F6573]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#17191D] shrink-0 mt-1.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-[#FAFAF8] border border-[#E2E5EB] rounded-lg">
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-2 font-mono">
              Operational Problems Solved
            </h3>
            <ul className="space-y-1.5">
              {service.operationalProblemsSolved.map((pr, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#17191D]">
                  <span className="font-mono">•</span>
                  <span>{pr}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#17191D] uppercase tracking-wider mb-3 font-mono">
              Expected Project Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#17191D]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#17191D] shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#FAFAF8] border-t border-[#E2E5EB] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#5F6573] hover:text-[#17191D] transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#17191D] hover:bg-[#2B2F38] rounded-lg transition-colors cursor-pointer"
          >
            <span>Inquire About {service.title}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
