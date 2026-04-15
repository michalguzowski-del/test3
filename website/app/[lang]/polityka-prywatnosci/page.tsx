import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import type { Locale } from '@/types';

export default async function LegalPage({ params }: PageProps<'/[lang]/polityka-prywatnosci'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  const sections = [
    {
      title: '1. Administrator danych',
      content: 'Administratorem Twoich danych osobowych jest Cloud Technologies S.A. z siedzibą w Warszawie (02-673), ul. Konstruktorska 13, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0000000000.',
    },
    {
      title: '2. Cel i podstawa przetwarzania',
      content: 'Przetwarzamy Twoje dane osobowe w następujących celach: (a) świadczenia usług i realizacji umów — podstawa art. 6 ust. 1 lit. b RODO; (b) wypełnienia obowiązków prawnych — podstawa art. 6 ust. 1 lit. c RODO; (c) realizacji prawnie uzasadnionych interesów administratora — podstawa art. 6 ust. 1 lit. f RODO.',
    },
    {
      title: '3. Prawa podmiotów danych',
      content: 'Przysługują Ci następujące prawa: prawo dostępu do danych, prawo do sprostowania danych, prawo do usunięcia danych (prawo do bycia zapomnianym), prawo do ograniczenia przetwarzania, prawo do przenoszenia danych, prawo sprzeciwu wobec przetwarzania, prawo do cofnięcia zgody.',
    },
    {
      title: '4. Okres przechowywania danych',
      content: 'Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane, nie dłużej niż przez okresy przewidziane przepisami prawa lub do czasu wniesienia skutecznego sprzeciwu.',
    },
    {
      title: '5. Pliki cookies',
      content: 'Stosujemy pliki cookies i podobne technologie śledzenia. Szczegółowe informacje dotyczące typów cookies i celów ich stosowania znajdziesz w Polityce Cookies. Masz możliwość zarządzania ustawieniami cookies za pośrednictwem swojej przeglądarki lub naszego narzędzia zarządzania zgodami.',
    },
    {
      title: '6. Kontakt',
      content: 'W sprawach związanych z przetwarzaniem danych osobowych możesz kontaktować się z Inspektorem Ochrony Danych: dpo@cloudtechnologies.pl lub pisemnie na adres siedziby spółki.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C4CC]/10 border border-[#00C4CC]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[#00C4CC] text-sm font-semibold">Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{dict.legal.title}</h1>
          <p className="text-xl text-[#9CA3AF]">{dict.legal.subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FC] rounded-2xl p-4 border border-[#E5E7EB] mb-10">
            <p className="text-sm text-[#6B7280]">
              <span className="font-semibold text-[#374151]">Ostatnia aktualizacja:</span> 1 stycznia 2024 r.
            </p>
          </div>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">{section.title}</h2>
                <p className="text-[#6B7280] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
