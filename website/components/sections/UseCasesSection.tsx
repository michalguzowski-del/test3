import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { USE_CASES } from '@/lib/mockData';
import type { Dictionary } from '@/lib/dictionaries';

interface UseCasesSectionProps {
  dict: Dictionary;
}

export function UseCasesSection({ dict }: UseCasesSectionProps) {
  return (
    <section className="bg-[#F8F9FC] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          headline={dict.use_cases.headline}
          subheadline={dict.use_cases.subheadline}
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white rounded-2xl p-8 border border-[#E5E7EB] hover:border-[#00C4CC]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="text-4xl mb-5">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#1A2B5F] transition-colors">
                {useCase.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
