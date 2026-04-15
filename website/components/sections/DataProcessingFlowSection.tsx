import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/lib/dictionaries';

interface DataProcessingFlowSectionProps {
  dict: Dictionary;
}

export function DataProcessingFlowSection({ dict }: DataProcessingFlowSectionProps) {
  const steps = [
    {
      number: '01',
      title: dict.data_flow.step1_title,
      desc: dict.data_flow.step1_desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: '#00C4CC',
    },
    {
      number: '02',
      title: dict.data_flow.step2_title,
      desc: dict.data_flow.step2_desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: '#6C63FF',
    },
    {
      number: '03',
      title: dict.data_flow.step3_title,
      desc: dict.data_flow.step3_desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: '#00C4CC',
    },
    {
      number: '04',
      title: dict.data_flow.step4_title,
      desc: dict.data_flow.step4_desc,
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: '#6C63FF',
    },
  ];

  return (
    <section className="bg-[#0D1526] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headline={dict.data_flow.headline}
          subheadline={dict.data_flow.subheadline}
          dark
          className="mb-16"
        />
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00C4CC] via-[#6C63FF] to-[#00C4CC] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div
                  className="w-28 h-28 rounded-full border-2 flex flex-col items-center justify-center mb-6 relative gradient-card"
                  style={{ borderColor: step.color }}
                >
                  <div style={{ color: step.color }}>{step.icon}</div>
                  <span className="text-xs font-bold mt-1" style={{ color: step.color }}>{step.number}</span>
                  <div
                    className="absolute inset-0 rounded-full opacity-10 blur-xl"
                    style={{ backgroundColor: step.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
