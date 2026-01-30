'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, Play } from 'lucide-react';
import RotatingText from '@/src/components/RotatingText';

export function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-brand-purple/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm">
              <Sparkles className="h-4 w-4 text-brand-purple" />
              {t('badge')}
            </span>
          </motion.div>

          {/* Title with Rotating Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-8">
            <RotatingText />
            <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {t('description')}
          </motion.p>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://lin.ee/EE6XyPL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B900] px-8 py-4 font-medium text-white hover:bg-[#00A000] transition-colors w-full sm:w-auto shadow-lg shadow-[#00B900]/30 focus:outline-none focus:ring-2 focus:ring-[#00B900] focus:ring-offset-2 focus:ring-offset-background"
              aria-label={locale === 'th' ? 'ปรึกษาฟรีทาง LINE' : 'Free consultation via LINE'}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {t('cta.primary')}
            </a>
            <Link href={`/${locale}/portfolio`} className="btn-secondary w-full sm:w-auto gap-2">
              <Play className="h-4 w-4" aria-hidden="true" />
              {t('cta.secondary')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '50+', label: locale === 'th' ? 'โปรเจคสำเร็จ' : 'Projects' },
              { value: '100%', label: locale === 'th' ? 'ความพึงพอใจ' : 'Satisfaction' },
              { value: '24/7', label: locale === 'th' ? 'ซัพพอร์ต' : 'Support' },
              { value: '5+', label: locale === 'th' ? 'ปีประสบการณ์' : 'Years' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
