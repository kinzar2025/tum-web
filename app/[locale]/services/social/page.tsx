import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServicePageTemplate } from '@/components/services/service-page-template';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.social' });

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

export default async function SocialPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      serviceKey="social"
      icon="Share2"
      color="from-pink-500 to-rose-500"
      features={[
        { icon: 'Facebook', titleKey: 'features.items.facebook.title', descKey: 'features.items.facebook.desc' },
        { icon: 'Instagram', titleKey: 'features.items.instagram.title', descKey: 'features.items.instagram.desc' },
        { icon: 'Music2', titleKey: 'features.items.tiktok.title', descKey: 'features.items.tiktok.desc' },
        { icon: 'Youtube', titleKey: 'features.items.youtube.title', descKey: 'features.items.youtube.desc' },
        { icon: 'PenTool', titleKey: 'features.items.content.title', descKey: 'features.items.content.desc' },
        { icon: 'Calendar', titleKey: 'features.items.schedule.title', descKey: 'features.items.schedule.desc' },
      ]}
      process={[
        { icon: 'MessageSquare', titleKey: 'process.steps.consult.title', descKey: 'process.steps.consult.desc' },
        { icon: 'FileText', titleKey: 'process.steps.plan.title', descKey: 'process.steps.plan.desc' },
        { icon: 'Settings', titleKey: 'process.steps.create.title', descKey: 'process.steps.create.desc' },
        { icon: 'Rocket', titleKey: 'process.steps.grow.title', descKey: 'process.steps.grow.desc' },
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
          nameKey: 'pricing.tiers.premium.name',
          priceKey: 'pricing.tiers.premium.price',
          featuresKeys: [
            'pricing.tiers.premium.features.1',
            'pricing.tiers.premium.features.2',
            'pricing.tiers.premium.features.3',
            'pricing.tiers.premium.features.4',
            'pricing.tiers.premium.features.5',
            'pricing.tiers.premium.features.6',
            'pricing.tiers.premium.features.7',
          ],
        },
      ]}
      relatedServices={[
        { key: 'ads', href: '/services/ads', icon: 'Megaphone' },
        { key: 'seo', href: '/services/seo', icon: 'Search' },
        { key: 'website', href: '/services/website', icon: 'Globe' },
      ]}
    />
  );
}
