import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { INVESTOR_DOCS } from '@/lib/mockData';
import type { Locale } from '@/types';

export default async function InvestorsPage({ params }: PageProps<'/[lang]/inwestorzy'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  const financialHighlights = [
    { label: 'Przychody 2023', value: '42.3 mln PLN', change: '+18%' },
    { label: 'EBITDA 2023', value: '12.1 mln PLN', change: '+24%' },
    { label: 'Marża EBITDA', value: '28.6%', change: '+2.1pp' },
    { label: 'Klienci aktywni', value: '540', change: '+95' },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C4CC]/10 border border-[#00C4CC]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[#00C4CC] text-sm font-semibold">{dict.nav.investors}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{dict.investors.title}</h1>
          <p className="text-xl text-[#9CA3AF]">{dict.investors.subtitle}</p>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="bg-white py-16 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item) => (
              <div key={item.label} className="bg-[#F8F9FC] rounded-2xl p-6 border border-[#E5E7EB]">
                <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-wider mb-2">{item.label}</p>
                <div className="text-2xl font-bold text-[#1A1A2E] mb-1">{item.value}</div>
                <Badge variant="cyan">{item.change} r/r</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="bg-[#F8F9FC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline={dict.investors.reports_title} align="left" className="mb-10" />
          <div className="space-y-3">
            {INVESTOR_DOCS.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between bg-white rounded-xl p-5 border border-[#E5E7EB] hover:border-[#00C4CC]/40 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00C4CC]/10 flex items-center justify-center text-[#00C4CC]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A2E]">{doc.title}</p>
                    <p className="text-xs text-[#9CA3AF]">{doc.type} · {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {doc.fileSize && (
                    <span className="text-xs text-[#9CA3AF] hidden sm:block">{doc.fileSize}</span>
                  )}
                  <button className="text-[#00C4CC] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Pobierz
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="bg-[#0D1526] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline={dict.investors.strategy_title} dark className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '2024–2025', headline: 'Ekspansja europejska', desc: 'Wejście na 4 nowe rynki: IT, ES, PT, GR. Budowa lokalnych partnerstw.' },
              { title: '2025–2026', headline: 'Platforma AI-first', desc: 'Przebudowa silnika segmentacji na architekturę AI. Predykcja zachowań w czasie rzeczywistym.' },
              { title: '2026+', headline: 'Dominacja regionalna', desc: 'Pozycja #1 DMP w Europie Środkowej. IPO lub strategiczny exit.' },
            ].map((item) => (
              <div key={item.title} className="gradient-card rounded-2xl p-8 border border-[#1E3575]">
                <Badge variant="dark" className="mb-4">{item.title}</Badge>
                <h3 className="text-xl font-bold text-white mb-3">{item.headline}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
