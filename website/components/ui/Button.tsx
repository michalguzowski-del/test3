'use client';

import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses = {
  primary: 'bg-[#00C4CC] text-[#0D1526] font-semibold hover:bg-[#009DA3] shadow-lg shadow-cyan-500/25',
  secondary: 'bg-[#1A2B5F] text-white font-semibold hover:bg-[#162347] border border-[#2B4B9E]',
  ghost: 'text-[#00C4CC] font-semibold hover:bg-[#00C4CC]/10',
  outline: 'border-2 border-[#00C4CC] text-[#00C4CC] font-semibold hover:bg-[#00C4CC] hover:text-[#0D1526]',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
