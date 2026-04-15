import { SectionHeader } from '@/components/ui/SectionHeader';
import { METRICS } from '@/lib/mockData';
import type { Dictionary } from '@/lib/dictionaries';

interface KeyMetricsSectionProps {
  dict: Dictionary;
}

export function KeyMetricsSection({ dict }: KeyMetricsSectionProps) {
  return (
    <section className="bg-[#0D1526] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headline={dict.metrics.headline}
          subheadline={dict.metrics.subheadline}
          dark
          className="mb-16"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="gradient-card rounded-2xl p-6 border border-[#1E3575] text-center hover:border-[#00C4CC]/50 transition-colors"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
              <div className="text-xs font-medium text-[#9CA3AF] leading-snug">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
