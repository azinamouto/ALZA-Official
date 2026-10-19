import React from 'react';
import { PageRoute } from '../../types';
import { Search, Cog, TrendingUp, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-28 bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Company narrative */}
          <div className="lg:col-span-6">
            <div className="text-[11px] font-mono font-medium tracking-[0.2em] text-[#5F6573] dark:text-[#9CA3AF] uppercase mb-4">
              ABOUT ALZA.NET IT SOLUTIONS
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight leading-[1.12] mb-6">
              Good technology begins with understanding the problem.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
              <p>
                Based in <strong className="text-[#17191D] dark:text-white">Bohol, Philippines</strong>, ALZA is an independent technology and software engineering consultancy. We partner with local government units, organizations, and businesses that need serious, bespoke digital systems rather than generic off-the-shelf software.
              </p>
              <p>
                Too often, organizations struggle with tools built for someone else: bloated feature sets, missing statutory compliance, and zero local context. We approach software differently. We sit with your teams, map out physical documents and actual friction points, and engineer systems engineered to last.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2E5EB] dark:border-[#242830] flex items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#17191D] dark:text-white hover:text-[#5F6573] dark:hover:text-[#9CA3AF] transition-colors cursor-pointer"
              >
                <span>Read our engineering philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Motto breakdown */}
          <div className="lg:col-span-6 bg-[#FAFAF8] dark:bg-[#16181D] border border-[#E2E5EB] dark:border-[#242830] rounded-xl p-8 lg:p-10">
            <div className="mb-8">
              <span className="text-[11px] font-mono font-bold text-[#8B92A0] dark:text-[#6B7280] uppercase tracking-[0.16em] block mb-2">
                COMPANY MOTTO
              </span>
              <h3 className="text-2xl font-extrabold text-[#17191D] dark:text-[#F7F7F8] tracking-tight">
                WE FIND. WE SOLVE. WE LIFT.
              </h3>
            </div>

            <div className="space-y-7">
              {/* Pillar 1: WE FIND */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#FFFFFF] dark:bg-[#121417] border border-[#E2E5EB] dark:border-[#242830] rounded-lg text-[#17191D] dark:text-white shrink-0 mt-0.5">
                  <Search className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17191D] dark:text-[#F7F7F8] mb-1">
                    Find the real challenges
                  </h4>
                  <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                    We dig past surface symptoms to uncover root operational bottlenecks, manual spreadsheet silos, and compliance risks that cost organizations valuable time.
                  </p>
                </div>
              </div>

              {/* Pillar 2: WE SOLVE */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#FFFFFF] dark:bg-[#121417] border border-[#E2E5EB] dark:border-[#242830] rounded-lg text-[#17191D] dark:text-white shrink-0 mt-0.5">
                  <Cog className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17191D] dark:text-[#F7F7F8] mb-1">
                    Solve through thoughtful engineering
                  </h4>
                  <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                    We design relational data models, clean interfaces, and robust APIs tailored specifically to real organizational workflows — ensuring stability, speed, and security.
                  </p>
                </div>
              </div>

              {/* Pillar 3: WE LIFT */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#FFFFFF] dark:bg-[#121417] border border-[#E2E5EB] dark:border-[#242830] rounded-lg text-[#17191D] dark:text-white shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#17191D] dark:text-[#F7F7F8] mb-1">
                    Lift organizations through better technology
                  </h4>
                  <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF] leading-relaxed">
                    We deliver empowering systems that elevate public service delivery, reduce administrative burnout, and build institutional confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
