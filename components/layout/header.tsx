'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';

const navItems = [
  { key: 'home', href: '' },
  { key: 'services', href: '/services' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'blog', href: '/blog' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'th' ? 'en' : 'th';
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  const isActive = (href: string) => {
    if (href === '') return pathname === `/${locale}`;
    return pathname.startsWith(`/${locale}${href}`);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}>
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-brand p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background font-bold">
                <span className="gradient-text">TW</span>
              </div>
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              TUM-<span className="gradient-text">WEB</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${isActive(item.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {t(item.key)}
                {isActive(item.href) && (
                  <motion.div layoutId="nav-indicator" className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-brand" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button onClick={toggleLocale} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary">
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-medium">{locale === 'th' ? 'EN' : 'TH'}</span>
            </button>
            {mounted && (
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary">
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}
            <Link href={`/${locale}/contact`} className="hidden btn-primary text-sm md:inline-flex">
              {t('getQuote')}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary md:hidden">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-b border-border bg-background md:hidden">
            <div className="container-custom py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.key} href={`/${locale}${item.href}`} onClick={() => setIsOpen(false)} className={`rounded-lg px-4 py-3 text-sm font-medium ${isActive(item.href) ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}>
                  {t(item.key)}
                </Link>
              ))}
              <Link href={`/${locale}/contact`} onClick={() => setIsOpen(false)} className="btn-primary mt-2 text-center">
                {t('getQuote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
