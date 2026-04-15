import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { Badge } from '@/components/ui/Badge';
import { ARTICLES } from '@/lib/mockData';
import type { Locale } from '@/types';

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: PageProps<'/[lang]/media/[slug]'>) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();

  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-16">
      <article>
        {/* Header */}
        <section className="gradient-brand py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/${lang}/media`} className="inline-flex items-center gap-2 text-[#00C4CC] text-sm font-semibold mb-8 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {dict.common.back}
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="dark">{article.category}</Badge>
              <span className="text-[#9CA3AF] text-sm">{article.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{article.title}</h1>
          </div>
        </section>

        {/* Image placeholder */}
        <div className="bg-gradient-to-br from-[#0D1526] to-[#162347] h-72 flex items-center justify-center">
          <span className="text-[#2B4B9E] font-bold text-xl opacity-30">{article.imageAlt}</span>
        </div>

        {/* Content */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-[#374151] leading-relaxed mb-8 font-medium">{article.excerpt}</p>
            <div className="prose prose-lg max-w-none text-[#374151]">
              <p className="leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="text-2xl font-bold text-[#1A1A2E] mt-10 mb-4">Kluczowe wnioski</h2>
              <p className="leading-relaxed mb-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#6B7280] mb-6">
                <li>Punkt kluczowy dotyczący tematu artykułu</li>
                <li>Kolejny istotny aspekt omawianego zagadnienia</li>
                <li>Praktyczne wnioski dla specjalistów branży</li>
                <li>Rekomendacje na przyszłość</li>
              </ul>
              <p className="leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
