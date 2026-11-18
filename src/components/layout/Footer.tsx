import React from 'react';
import { PageRoute } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { ArrowUpRight, MapPin, Mail } from 'lucide-react';
import { DepthCard, Reveal } from '../common/MotionPrimitives';

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
    <footer className="bg-[#FFFFFF] dark:bg-[#050506] border-t border-[var(--border)] text-[#0E0E10] dark:text-[#F5F5F7] pt-20 pb-14 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[var(--border)]">
            {/* Col 1: Identity & Motto */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-0.5 mb-4">
                  <span className="font-bold text-2xl tracking-[-0.03em] text-[#0E0E10] dark:text-[#F5F5F7]">ALZA</span>
                  <span className="text-[#585860] dark:text-[#9898A2] font-medium text-lg">.Net</span>
                </div>
                <p className="text-sm text-[#585860] dark:text-[#9898A2] max-w-sm leading-[1.65] mb-6">
                  {COMPANY_INFO.positioning}
                </p>
                <div className="inline-block py-1.5 px-3 bg-[#F3F3F5] dark:bg-[#111114] border border-[var(--border)] rounded-xl text-[11px] font-mono font-medium text-[#0E0E10] dark:text-[#F5F5F7] tracking-[0.18em] uppercase">
                  {COMPANY_INFO.motto}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-2.5 text-xs text-[#585860] dark:text-[#9898A2]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#0E0E10] dark:text-[#F5F5F7] shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.primaryEmail}`}
                    className="hover:text-[#0E0E10] dark:hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {COMPANY_INFO.primaryEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="md:col-span-3">
              <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-5">
                Navigation
              </h3>
              <ul className="space-y-3 text-sm text-[#585860] dark:text-[#9898A2]">
                {[
                  { label: 'Overview', page: 'home' as PageRoute },
                  { label: 'Services & Solutions', page: 'services' as PageRoute },
                  { label: 'Selected Work', page: 'work' as PageRoute },
                  { label: 'Engineering Approach', page: 'approach' as PageRoute },
                  { label: 'About the Company', page: 'about' as PageRoute },
                  { label: 'Project Inquiries', page: 'contact' as PageRoute },
                ].map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => handleNav(item.page)}
                      className="hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Core Disciplines & Inquiry Surface */}
            <div className="md:col-span-4">
              <h3 className="type-eyebrow text-[#0E0E10] dark:text-[#F5F5F7] mb-5">
                Core Capabilities
              </h3>
              <ul className="space-y-2.5 text-xs text-[#585860] dark:text-[#9898A2]">
                {[
                  'Custom Software Development',
                  'Government Technology (GovTech)',
                  'Information Systems & Records',
                  'Enterprise Systems Architecture',
                  'Data Management & Public Analytics',
                ].map((cap) => (
                  <li key={cap} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-[#0E0E10] dark:bg-[#F5F5F7]" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <DepthCard enableTilt={false} className="mt-7 p-5">
                <div>
                  <span className="block text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-1.5">
                    Direct Project Discussion
                  </span>
                  <p className="text-xs text-[#585860] dark:text-[#9898A2] mb-3.5 leading-[1.6]">
                    Consult with our engineering leads regarding operational systems and GovTech initiatives.
                  </p>
                  <button
                    onClick={() => handleNav('contact')}
                    className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] hover:opacity-75 transition-opacity cursor-pointer"
                  >
                    <span>Initiate inquiry</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </DepthCard>
            </div>
          </div>
        </Reveal>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#585860] dark:text-[#9898A2]">
          <div className="flex items-center gap-3">
            <span>© {currentYear} ALZA.Net IT Solutions. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Bohol, Philippines</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#0E0E10] dark:hover:text-[#F5F5F7] transition-colors cursor-pointer underline-offset-4 hover:underline"
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
