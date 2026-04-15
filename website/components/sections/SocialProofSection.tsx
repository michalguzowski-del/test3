import type { Dictionary } from '@/lib/dictionaries';
import { PARTNERS } from '@/lib/mockData';

interface SocialProofSectionProps {
  dict: Dictionary;
}

export function SocialProofSection({ dict }: SocialProofSectionProps) {
  return (
    <section className="bg-white py-14 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-[#9CA3AF] uppercase tracking-widest mb-10">
          {dict.social_proof.headline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="text-[#9CA3AF] font-bold text-xl tracking-tight hover:text-[#1A2B5F] transition-colors cursor-default select-none"
            >
              {partner.logoText}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
