import React from 'react';
import { Landmark, Terminal, Network, PieChart } from 'lucide-react';
import { StaggerGroup, StaggerItem, DepthCard } from '../common/MotionPrimitives';

export const ExpertiseStrip: React.FC = () => {
  const capabilities = [
    {
      title: 'Government Technology',
      subtitle: 'GovTech & Information Systems',
      icon: Landmark,
    },
    {
      title: 'Custom Software',
      subtitle: 'Bespoke Enterprise Web Apps',
      icon: Terminal,
    },
    {
      title: 'Systems Architecture',
      subtitle: 'APIs, Relational Models & RBAC',
      icon: Network,
    },
    {
      title: 'Data & Analytics',
      subtitle: 'Statutory Reports & Visual Metrics',
      icon: PieChart,
    },
  ];

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#08080A] border-b border-[var(--border)] py-10 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={index}>
                <DepthCard tiltStrength={3} className="p-5 h-full">
                  <div className="flex items-center gap-4 group">
                    <div className="p-2.5 bg-[#EFEFF2] dark:bg-[#161619] text-[#0E0E10] dark:text-[#F5F5F7] rounded-xl shrink-0 border border-[var(--border)] group-hover:bg-[#0E0E10] group-hover:text-white dark:group-hover:bg-[#F5F5F7] dark:group-hover:text-[#050506] transition-colors duration-300">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-[11px] font-semibold text-[#0E0E10] dark:text-[#F5F5F7] uppercase tracking-[0.08em] font-mono">
                        {item.title}
                      </h2>
                      <p className="text-xs text-[#585860] dark:text-[#9898A2] mt-1 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </DepthCard>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
};
