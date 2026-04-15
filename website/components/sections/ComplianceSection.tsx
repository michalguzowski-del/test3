import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/lib/dictionaries';

interface ComplianceSectionProps {
  dict: Dictionary;
}

export function ComplianceSection({ dict }: ComplianceSectionProps) {
  const items = [
    {
      title: dict.compliance.gdpr_title,
      desc: dict.compliance.gdpr_desc,
      icon: '🇪🇺',
      highlight: true,
    },
    {
      title: dict.compliance.iso_title,
      desc: dict.compliance.iso_desc,
      icon: '🔒',
      highlight: false,
    },
    {
      title: dict.compliance.iab_title,
      desc: dict.compliance.iab_desc,
      icon: '✅',
      highlight: false,
    },
    {
      title: dict.compliance.audit_title,
      desc: dict.compliance.audit_desc,
      icon: '🔍',
      highlight: false,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headline={dict.compliance.headline}
          subheadline={dict.compliance.subheadline}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                item.highlight
                  ? 'bg-[#0D1526] border-[#00C4CC]/50 hover:border-[#00C4CC]'
                  : 'bg-[#F8F9FC] border-[#E5E7EB] hover:border-[#00C4CC]/30'
              }`}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    item.highlight ? 'bg-[#00C4CC]/10' : 'bg-white border border-[#E5E7EB]'
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold mb-2 ${item.highlight ? 'text-white' : 'text-[#1A1A2E]'}`}
                  >
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${item.highlight ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
