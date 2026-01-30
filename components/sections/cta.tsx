'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section className="section bg-card">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 md:p-12 lg:p-16">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">{t('title')}</h2>
            <p className="mt-4 text-lg text-white/80">{t('subtitle')}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://lin.ee/EE6XyPL" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#00B900] px-8 py-4 font-medium text-white hover:bg-[#00A000]">
                <MessageCircle className="h-5 w-5" /> LINE @tumweb
              </a>
              <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-medium text-gray-900 hover:bg-gray-100">
                {t('button')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
