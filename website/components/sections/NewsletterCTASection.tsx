import type { Dictionary } from '@/lib/dictionaries';

interface NewsletterCTASectionProps {
  dict: Dictionary;
}

export function NewsletterCTASection({ dict }: NewsletterCTASectionProps) {
  return (
    <section className="bg-[#0D1526] py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #00C4CC 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00C4CC]/5 via-transparent to-[#6C63FF]/5" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">{dict.newsletter.headline}</h2>
        <p className="text-[#9CA3AF] text-lg mb-10">{dict.newsletter.subheadline}</p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder={dict.newsletter.placeholder}
            className="flex-1 px-5 py-3.5 rounded-xl bg-[#162347] border border-[#2B4B9E] text-white placeholder-[#4B5563] outline-none focus:border-[#00C4CC] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#00C4CC] text-[#0D1526] font-bold px-7 py-3.5 rounded-xl hover:bg-[#009DA3] transition-colors whitespace-nowrap"
          >
            {dict.newsletter.cta}
          </button>
        </form>

        <p className="text-xs text-[#4B5563] mt-4">
          Bez spamu. Rezygnacja w każdej chwili.
        </p>
      </div>
    </section>
  );
}
