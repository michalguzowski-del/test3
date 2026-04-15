import { SectionHeader } from '@/components/ui/SectionHeader';
import { PARTNERS } from '@/lib/mockData';
import type { Dictionary } from '@/lib/dictionaries';

interface PartnersSectionProps {
  dict: Dictionary;
}

export function PartnersSection({ dict }: PartnersSectionProps) {
  const categories = [...new Set(PARTNERS.map((p) => p.category))];

  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headline={dict.partners.headline}
          className="mb-16"
        />
        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat}>
              <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest mb-4">{cat}</p>
              <div className="flex flex-wrap gap-4">
                {PARTNERS.filter((p) => p.category === cat).map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white border border-[#E5E7EB] rounded-xl px-8 py-5 hover:border-[#00C4CC]/50 hover:shadow-md transition-all duration-200 flex items-center"
                  >
                    <span className="font-bold text-lg text-[#374151] tracking-tight">{partner.logoText}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
