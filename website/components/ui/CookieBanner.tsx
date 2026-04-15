'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Locale } from '@/types';
import type { Dictionary } from '@/lib/dictionaries';

const STORAGE_KEY = 'cookie_consent';

interface CookieBannerProps {
  locale: Locale;
  dict: Pick<Dictionary, 'cookie'>;
}

export function CookieBanner({ locale, dict }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={dict.cookie.title}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1E3575] bg-[#0D1526] px-4 py-5 shadow-2xl md:px-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <div className="flex-1">
          <p className="mb-1 text-sm font-semibold text-white">
            {dict.cookie.title}
          </p>
          <p className="text-sm leading-relaxed text-[#9CA3AF]">
            {dict.cookie.description}{' '}
            <Link
              href={`/${locale}/legal`}
              className="text-[#00C4CC] underline underline-offset-2 hover:text-[#33D4DB] transition-colors duration-150"
            >
              {dict.cookie.privacy_link}
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleReject}
            className="rounded-lg border border-[#1E3575] bg-transparent px-4 py-2 text-sm font-medium text-[#9CA3AF] transition-colors duration-150 hover:border-[#2B4B9E] hover:text-white"
          >
            {dict.cookie.reject}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-[#00C4CC] px-4 py-2 text-sm font-medium text-[#0D1526] transition-colors duration-150 hover:bg-[#33D4DB]"
          >
            {dict.cookie.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
