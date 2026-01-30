'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { useState } from 'react';
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from '@/src/components/seo/json-ld';

// Icon lookup helper
const getIcon = (name: string): LucideIcons.LucideIcon => {
  const icons = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;
  return icons[name] || LucideIcons.HelpCircle;
};

// Direct icon references for template
const Sparkles = LucideIcons.Sparkles;
const Check = LucideIcons.Check;
const ArrowRight = LucideIcons.ArrowRight;
const MessageCircle = LucideIcons.MessageCircle;
const ChevronDown = LucideIcons.ChevronDown;

interface Feature {
  icon: string;
  titleKey: string;
  descKey: string;
}

interface PricingTier {
  nameKey: string;
  priceKey: string;
  featuresKeys: string[];
  highlighted?: boolean;
}

interface ServicePageProps {
  serviceKey: string;
  icon: string;
  color: string;
  features: Feature[];
  process: { icon: string; titleKey: string; descKey: string }[];
  pricingTiers?: PricingTier[];
  relatedServices: { key: string; href: string; icon: string }[];
}

export function ServicePageTemplate({
  serviceKey,
  icon,
  color,
  features,
  process,
  pricingTiers,
  relatedServices,
}: ServicePageProps) {
  const t = useTranslations(`services.${serviceKey}`);
  const tCommon = useTranslations('services');
  const ServiceIcon = getIcon(icon);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // FAQ items for schema
  const faqItems = [1, 2, 3, 4, 5].map((i) => ({
    question: t(`faq.${i}.question`),
    answer: t(`faq.${i}.answer`),
  }));

  // Breadcrumb items
  const breadcrumbs = [
    { name: 'หน้าแรก', url: '/' },
    { name: 'บริการ', url: '/services' },
    { name: t('title'), url: `/services/${serviceKey}` },
  ];

  return (
    <>
      {/* Schema Markup */}
      <ServiceSchema
        name={t('title')}
        description={t('description')}
        url={`/services/${serviceKey}`}
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${color} opacity-20 rounded-full blur-3xl`} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-light dark:text-muted-dark mb-8">
            <Link href="/" className="hover:text-brand-purple transition-colors">
              หน้าแรก
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-purple transition-colors">
              บริการ
            </Link>
            <span>/</span>
            <span className="text-foreground-light dark:text-foreground-dark">
              {t('title')}
            </span>
          </nav>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                <ServiceIcon className="h-8 w-8 text-white" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Sparkles className="h-4 w-4 text-brand-purple" />
                <span className="text-sm font-medium">{t('badge')}</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-light dark:text-muted-dark mb-8 max-w-2xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://lin.ee/EE6XyPL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                {tCommon('cta.primary')}
              </a>
              <Link href="/portfolio" className="btn-secondary gap-2">
                ดูผลงาน
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-surface-light/50 dark:bg-surface-dark/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = getIcon(feature.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-muted-light dark:text-muted-dark">
                    {t(feature.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('process.title')}</h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-brand hidden md:block" />

              <div className="space-y-8">
                {process.map((step, index) => {
                  const Icon = getIcon(step.icon);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="card flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-5 w-5 text-brand-purple" />
                          <h3 className="font-semibold">{t(step.titleKey)}</h3>
                        </div>
                        <p className="text-sm text-muted-light dark:text-muted-dark">
                          {t(step.descKey)}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Optional) */}
      {pricingTiers && (
        <section className="section bg-surface-light/50 dark:bg-surface-dark/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
              <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
                {t('pricing.subtitle')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`card relative ${
                    tier.highlighted
                      ? 'border-brand-purple shadow-glow'
                      : ''
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-brand rounded-full text-white text-xs font-medium">
                      แนะนำ
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{t(tier.nameKey)}</h3>
                  <div className="text-3xl font-bold text-gradient mb-4">
                    {t(tier.priceKey)}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.featuresKeys.map((featureKey, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>{t(featureKey)}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://lin.ee/EE6XyPL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={tier.highlighted ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  >
                    สอบถามราคา
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('faq.title')}</h2>
            <p className="text-muted-light dark:text-muted-dark max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3, 4, 5].map((i, index) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold pr-4">{t(`faq.${i}.question`)}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-muted-light dark:text-muted-dark">
                      {t(`faq.${i}.answer`)}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section bg-surface-light/50 dark:bg-surface-dark/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{tCommon('related.title')}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {relatedServices.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Link
                  key={service.key}
                  href={service.href}
                  className="card-hover flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{tCommon(`items.${service.key}.title`)}</h3>
                    <p className="text-sm text-muted-light dark:text-muted-dark">
                      {tCommon('learnMore')}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-lg text-muted-light dark:text-muted-dark mb-8">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://lin.ee/EE6XyPL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary gap-2 w-full sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                {tCommon('cta.primary')}
              </a>
              <Link href="/contact" className="btn-secondary gap-2 w-full sm:w-auto">
                {tCommon('cta.secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
