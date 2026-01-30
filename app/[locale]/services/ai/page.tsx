import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServicePageTemplate } from '@/components/services/service-page-template';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.ai' });

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

export default async function AIPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      serviceKey="ai"
      icon="Bot"
      color="from-purple-500 to-pink-500"
      features={[
        { icon: 'MessageCircle', titleKey: 'features.items.chatbot.title', descKey: 'features.items.chatbot.desc' },
        { icon: 'PenTool', titleKey: 'features.items.writer.title', descKey: 'features.items.writer.desc' },
        { icon: 'Clock', titleKey: 'features.items.24hours.title', descKey: 'features.items.24hours.desc' },
        { icon: 'Zap', titleKey: 'features.items.fast.title', descKey: 'features.items.fast.desc' },
        { icon: 'Brain', titleKey: 'features.items.learn.title', descKey: 'features.items.learn.desc' },
        { icon: 'Plug', titleKey: 'features.items.integration.title', descKey: 'features.items.integration.desc' },
      ]}
      process={[
        { icon: 'MessageCircle', titleKey: 'process.steps.consult.title', descKey: 'process.steps.consult.desc' },
        { icon: 'FileText', titleKey: 'process.steps.train.title', descKey: 'process.steps.train.desc' },
        { icon: 'Settings', titleKey: 'process.steps.setup.title', descKey: 'process.steps.setup.desc' },
        { icon: 'Rocket', titleKey: 'process.steps.launch.title', descKey: 'process.steps.launch.desc' },
      ]}
      pricingTiers={[
        {
          nameKey: 'pricing.tiers.chatbot.name',
          priceKey: 'pricing.tiers.chatbot.price',
          featuresKeys: [
            'pricing.tiers.chatbot.features.1',
            'pricing.tiers.chatbot.features.2',
            'pricing.tiers.chatbot.features.3',
            'pricing.tiers.chatbot.features.4',
            'pricing.tiers.chatbot.features.5',
          ],
        },
        {
          nameKey: 'pricing.tiers.writer.name',
          priceKey: 'pricing.tiers.writer.price',
          featuresKeys: [
            'pricing.tiers.writer.features.1',
            'pricing.tiers.writer.features.2',
            'pricing.tiers.writer.features.3',
            'pricing.tiers.writer.features.4',
            'pricing.tiers.writer.features.5',
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
        { key: 'webapp', href: '/services/webapp', icon: 'Laptop' },
        { key: 'website', href: '/services/website', icon: 'Globe' },
        { key: 'app', href: '/services/app', icon: 'Smartphone' },
      ]}
    />
  );
}
