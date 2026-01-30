'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Bot,
  Megaphone,
  Search,
  Share2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    href: '/services/website',
    color: 'from-purple-500 to-blue-500',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: Smartphone,
    href: '/services/webapp',
    color: 'from-blue-500 to-cyan-500',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    icon: Smartphone,
    href: '/services/app',
    color: 'from-cyan-500 to-teal-500',
    shadowColor: 'shadow-cyan-500/20',
  },
  {
    icon: Bot,
    href: '/services/ai',
    color: 'from-purple-500 to-pink-500',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: Megaphone,
    href: '/services/ads',
    color: 'from-orange-500 to-red-500',
    shadowColor: 'shadow-orange-500/20',
  },
  {
    icon: Search,
    href: '/services/seo',
    color: 'from-green-500 to-emerald-500',
    shadowColor: 'shadow-green-500/20',
  },
  {
    icon: Share2,
    href: '/services/social',
    color: 'from-pink-500 to-rose-500',
    shadowColor: 'shadow-pink-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  const t = useTranslations('home.services');

  return (
    <section className="section bg-surface-light/50 dark:bg-surface-dark/50">
      <div className="container-custom">
        {/* Section Header */}
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const key = service.href.split('/').pop() || '';

            return (
              <motion.div key={service.href} variants={itemVariants}>
                <Link
                  href={service.href}
                  className={`group card-hover relative overflow-hidden h-full flex flex-col hover:shadow-xl ${service.shadowColor}`}
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-purple transition-colors">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark mb-4 flex-1">
                    {t(`items.${key}.description`)}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-1 text-sm font-medium text-brand-purple">
                    {t('learnMore')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary gap-2">
            {t('viewAll')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
