import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BlogHero } from '@/components/blog/blog-hero';
import { BlogGrid } from '@/components/blog/blog-grid';
import { CTASection } from '@/components/sections/cta';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog.meta' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        th: '/th/blog',
        en: '/en/blog',
      },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <BlogHero />
      <BlogGrid />
      <CTASection />
    </>
  );
}
