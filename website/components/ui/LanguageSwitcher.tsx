'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/types';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  variant?: 'light' | 'dark';
}

export function LanguageSwitcher({ currentLocale, variant = 'dark' }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getLocalePath = (locale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments[0] === 'pl' || segments[0] === 'en') {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    return '/' + segments.join('/');
  };

  const textColor = variant === 'dark' ? 'text-[#9CA3AF]' : 'text-white/70';
  const activeColor = variant === 'dark' ? 'text-[#00C4CC]' : 'text-white';
  const separatorColor = variant === 'dark' ? 'text-[#4B5563]' : 'text-white/30';

  return (
    <div className="flex items-center gap-1 text-sm font-semibold">
      <Link
        href={getLocalePath('pl')}
        className={`transition-colors ${currentLocale === 'pl' ? activeColor : textColor} hover:${activeColor}`}
      >
        PL
      </Link>
      <span className={separatorColor}>/</span>
      <Link
        href={getLocalePath('en')}
        className={`transition-colors ${currentLocale === 'en' ? activeColor : textColor} hover:${activeColor}`}
      >
        EN
      </Link>
    </div>
  );
}
