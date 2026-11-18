import React from 'react';
import { PageRoute } from '../../types';
import { Search, Cog, TrendingUp, ArrowRight } from 'lucide-react';
import { Reveal, DepthCard } from '../common/MotionPrimitives';

interface AboutSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-28 bg-[#FFFFFF] dark:bg-[#08080A] border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Company narrative */}
          <Reveal className="lg:col-span-6">
            <div className="type-eyebrow text-[#585860] dark:text-[#9898A2] mb-4">
              ABOUT ALZA.NET IT SOLUTIONS
            </div>
            <h2 className="type-h2 text-[#0E0E10] dark:text-[#F5F5F7] mb-6 text-balance">
              Good technology begins with understanding the problem.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#585860] dark:text-[#9898A2] leading-[1.65]">
              <p>
                Based in <strong className="text-[#0E0E10] dark:text-[#F5F5F7] font-semibold">Bohol, Philippines</strong>, ALZA is an independent technology and software engineering consultancy. We partner with local government units, organizations, and businesses that need serious, bespoke digital systems rather than generic off-the-shelf software.
              </p>
              <p>
                Too often, organizations struggle with tools built for someone else: bloated feature sets, missing statutory compliance, and zero local context. We approach software differently. We sit with your teams, map out physical documents and actual friction points, and engineer systems engineered to last.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border)] flex items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-[#0E0E10] dark:text-[#F5F5F7] hover:opacity-75 transition-opacity cursor-pointer"
              >
                <span>Read our engineering philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>

          {/* Right Column: Motto breakdown */}
          <Reveal delay={0.12} className="lg:col-span-6">
            <DepthCard tiltStrength={2.5} className="p-8 lg:p-10">
              <div className="mb-8">
                <span className="type-eyebrow text-[#868690] dark:text-[#64646E] block mb-2">
                  COMPANY MOTTO
                </span>
                <h3 className="text-2xl font-semibold text-[#0E0E10] dark:text-[#F5F5F7] tracking-[-0.025em]">
                  WE FIND. WE SOLVE. WE LIFT.
                </h3>
              </div>

              <div className="space-y-7">
                {/* Pillar 1: WE FIND */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#F3F3F5] dark:bg-[#161619] border border-[var(--border)] rounded-xl text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-1">
                      Find the real challenges
                    </h4>
                    <p className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                      We dig past surface symptoms to uncover root operational bottlenecks, manual spreadsheet silos, and compliance risks that cost organizations valuable time.
                    </p>
                  </div>
                </div>

                {/* Pillar 2: WE SOLVE */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#F3F3F5] dark:bg-[#161619] border border-[var(--border)] rounded-xl text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5">
                    <Cog className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-1">
                      Solve through thoughtful engineering
                    </h4>
                    <p className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                      We design relational data models, clean interfaces, and robust APIs tailored specifically to real organizational workflows — ensuring stability, speed, and security.
                    </p>
                  </div>
                </div>

                {/* Pillar 3: WE LIFT */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#F3F3F5] dark:bg-[#161619] border border-[var(--border)] rounded-xl text-[#0E0E10] dark:text-[#F5F5F7] shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0E0E10] dark:text-[#F5F5F7] mb-1">
                      Lift organizations through better technology
                    </h4>
                    <p className="text-xs text-[#585860] dark:text-[#9898A2] leading-[1.6]">
                      We deliver empowering systems that elevate public service delivery, reduce administrative burnout, and build institutional confidence.
                    </p>
                  </div>
                </div>
              </div>
            </DepthCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
