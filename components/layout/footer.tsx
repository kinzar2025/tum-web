'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Facebook, MessageCircle, Mail, Globe } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services.items');
  const locale = useLocale();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-background font-bold">
                  <span className="gradient-text">TW</span>
                </div>
              </div>
              <span className="font-bold text-xl">TUM-<span className="gradient-text">WEB</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">{t('description')}</p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61587002713347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://lin.ee/EE6XyPL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary hover:bg-[#00B900] hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors"
                aria-label="LINE"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">{t('services.title')}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {['website', 'webapp', 'app', 'ai', 'ads', 'seo'].map((key) => (
                <li key={key}>
                  <Link href={`/${locale}/services/${key}`} className="hover:text-primary">{tServices(`${key}.title`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">{t('company.title')}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {['about', 'portfolio', 'blog', 'contact'].map((key) => (
                <li key={key}>
                  <Link href={`/${locale}/${key}`} className="hover:text-primary">{tNav(key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">{t('contact.title')}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="https://lin.ee/EE6XyPL" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4" /> LINE: @tumweb</a></li>
              <li><a href="mailto:tumweb.com@gmail.com" className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" /> tumweb.com@gmail.com</a></li>
              <li><a href="https://tum-web.com" className="flex items-center gap-2 hover:text-primary"><Globe className="h-4 w-4" /> www.tum-web.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TUM-WEB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
