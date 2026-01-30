import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServicePageTemplate } from '@/components/services/service-page-template';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.website' });

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

export default async function WebsitePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      serviceKey="website"
      icon="Globe"
      color="from-purple-500 to-blue-500"
      features={[
        { icon: 'Palette', titleKey: 'features.items.design.title', descKey: 'features.items.design.desc' },
        { icon: 'Smartphone', titleKey: 'features.items.responsive.title', descKey: 'features.items.responsive.desc' },
        { icon: 'Zap', titleKey: 'features.items.fast.title', descKey: 'features.items.fast.desc' },
        { icon: 'Search', titleKey: 'features.items.seo.title', descKey: 'features.items.seo.desc' },
        { icon: 'Lock', titleKey: 'features.items.ssl.title', descKey: 'features.items.ssl.desc' },
        { icon: 'Settings', titleKey: 'features.items.cms.title', descKey: 'features.items.cms.desc' },
      ]}
      process={[
        { icon: 'MessageSquare', titleKey: 'process.steps.consult.title', descKey: 'process.steps.consult.desc' },
        { icon: 'FileText', titleKey: 'process.steps.design.title', descKey: 'process.steps.design.desc' },
        { icon: 'Settings', titleKey: 'process.steps.develop.title', descKey: 'process.steps.develop.desc' },
        { icon: 'Rocket', titleKey: 'process.steps.launch.title', descKey: 'process.steps.launch.desc' },
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
          nameKey: 'pricing.tiers.business.name',
          priceKey: 'pricing.tiers.business.price',
          featuresKeys: [
            'pricing.tiers.business.features.1',
            'pricing.tiers.business.features.2',
            'pricing.tiers.business.features.3',
            'pricing.tiers.business.features.4',
            'pricing.tiers.business.features.5',
            'pricing.tiers.business.features.6',
          ],
          highlighted: true,
        },
        {
          nameKey: 'pricing.tiers.ecommerce.name',
          priceKey: 'pricing.tiers.ecommerce.price',
          featuresKeys: [
            'pricing.tiers.ecommerce.features.1',
            'pricing.tiers.ecommerce.features.2',
            'pricing.tiers.ecommerce.features.3',
            'pricing.tiers.ecommerce.features.4',
            'pricing.tiers.ecommerce.features.5',
            'pricing.tiers.ecommerce.features.6',
            'pricing.tiers.ecommerce.features.7',
          ],
        },
      ]}
      relatedServices={[
        { key: 'webapp', href: '/services/webapp', icon: 'Laptop' },
        { key: 'seo', href: '/services/seo', icon: 'Search' },
        { key: 'ads', href: '/services/ads', icon: 'Megaphone' },
      ]}
    />
  );
}
