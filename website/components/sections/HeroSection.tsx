import Link from 'next/link';
import type { Locale } from '@/types';
import type { Dictionary } from '@/lib/dictionaries';
import { METRICS } from '@/lib/mockData';

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const topMetrics = METRICS.slice(0, 3);

  return (
    <section className="relative min-h-screen flex items-center gradient-brand overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#00C4CC 1px, transparent 1px), linear-gradient(90deg, #00C4CC 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C4CC]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#6C63FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#00C4CC]/10 border border-[#00C4CC]/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00C4CC] animate-pulse" />
            <span className="text-[#00C4CC] text-sm font-semibold tracking-wide">{dict.hero.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {dict.hero.headline.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="gradient-text">{line}</span>
                ) : (
                  line
                )}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-[#9CA3AF] leading-relaxed mb-10 max-w-xl">
            {dict.hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/dane`}
              className="inline-flex items-center justify-center gap-2 bg-[#00C4CC] text-[#0D1526] font-bold px-8 py-4 rounded-xl hover:bg-[#009DA3] transition-colors shadow-lg shadow-cyan-500/25 text-base"
            >
              {dict.hero.cta_primary}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/kontakt`}
              className="inline-flex items-center justify-center gap-2 border-2 border-[#00C4CC]/50 text-[#00C4CC] font-bold px-8 py-4 rounded-xl hover:border-[#00C4CC] hover:bg-[#00C4CC]/5 transition-all text-base"
            >
              {dict.hero.cta_secondary}
            </Link>
          </div>

          {/* Inline metrics */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-[#1E3575]">
            {topMetrics.map((metric) => (
              <div key={metric.id}>
                <div className="text-3xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-[#6B7280] mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#1E3575] flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-[#00C4CC] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
