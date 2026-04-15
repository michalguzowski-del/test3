import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { JOB_OFFERS } from '@/lib/mockData';
import type { Locale } from '@/types';

export default async function CareerPage({ params }: PageProps<'/[lang]/kariera'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  const perks = [
    { icon: '🏠', title: 'Remote & Flexible', desc: 'Praca zdalna lub hybrydowa. Wybierasz swoje godziny.' },
    { icon: '📚', title: 'Rozwój', desc: 'Budżet szkoleniowy 5 000 PLN/rok. Konferencje, kursy, certyfikaty.' },
    { icon: '⚕️', title: 'Opieka zdrowotna', desc: 'Pakiet medyczny Medicover + ubezpieczenie na życie.' },
    { icon: '🎯', title: 'Wpływ', desc: 'Pracujesz na produktach używanych przez setki firm w Europie.' },
    { icon: '🤝', title: 'Equity', desc: 'Program opcji pracowniczych. Jesteś współwłaścicielem firmy.' },
    { icon: '🌍', title: 'Środowisko', desc: 'Zróżnicowany, międzynarodowy team z 12 krajów.' },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C4CC]/10 border border-[#00C4CC]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[#00C4CC] text-sm font-semibold">{dict.nav.career}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{dict.career.title}</h1>
          <p className="text-xl text-[#9CA3AF]">{dict.career.subtitle}</p>
        </div>
      </section>

      {/* Culture / Perks */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline={dict.career.culture_title} subheadline="Tworzymy środowisko, w którym najlepsi chcą pracować" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-[#F8F9FC] rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#00C4CC]/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-5">{perk.icon}</div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">{perk.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offers */}
      <section className="bg-[#0D1526] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader headline={dict.career.offers_title} dark className="mb-10" />
          <div className="space-y-4">
            {JOB_OFFERS.map((job) => (
              <div
                key={job.id}
                className="gradient-card rounded-2xl p-6 border border-[#1E3575] hover:border-[#00C4CC]/50 transition-colors group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="dark">{job.department}</Badge>
                    <Badge variant="dark">{job.location}</Badge>
                    <Badge variant="dark">{job.type}</Badge>
                  </div>
                </div>
                <button className="bg-[#00C4CC] text-[#0D1526] font-bold px-6 py-3 rounded-xl hover:bg-[#009DA3] transition-colors whitespace-nowrap flex-shrink-0">
                  {dict.career.apply}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
