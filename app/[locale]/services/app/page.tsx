import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServicePageTemplate } from '@/components/services/service-page-template';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.app' });

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

export default async function AppPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      serviceKey="app"
      icon="Smartphone"
      color="from-cyan-500 to-teal-500"
      features={[
        { icon: 'Apple', titleKey: 'features.items.ios.title', descKey: 'features.items.ios.desc' },
        { icon: 'Smartphone', titleKey: 'features.items.android.title', descKey: 'features.items.android.desc' },
        { icon: 'Layers', titleKey: 'features.items.crossplatform.title', descKey: 'features.items.crossplatform.desc' },
        { icon: 'Bell', titleKey: 'features.items.push.title', descKey: 'features.items.push.desc' },
        { icon: 'WifiOff', titleKey: 'features.items.offline.title', descKey: 'features.items.offline.desc' },
        { icon: 'Globe', titleKey: 'features.items.pwa.title', descKey: 'features.items.pwa.desc' },
      ]}
      process={[
        { icon: 'MessageSquare', titleKey: 'process.steps.consult.title', descKey: 'process.steps.consult.desc' },
        { icon: 'FileText', titleKey: 'process.steps.design.title', descKey: 'process.steps.design.desc' },
        { icon: 'Settings', titleKey: 'process.steps.develop.title', descKey: 'process.steps.develop.desc' },
        { icon: 'Rocket', titleKey: 'process.steps.launch.title', descKey: 'process.steps.launch.desc' },
      ]}
      relatedServices={[
        { key: 'webapp', href: '/services/webapp', icon: 'Laptop' },
        { key: 'ai', href: '/services/ai', icon: 'Bot' },
        { key: 'website', href: '/services/website', icon: 'Globe' },
      ]}
    />
  );
}
