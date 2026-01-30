import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServicePageTemplate } from '@/components/services/service-page-template';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.ads' });

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

export default async function AdsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      serviceKey="ads"
      icon="Megaphone"
      color="from-orange-500 to-red-500"
      features={[
        { icon: 'Facebook', titleKey: 'features.items.facebook.title', descKey: 'features.items.facebook.desc' },
        { icon: 'Chrome', titleKey: 'features.items.google.title', descKey: 'features.items.google.desc' },
        { icon: 'Music2', titleKey: 'features.items.tiktok.title', descKey: 'features.items.tiktok.desc' },
        { icon: 'Target', titleKey: 'features.items.targeting.title', descKey: 'features.items.targeting.desc' },
        { icon: 'BarChart3', titleKey: 'features.items.analytics.title', descKey: 'features.items.analytics.desc' },
        { icon: 'Wallet', titleKey: 'features.items.budget.title', descKey: 'features.items.budget.desc' },
      ]}
      process={[
        { icon: 'MessageSquare', titleKey: 'process.steps.consult.title', descKey: 'process.steps.consult.desc' },
        { icon: 'FileText', titleKey: 'process.steps.strategy.title', descKey: 'process.steps.strategy.desc' },
        { icon: 'Settings', titleKey: 'process.steps.campaign.title', descKey: 'process.steps.campaign.desc' },
        { icon: 'Rocket', titleKey: 'process.steps.optimize.title', descKey: 'process.steps.optimize.desc' },
      ]}
      pricingTiers={[
        {
          nameKey: 'pricing.tiers.starter.name',
          priceKey: 'pricing.tiers.starter.price',
          featuresKeys: [
            'pricing.tiers.starter.features.1',
            'pricing.tiers.starter.features.2',
            'pricing.tiers.starter.features.3',
            'pricing.tiers.starter.features.4',
            'pricing.tiers.starter.features.5',
          ],
        },
        {
          nameKey: 'pricing.tiers.growth.name',
          priceKey: 'pricing.tiers.growth.price',
          featuresKeys: [
            'pricing.tiers.growth.features.1',
            'pricing.tiers.growth.features.2',
            'pricing.tiers.growth.features.3',
            'pricing.tiers.growth.features.4',
            'pricing.tiers.growth.features.5',
            'pricing.tiers.growth.features.6',
          ],
          highlighted: true,
        },
        {
          nameKey: 'pricing.tiers.scale.name',
          priceKey: 'pricing.tiers.scale.price',
          featuresKeys: [
            'pricing.tiers.scale.features.1',
            'pricing.tiers.scale.features.2',
            'pricing.tiers.scale.features.3',
            'pricing.tiers.scale.features.4',
            'pricing.tiers.scale.features.5',
            'pricing.tiers.scale.features.6',
            'pricing.tiers.scale.features.7',
          ],
        },
      ]}
      relatedServices={[
        { key: 'seo', href: '/services/seo', icon: 'Search' },
        { key: 'social', href: '/services/social', icon: 'Share2' },
        { key: 'website', href: '/services/website', icon: 'Globe' },
      ]}
    />
  );
}
