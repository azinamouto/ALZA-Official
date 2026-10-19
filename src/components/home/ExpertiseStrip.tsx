import React from 'react';
import { Landmark, Terminal, Network, PieChart } from 'lucide-react';

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
    <section className="bg-[#FFFFFF] dark:bg-[#121417] border-b border-[#E2E5EB] dark:border-[#242830] py-9 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E5EB] dark:divide-[#242830]">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 py-4 sm:py-0 px-2 sm:px-6 first:pl-0 last:pr-0 group"
              >
                <div className="p-2.5 bg-[#F2F4F7] dark:bg-[#1D2026] text-[#17191D] dark:text-white rounded-lg shrink-0 group-hover:bg-[#17191D] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-[#0C0D0F] transition-colors duration-300">
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-[#17191D] dark:text-[#F7F7F8] tracking-tight uppercase tracking-[0.05em] font-mono">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#5F6573] dark:text-[#9CA3AF] mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
