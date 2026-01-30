import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ServicePageTemplate } from '@/components/services/service-page-template';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.webapp' });

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

export default async function WebAppPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <ServicePageTemplate
      serviceKey="webapp"
      icon="Laptop"
      color="from-blue-500 to-cyan-500"
      features={[
        { icon: 'Database', titleKey: 'features.items.database.title', descKey: 'features.items.database.desc' },
        { icon: 'Users', titleKey: 'features.items.auth.title', descKey: 'features.items.auth.desc' },
        { icon: 'RefreshCw', titleKey: 'features.items.realtime.title', descKey: 'features.items.realtime.desc' },
        { icon: 'Cloud', titleKey: 'features.items.cloud.title', descKey: 'features.items.cloud.desc' },
        { icon: 'Code', titleKey: 'features.items.api.title', descKey: 'features.items.api.desc' },
        { icon: 'LayoutDashboard', titleKey: 'features.items.dashboard.title', descKey: 'features.items.dashboard.desc' },
      ]}
      process={[
        { icon: 'MessageSquare', titleKey: 'process.steps.consult.title', descKey: 'process.steps.consult.desc' },
        { icon: 'FileText', titleKey: 'process.steps.plan.title', descKey: 'process.steps.plan.desc' },
        { icon: 'Settings', titleKey: 'process.steps.develop.title', descKey: 'process.steps.develop.desc' },
        { icon: 'Rocket', titleKey: 'process.steps.launch.title', descKey: 'process.steps.launch.desc' },
      ]}
      relatedServices={[
        { key: 'website', href: '/services/website', icon: 'Globe' },
        { key: 'ai', href: '/services/ai', icon: 'Bot' },
        { key: 'seo', href: '/services/seo', icon: 'Search' },
      ]}
    />
  );
}
