import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import {
  Globe,
  Smartphone,
  Bot,
  Megaphone,
  Search,
  Share2,
  ArrowRight,
  Sparkles,
  Laptop,
} from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: '/services',
      languages: {
        th: '/th/services',
        en: '/en/services',
      },
    },
  };
}

const services = [
  {
    key: 'website',
    href: '/services/website',
    icon: Globe,
    color: 'from-purple-500 to-blue-500',
  },
  {
    key: 'webapp',
    href: '/services/webapp',
    icon: Laptop,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'app',
    href: '/services/app',
    icon: Smartphone,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    key: 'ai',
    href: '/services/ai',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
  },
  {
    key: 'ads',
    href: '/services/ads',
    icon: Megaphone,
    color: 'from-orange-500 to-red-500',
  },
  {
    key: 'seo',
    href: '/services/seo',
    icon: Search,
    color: 'from-green-500 to-emerald-500',
  },
  {
    key: 'social',
    href: '/services/social',
    icon: Share2,
    color: 'from-pink-500 to-rose-500',
  },
];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <Sparkles className="h-4 w-4 text-brand-purple" />
              <span className="text-sm font-medium">{t('badge')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title.line1')}
              <br />
              <span className="gradient-text">{t('hero.title.line2')}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.key}
                  href={`/${locale}${service.href}`}
                  className="group card-hover relative overflow-hidden p-4 md:p-6"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 md:mb-5`}
                  >
                    <Icon className="h-5 w-5 md:h-7 md:w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h2 className="text-sm md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {t(`items.${service.key}.title`)}
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                    {t(`items.${service.key}.description`)}
                  </p>

                  {/* Features - Hidden on mobile */}
                  <ul className="hidden md:block space-y-2 mb-6">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {t(`items.${service.key}.features.${i}`)}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center gap-1 md:gap-2 text-primary font-medium text-xs md:text-base">
                    <span className="hidden sm:inline">{t('learnMore')}</span>
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://lin.ee/EE6XyPL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#00B900] px-8 py-4 font-medium text-white hover:bg-[#00A000] transition-colors"
                >
                  {t('cta.primary')}
                </a>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  {t('cta.secondary')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
