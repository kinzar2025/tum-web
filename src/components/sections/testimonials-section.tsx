'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, avatar: '/images/testimonials/1.jpg', rating: 5 },
  { id: 2, avatar: '/images/testimonials/2.jpg', rating: 5 },
  { id: 3, avatar: '/images/testimonials/3.jpg', rating: 5 },
];

export function TestimonialsSection() {
  const t = useTranslations('home.testimonials');

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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-purple/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-light dark:text-muted-dark mb-6">
                &ldquo;{t(`items.${testimonial.id}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold">
                  {t(`items.${testimonial.id}.name`).charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t(`items.${testimonial.id}.name`)}</div>
                  <div className="text-sm text-muted-light dark:text-muted-dark">
                    {t(`items.${testimonial.id}.role`)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
