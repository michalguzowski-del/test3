import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/lib/dictionaries';

interface ValuePropositionSectionProps {
  dict: Dictionary;
}

const ICONS = [
  <svg key="db" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7v5c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3" /></svg>,
  <svg key="cpu" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="shield" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="bolt" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
];

export function ValuePropositionSection({ dict }: ValuePropositionSectionProps) {
  const items = [
    { title: dict.value_prop.item1_title, desc: dict.value_prop.item1_desc, icon: ICONS[0] },
    { title: dict.value_prop.item2_title, desc: dict.value_prop.item2_desc, icon: ICONS[1] },
    { title: dict.value_prop.item3_title, desc: dict.value_prop.item3_desc, icon: ICONS[2] },
    { title: dict.value_prop.item4_title, desc: dict.value_prop.item4_desc, icon: ICONS[3] },
  ];

  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headline={dict.value_prop.headline}
          subheadline={dict.value_prop.subheadline}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#00C4CC]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#00C4CC]/10 flex items-center justify-center text-[#00C4CC] mb-6 group-hover:bg-[#00C4CC]/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">{item.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
