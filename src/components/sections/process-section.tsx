'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';

const steps = [
  { icon: MessageCircle, key: 'consult' },
  { icon: Lightbulb, key: 'plan' },
  { icon: Code, key: 'develop' },
  { icon: Rocket, key: 'launch' },
];

export function ProcessSection() {
  const t = useTranslations('home.process');

  return (
    <section className="section">
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

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-brand hidden lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  <div className="card pt-8">
                    <div className="w-16 h-16 rounded-2xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-brand-purple" />
                    </div>
                    <h3 className="font-semibold mb-2">{t(`steps.${step.key}.title`)}</h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark">
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
