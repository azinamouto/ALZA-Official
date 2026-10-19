import React from 'react';
import { PageRoute } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#0C0D0F] border-t border-[#E2E5EB] dark:border-[#242830] text-[#17191D] dark:text-[#F7F7F8] pt-18 pb-14 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E2E5EB] dark:border-[#242830]">
          {/* Col 1: Identity & Motto */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="font-extrabold text-2xl tracking-tight text-[#17191D] dark:text-white">ALZA</span>
                <span className="text-[#5F6573] dark:text-[#9CA3AF] font-medium text-lg">.Net</span>
              </div>
              <p className="text-sm text-[#5F6573] dark:text-[#9CA3AF] max-w-sm leading-relaxed mb-6">
                {COMPANY_INFO.positioning}
              </p>
              <div className="inline-block py-1 px-2.5 bg-[#F2F4F7] dark:bg-[#1D2026] border border-[#E2E5EB] dark:border-[#242830] rounded text-[11px] font-mono font-medium text-[#17191D] dark:text-white tracking-wider uppercase">
                {COMPANY_INFO.motto}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#17191D] dark:text-white shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#17191D] dark:text-white shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.primaryEmail}`}
                  className="hover:text-[#17191D] dark:hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {COMPANY_INFO.primaryEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#5F6573] dark:text-[#9CA3AF]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Services & Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('approach')}
                  className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Engineering Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                >
                  About the Company
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Project Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-[#17191D] dark:text-white uppercase tracking-wider mb-4 font-mono">
              Core Capabilities
            </h3>
            <ul className="space-y-2 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#17191D] dark:bg-white" />
                <span>Custom Software Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#17191D] dark:bg-white" />
                <span>Government Technology (GovTech)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#17191D] dark:bg-white" />
                <span>Information Systems & Records</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#17191D] dark:bg-white" />
                <span>Enterprise Systems Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#17191D] dark:bg-white" />
                <span>Data Management & Public Analytics</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-[#FAFAF8] dark:bg-[#141619] border border-[#E2E5EB] dark:border-[#242830] rounded-lg">
              <span className="block text-xs font-semibold text-[#17191D] dark:text-white mb-1">
                Direct Project Discussion
              </span>
              <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF] mb-2 leading-relaxed">
                Consult with our engineering leads regarding operational systems and GovTech initiatives.
              </p>
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17191D] dark:text-white hover:text-[#5F6573] dark:hover:text-[#9CA3AF] transition-colors cursor-pointer"
              >
                <span>Initiate inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6573] dark:text-[#9CA3AF]">
          <div className="flex items-center gap-3">
            <span>© {currentYear} ALZA.Net IT Solutions. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Bohol, Philippines</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#17191D] dark:hover:text-white transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Privacy & Data Policy
            </button>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[11px]">Verified Systems Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
