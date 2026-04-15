interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'glass';
  className?: string;
  hover?: boolean;
}

const variantClasses = {
  default: 'bg-white border border-[#E5E7EB] shadow-sm',
  dark: 'gradient-card border border-[#1E3575]',
  glass: 'bg-white/5 border border-white/10 backdrop-blur-sm',
};

export function Card({ children, variant = 'default', className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-2xl p-6 ${variantClasses[variant]} ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
