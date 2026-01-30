'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, HeartHandshake, Gem, Wallet } from 'lucide-react';

const features = [
  { key: 'experience', icon: Award },
  { key: 'support', icon: HeartHandshake },
  { key: 'quality', icon: Gem },
  { key: 'price', icon: Wallet },
];

export function WhyUsSection() {
  const t = useTranslations('whyUs');
  const tItems = useTranslations('whyUs.items');

  return (
    <section className="section bg-card">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div key={feature.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="mx-auto mb-2 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-brand text-white">
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold">{tItems(`${feature.key}.title`)}</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">{tItems(`${feature.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
