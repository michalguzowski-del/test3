'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import type { Locale } from '@/types';
import type { Dictionary } from '@/lib/dictionaries';

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export function Header({ locale, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: dict.nav.about, href: `/${locale}/o-nas` },
    { label: dict.nav.data, href: `/${locale}/dane` },
    { label: dict.nav.investors, href: `/${locale}/inwestorzy` },
    { label: dict.nav.media, href: `/${locale}/media` },
    { label: dict.nav.career, href: `/${locale}/kariera` },
    { label: dict.nav.contact, href: `/${locale}/kontakt` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1526]/95 backdrop-blur-md border-b border-[#1E3575]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C4CC] to-[#6C63FF] flex items-center justify-center">
              <span className="text-white font-bold text-sm">CT</span>
            </div>
            <span className="text-white font-bold text-lg">Cloud Technologies</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#9CA3AF] hover:text-[#00C4CC] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} variant="dark" />
            <Link
              href={`/${locale}/kontakt`}
              className="bg-[#00C4CC] text-[#0D1526] font-semibold text-sm px-5 py-2 rounded-lg hover:bg-[#009DA3] transition-colors"
            >
              {dict.nav.contact}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D1526] border-t border-[#1E3575]">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#9CA3AF] hover:text-white hover:bg-[#162347] px-4 py-3 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1E3575]">
              <LanguageSwitcher currentLocale={locale} variant="dark" />
              <Link
                href={`/${locale}/kontakt`}
                onClick={() => setMobileOpen(false)}
                className="bg-[#00C4CC] text-[#0D1526] font-semibold text-sm px-5 py-2 rounded-lg"
              >
                {dict.nav.contact}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
