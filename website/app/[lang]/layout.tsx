import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/ui/CookieBanner';
import type { Locale } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'pl' }, { lang: 'en' }];
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Header locale={lang as Locale} dict={dict} />
      {children}
      <Footer locale={lang as Locale} dict={dict} />
      <CookieBanner locale={lang as Locale} dict={dict} />
    </>
  );
}
