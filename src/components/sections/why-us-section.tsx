'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Shield,
  Zap,
  HeartHandshake,
  Award,
  Clock,
  Users,
} from 'lucide-react';

const features = [
  { icon: Shield, key: 'quality' },
  { icon: Zap, key: 'fast' },
  { icon: HeartHandshake, key: 'support' },
  { icon: Award, key: 'expert' },
  { icon: Clock, key: 'ontime' },
  { icon: Users, key: 'team' },
];

export function WhyUsSection() {
  const t = useTranslations('home.whyUs');

  return (
    <section className="section bg-surface-light/50 dark:bg-surface-dark/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
          >
            <Sparkles className="h-4 w-4 text-brand-purple" />
            <span className="text-sm font-medium">{t('badge')}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t(`items.${feature.key}.title`)}</h3>
                <p className="text-sm text-muted-light dark:text-muted-dark">
                  {t(`items.${feature.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
