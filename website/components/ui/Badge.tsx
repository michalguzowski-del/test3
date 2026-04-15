interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'dark' | 'outline';
  className?: string;
}

const variantClasses = {
  cyan: 'bg-[#00C4CC]/10 text-[#00C4CC] border border-[#00C4CC]/30',
  purple: 'bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/30',
  dark: 'bg-[#162347] text-[#00C4CC] border border-[#2B4B9E]',
  outline: 'bg-transparent text-[#6B7280] border border-[#E5E7EB]',
};

export function Badge({ children, variant = 'cyan', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
