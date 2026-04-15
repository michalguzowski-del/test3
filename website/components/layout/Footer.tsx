import Link from 'next/link';
import type { Locale } from '@/types';
import type { Dictionary } from '@/lib/dictionaries';

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  const links = {
    company: [
      { label: dict.nav.about, href: `/${locale}/o-nas` },
      { label: dict.nav.data, href: `/${locale}/dane` },
      { label: dict.nav.career, href: `/${locale}/kariera` },
      { label: dict.nav.contact, href: `/${locale}/kontakt` },
    ],
    investors: [
      { label: dict.nav.investors, href: `/${locale}/inwestorzy` },
      { label: dict.nav.media, href: `/${locale}/media` },
    ],
    legal: [
      { label: dict.footer.privacy, href: `/${locale}/polityka-prywatnosci` },
      { label: dict.footer.terms, href: `/${locale}/polityka-prywatnosci` },
    ],
  };

  return (
    <footer className="bg-[#0D1526] border-t border-[#1E3575]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C4CC] to-[#6C63FF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">CT</span>
              </div>
              <span className="text-white font-bold text-lg">Cloud Technologies</span>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              {dict.footer.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {['in', 'tw', 'fb'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[#162347] border border-[#2B4B9E] flex items-center justify-center text-[#9CA3AF] hover:text-[#00C4CC] hover:border-[#00C4CC] transition-colors text-xs font-bold uppercase"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Firma</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6B7280] hover:text-[#00C4CC] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investors */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Inwestorzy</h4>
            <ul className="space-y-2">
              {links.investors.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#6B7280] hover:text-[#00C4CC] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
            <address className="not-italic space-y-2 text-sm text-[#6B7280]">
              <p>ul. Konstruktorska 13</p>
              <p>02-673 Warszawa, Polska</p>
              <p className="mt-3">
                <a href="mailto:contact@cloudtechnologies.pl" className="hover:text-[#00C4CC] transition-colors">
                  contact@cloudtechnologies.pl
                </a>
              </p>
              <p>
                <a href="tel:+48221234567" className="hover:text-[#00C4CC] transition-colors">
                  +48 22 123 45 67
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-[#1E3575]">
          <p className="text-[#4B5563] text-sm">
            © {year} Cloud Technologies S.A. {dict.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            {links.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#4B5563] hover:text-[#00C4CC] text-sm transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
