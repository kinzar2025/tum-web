'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Briefcase, LayoutGrid, MessageCircle, Phone } from 'lucide-react';

const navItems = [
  {
    key: 'portfolio',
    href: '/portfolio',
    icon: Briefcase,
    label: { th: 'ผลงาน', en: 'Portfolio' },
  },
  {
    key: 'services',
    href: '/services',
    icon: LayoutGrid,
    label: { th: 'บริการ', en: 'Services' },
  },
  {
    key: 'line',
    href: 'https://lin.ee/EE6XyPL',
    icon: MessageCircle,
    label: { th: 'LINE', en: 'LINE' },
    isExternal: true,
    isHighlight: true,
  },
  {
    key: 'call',
    href: 'tel:0812345678',
    icon: Phone,
    label: { th: 'โทร', en: 'Call' },
    isExternal: true,
  },
];

export function MobileNav() {
  const locale = useLocale();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-t border-border" />

      {/* Nav items */}
      <div className="relative flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHighlight = item.isHighlight;

          if (item.isExternal) {
            return (
              <a
                key={item.key}
                href={item.href}
                target={item.key === 'line' ? '_blank' : undefined}
                rel={item.key === 'line' ? 'noopener noreferrer' : undefined}
                className={`flex flex-col items-center justify-center gap-1 min-w-[70px] py-2 rounded-xl transition-all ${
                  isHighlight
                    ? 'bg-[#00B900] text-white shadow-lg shadow-[#00B900]/30'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className={`h-5 w-5 ${isHighlight ? '' : ''}`} />
                <span className="text-[10px] font-medium">
                  {item.label[locale as 'th' | 'en']}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="flex flex-col items-center justify-center gap-1 min-w-[70px] py-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">
                {item.label[locale as 'th' | 'en']}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
