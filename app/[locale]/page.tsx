import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { PortfolioSection } from '@/components/sections/portfolio';
import { WhyUsSection } from '@/components/sections/why-us';
import { FAQSection } from '@/components/sections/faq';
import { CTASection } from '@/components/sections/cta';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection limit={6} />
      <WhyUsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
