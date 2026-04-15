import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Locale } from '@/types';

export default async function AboutPage({ params }: PageProps<'/[lang]/o-nas'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  const timeline = [
    { year: '2011', event: 'Założenie Cloud Technologies w Warszawie' },
    { year: '2014', event: 'Uruchomienie pierwszej wersji platformy DMP' },
    { year: '2016', event: 'Ekspansja na rynki Europy Środkowej (CZ, SK, HU)' },
    { year: '2018', event: 'Certyfikacja ISO 27001 i pełna zgodność z RODO' },
    { year: '2020', event: 'Przekroczenie 20 milionów profili użytkowników' },
    { year: '2022', event: 'Uruchomienie platformy AI/ML do segmentacji' },
    { year: '2024', event: 'Ponad 30M profili, 12 rynków, 500+ klientów' },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C4CC]/10 border border-[#00C4CC]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[#00C4CC] text-sm font-semibold">{dict.nav.about}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{dict.about.title}</h1>
          <p className="text-xl text-[#9CA3AF]">{dict.about.subtitle}</p>
        </div>
      </section>

      {/* Mission, Model, Technology */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: dict.about.mission_title, desc: dict.about.mission_desc, icon: '🎯' },
              { title: dict.about.model_title, desc: dict.about.model_desc, icon: '🔗' },
              { title: dict.about.tech_title, desc: dict.about.tech_desc, icon: '⚙️' },
            ].map((item) => (
              <div key={item.title} className="bg-[#F8F9FC] rounded-2xl p-8 border border-[#E5E7EB]">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-4">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0D1526] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline="Historia firmy" dark className="mb-16" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#1E3575]" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-8 items-start">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#162347] border-2 border-[#00C4CC] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00C4CC] font-bold text-xs">{item.year}</span>
                  </div>
                  <div className="pt-4">
                    <p className="text-white font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline="Zarząd" subheadline="Doświadczony zespół liderów technologii i biznesu" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Jan Kowalski', role: 'CEO & Co-Founder' },
              { name: 'Anna Nowak', role: 'CTO & Co-Founder' },
              { name: 'Piotr Wiśniewski', role: 'CFO' },
              { name: 'Marta Zielińska', role: 'CPO' },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#162347] to-[#1A2B5F] border-2 border-[#2B4B9E] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#00C4CC]">{person.name[0]}</span>
                </div>
                <h4 className="font-bold text-[#1A1A2E]">{person.name}</h4>
                <p className="text-sm text-[#6B7280]">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
