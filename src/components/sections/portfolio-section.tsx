'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

const portfolioItems = [
  {
    id: 'kinzar',
    image: '/images/portfolio/kinzar.jpg',
    url: 'https://kinzar.com',
    tags: ['Next.js', 'Gaming', 'API'],
  },
  {
    id: 'birdblocked',
    image: '/images/portfolio/birdblocked.jpg',
    url: 'https://birdblocked.com',
    tags: ['E-commerce', 'Supabase', 'B2B'],
  },
  {
    id: 'artandgungame',
    image: '/images/portfolio/artandgungame.jpg',
    url: 'https://artandgungame.com',
    tags: ['E-commerce', 'Gaming', 'Newsletter'],
  },
  {
    id: 'dcbigsize',
    image: '/images/portfolio/dcbigsize.jpg',
    url: 'https://dcbigsize.com',
    tags: ['WooCommerce', 'Fashion', '1300+ Products'],
  },
  {
    id: 't62residence',
    image: '/images/portfolio/t62residence.jpg',
    url: 'https://t62residence.com',
    tags: ['Hotel', 'WordPress', 'Local SEO'],
  },
  {
    id: 'iplusstudio',
    image: '/images/portfolio/iplusstudio.jpg',
    url: 'https://iplus-studio.net',
    tags: ['WooCommerce', 'IT Store', 'Electronics'],
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

export function PortfolioSection() {
  const t = useTranslations('home.portfolio');

  return (
    <section className="section">
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

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <div className="group card-hover overflow-hidden">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20" />
                  <Image
                    src={item.image}
                    alt={t(`items.${item.id}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t('visit')}
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold mb-2 group-hover:text-brand-purple transition-colors">
                  {t(`items.${item.id}.title`)}
                </h3>
                <p className="text-sm text-muted-light dark:text-muted-dark mb-3">
                  {t(`items.${item.id}.description`)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-brand-purple/10 text-brand-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="btn-secondary gap-2">
            {t('viewAll')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
