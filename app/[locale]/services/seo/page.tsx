import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServicePageTemplate } from '@/components/services/service-page-template';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.seo' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
    },
  };
}

export default async function SEOPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      serviceKey="seo"
      icon="Search"
      color="from-green-500 to-emerald-500"
      features={[
        { icon: 'Key', titleKey: 'features.items.keyword.title', descKey: 'features.items.keyword.desc' },
        { icon: 'FileText', titleKey: 'features.items.content.title', descKey: 'features.items.content.desc' },
        { icon: 'Wrench', titleKey: 'features.items.technical.title', descKey: 'features.items.technical.desc' },
        { icon: 'Link2', titleKey: 'features.items.linkbuilding.title', descKey: 'features.items.linkbuilding.desc' },
        { icon: 'MapPin', titleKey: 'features.items.local.title', descKey: 'features.items.local.desc' },
        { icon: 'BarChart3', titleKey: 'features.items.analytics.title', descKey: 'features.items.analytics.desc' },
      ]}
      process={[
        { icon: 'MessageSquare', titleKey: 'process.steps.audit.title', descKey: 'process.steps.audit.desc' },
        { icon: 'FileText', titleKey: 'process.steps.strategy.title', descKey: 'process.steps.strategy.desc' },
        { icon: 'Settings', titleKey: 'process.steps.optimize.title', descKey: 'process.steps.optimize.desc' },
        { icon: 'Rocket', titleKey: 'process.steps.monitor.title', descKey: 'process.steps.monitor.desc' },
      ]}
      pricingTiers={[
        {
          nameKey: 'pricing.tiers.basic.name',
          priceKey: 'pricing.tiers.basic.price',
          featuresKeys: [
            'pricing.tiers.basic.features.1',
            'pricing.tiers.basic.features.2',
            'pricing.tiers.basic.features.3',
            'pricing.tiers.basic.features.4',
            'pricing.tiers.basic.features.5',
          ],
        },
        {
          nameKey: 'pricing.tiers.pro.name',
          priceKey: 'pricing.tiers.pro.price',
          featuresKeys: [
            'pricing.tiers.pro.features.1',
            'pricing.tiers.pro.features.2',
            'pricing.tiers.pro.features.3',
            'pricing.tiers.pro.features.4',
            'pricing.tiers.pro.features.5',
            'pricing.tiers.pro.features.6',
          ],
          highlighted: true,
        },
        {
          nameKey: 'pricing.tiers.enterprise.name',
          priceKey: 'pricing.tiers.enterprise.price',
          featuresKeys: [
            'pricing.tiers.enterprise.features.1',
            'pricing.tiers.enterprise.features.2',
            'pricing.tiers.enterprise.features.3',
            'pricing.tiers.enterprise.features.4',
            'pricing.tiers.enterprise.features.5',
            'pricing.tiers.enterprise.features.6',
          ],
        },
      ]}
      relatedServices={[
        { key: 'ads', href: '/services/ads', icon: 'Megaphone' },
        { key: 'social', href: '/services/social', icon: 'Share2' },
        { key: 'website', href: '/services/website', icon: 'Globe' },
      ]}
    />
  );
}
