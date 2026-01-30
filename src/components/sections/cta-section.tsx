'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function CTASection() {
  const t = useTranslations('home.cta');

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/30 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-light dark:text-muted-dark mb-8 max-w-xl mx-auto">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://lin.ee/EE6XyPL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 w-full sm:w-auto text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              {t('primary')}
            </a>
            <Link href="/contact" className="btn-secondary gap-2 w-full sm:w-auto">
              {t('secondary')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-light dark:text-muted-dark"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>{t('trust.free')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>{t('trust.fast')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>{t('trust.support')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
