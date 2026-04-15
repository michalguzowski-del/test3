interface SectionHeaderProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  headline,
  subheadline,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const headlineColor = dark ? 'text-white' : 'text-[#1A1A2E]';
  const subColor = dark ? 'text-[#9CA3AF]' : 'text-[#6B7280]';

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#00C4CC]/10 text-[#00C4CC] border border-[#00C4CC]/30 w-fit">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${headlineColor}`}>
        {headline}
      </h2>
      {subheadline && (
        <p className={`text-lg max-w-2xl ${subColor}`}>{subheadline}</p>
      )}
    </div>
  );
}
