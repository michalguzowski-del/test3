import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import type { Locale } from '@/types';

export default async function ContactPage({ params }: PageProps<'/[lang]/kontakt'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-brand py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#00C4CC]/10 border border-[#00C4CC]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[#00C4CC] text-sm font-semibold">{dict.nav.contact}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{dict.contact.title}</h1>
          <p className="text-xl text-[#9CA3AF]">{dict.contact.subtitle}</p>
        </div>
      </section>

      <section className="bg-[#F8F9FC] py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  title: dict.contact.address_title,
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  content: 'ul. Konstruktorska 13\n02-673 Warszawa, Polska',
                },
                {
                  title: dict.contact.phone_title,
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  content: '+48 22 123 45 67',
                },
                {
                  title: dict.contact.email_title,
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  content: 'contact@cloudtechnologies.pl',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00C4CC]/10 flex items-center justify-center text-[#00C4CC] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-1">{item.title}</p>
                      <p className="text-[#374151] text-sm whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="bg-[#0D1526] rounded-2xl h-48 border border-[#1E3575] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="text-[#6B7280] text-sm">Warszawa, Polska</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8">Wyślij wiadomość</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-[#374151]">{dict.contact.name_label}</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1A1A2E] placeholder-[#9CA3AF] outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition-all" placeholder="Jan Kowalski" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-[#374151]">{dict.contact.email_label}</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1A1A2E] placeholder-[#9CA3AF] outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition-all" placeholder="jan@firma.pl" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#374151]">{dict.contact.company_label}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1A1A2E] placeholder-[#9CA3AF] outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition-all" placeholder="Twoja firma" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-[#374151]">{dict.contact.message_label}</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-[#1A1A2E] placeholder-[#9CA3AF] outline-none focus:border-[#00C4CC] focus:ring-2 focus:ring-[#00C4CC]/20 transition-all resize-none" placeholder="W czym możemy Ci pomóc?" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#00C4CC] text-[#0D1526] font-bold py-4 rounded-xl hover:bg-[#009DA3] transition-colors flex items-center justify-center gap-2"
                  >
                    {dict.contact.send}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
