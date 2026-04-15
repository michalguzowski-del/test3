import { notFound } from 'next/navigation';
import { getDictionary, hasLocale } from '@/lib/dictionaries';
import { HeroSection } from '@/components/sections/HeroSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { ValuePropositionSection } from '@/components/sections/ValuePropositionSection';
import { KeyMetricsSection } from '@/components/sections/KeyMetricsSection';
import { GlobalDataReachSection } from '@/components/sections/GlobalDataReachSection';
import { DataProcessingFlowSection } from '@/components/sections/DataProcessingFlowSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { ComplianceSection } from '@/components/sections/ComplianceSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { NewsletterCTASection } from '@/components/sections/NewsletterCTASection';
import type { Locale } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'pl' }, { lang: 'en' }];
}

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <main>
      <HeroSection locale={lang as Locale} dict={dict} />
      <SocialProofSection dict={dict} />
      <ValuePropositionSection dict={dict} />
      <KeyMetricsSection dict={dict} />
      <GlobalDataReachSection dict={dict} />
      <DataProcessingFlowSection dict={dict} />
      <UseCasesSection dict={dict} />
      <ComplianceSection dict={dict} />
      <PartnersSection dict={dict} />
      <NewsletterCTASection dict={dict} />
    </main>
  );
}
