import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import type { Locale } from '@/types';

export default async function DataPage({ params }: PageProps<'/[lang]/dane'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  const dataSources = [
    { name: 'Sieci reklamowe', desc: 'Dane z kampanii display, video i programmatic', volume: '2B+ zdarzeń/dzień' },
    { name: 'Witryny partnerskie', desc: 'Pixel tracking z sieci ponad 50 000 stron', volume: '500M+ sesji/mies.' },
    { name: 'Aplikacje mobilne', desc: 'Dane z SDK zainstalowanego w tysiącach aplikacji', volume: '100M+ instalacji' },
    { name: 'CRM partnerów', desc: 'Zanonimizowane dane transakcyjne i zakupowe', volume: 'Miliony transakcji' },
  ];

  const dataTypes = [
    { type: 'Demograficzne', examples: ['Wiek', 'Płeć', 'Lokalizacja', 'Język'], color: 'cyan' as const },
    { type: 'Behawioralne', examples: ['Zainteresowania', 'Historia przeglądania', 'Zachowania zakupowe'], color: 'purple' as const },
    { type: 'Kontekstowe', examples: ['Kategoria treści', 'Słowa kluczowe', 'Urządzenie'], color: 'dark' as const },
    { type: 'Transakcyjne', examples: ['Historia zakupów', 'Koszyk', 'Lojalność'], color: 'cyan' as const },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C4CC]/10 border border-[#00C4CC]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[#00C4CC] text-sm font-semibold">{dict.nav.data}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{dict.data_page.title}</h1>
          <p className="text-xl text-[#9CA3AF]">{dict.data_page.subtitle}</p>
        </div>
      </section>

      {/* Data Sources */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline={dict.data_page.sources_title} className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataSources.map((src) => (
              <div key={src.name} className="bg-[#F8F9FC] rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#00C4CC]/40 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{src.name}</h3>
                    <p className="text-[#6B7280] text-sm">{src.desc}</p>
                  </div>
                  <Badge variant="cyan">{src.volume}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="bg-[#0D1526] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline={dict.data_page.types_title} dark className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataTypes.map((dt) => (
              <div key={dt.type} className="gradient-card rounded-2xl p-6 border border-[#1E3575]">
                <Badge variant={dt.color} className="mb-4">{dt.type}</Badge>
                <ul className="space-y-2 mt-4">
                  {dt.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C4CC]" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Segmentation */}
      <section className="bg-[#F8F9FC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader headline={dict.data_page.ai_title} align="left" className="mb-8" />
              <div className="space-y-4">
                {[
                  { label: 'Lookalike Modeling', value: 92 },
                  { label: 'Intent Prediction', value: 87 },
                  { label: 'Churn Prevention', value: 78 },
                  { label: 'Cross-Device Matching', value: 95 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm font-medium text-[#374151] mb-1.5">
                      <span>{item.label}</span>
                      <span className="text-[#00C4CC]">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00C4CC] to-[#6C63FF]"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '200+', label: 'Segmentów', desc: 'Predefiniowanych segmentów audience' },
                { value: '50ms', label: 'Latencja', desc: 'Średni czas odpowiedzi API' },
                { value: '99.9%', label: 'Uptime', desc: 'Gwarantowana dostępność' },
                { value: '5B+', label: 'Sygnałów', desc: 'Przetwarzanych miesięcznie' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="font-semibold text-[#1A1A2E] text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-[#9CA3AF]">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
