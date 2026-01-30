'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe, Laptop, Smartphone, Bot, Megaphone, Search, Share2, Building2, ArrowRight } from 'lucide-react';

const services = [
  { key: 'website', icon: Globe, href: '/services/website', color: 'from-purple-500 to-blue-500' },
  { key: 'webapp', icon: Laptop, href: '/services/webapp', color: 'from-blue-500 to-cyan-500' },
  { key: 'app', icon: Smartphone, href: '/services/app', color: 'from-cyan-500 to-teal-500' },
  { key: 'ai', icon: Bot, href: '/services/ai', color: 'from-teal-500 to-green-500' },
  { key: 'ads', icon: Megaphone, href: '/services/ads', color: 'from-orange-500 to-red-500' },
  { key: 'seo', icon: Search, href: '/services/seo', color: 'from-pink-500 to-purple-500' },
  { key: 'social', icon: Share2, href: '/services/social', color: 'from-indigo-500 to-purple-500' },
  { key: 'business', icon: Building2, href: '/services/business', color: 'from-gray-500 to-gray-700' },
];

export function ServicesSection({ limit }: { limit?: number }) {
  const t = useTranslations('services');
  const tItems = useTranslations('services.items');
  const locale = useLocale();
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="section bg-card">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {items.map((service, i) => (
            <motion.div key={service.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link href={`/${locale}${service.href}`} className="group card-hover flex flex-col h-full p-3 sm:p-6">
                <div className={`mb-2 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-lg font-semibold group-hover:text-primary">{tItems(`${service.key}.title`)}</h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground flex-1 line-clamp-2 sm:line-clamp-none">{tItems(`${service.key}.description`)}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link href={`/${locale}/services`} className="btn-outline">{t('viewAll')} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
