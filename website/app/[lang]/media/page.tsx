import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { Badge } from '@/components/ui/Badge';
import { ARTICLES } from '@/lib/mockData';
import type { Locale } from '@/types';

export default async function MediaPage({ params }: PageProps<'/[lang]/media'>) {
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
            <span className="text-[#00C4CC] text-sm font-semibold">{dict.nav.media}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{dict.media.title}</h1>
          <p className="text-xl text-[#9CA3AF]">{dict.media.subtitle}</p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-[#F8F9FC] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((article, i) => (
              <Link
                key={article.id}
                href={`/${lang}/media/${article.slug}`}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:border-[#00C4CC]/50 hover:shadow-xl transition-all duration-300 ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                {/* Image placeholder */}
                <div
                  className={`bg-gradient-to-br from-[#0D1526] to-[#1A2B5F] flex items-center justify-center ${i === 0 ? 'h-64' : 'h-48'}`}
                >
                  <span className="text-[#2B4B9E] font-bold text-lg opacity-30 select-none">{article.imageAlt}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="dark">{article.category}</Badge>
                    <span className="text-xs text-[#9CA3AF]">{article.date}</span>
                  </div>
                  <h3 className={`font-bold text-[#1A1A2E] group-hover:text-[#1A2B5F] transition-colors mb-3 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                    {article.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-[#00C4CC] text-sm font-semibold">
                    {dict.media.read_more}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
