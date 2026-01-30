import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from 'sonner';
import { locales, type Locale } from '@/i18n';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles = {
    th: 'TUM-WEB | รับทำเว็บไซต์ แอพพลิเคชัน AI Solutions ครบวงจร',
    en: 'TUM-WEB | Web Development, Apps & AI Solutions',
  };
  const descriptions = {
    th: 'รับทำเว็บไซต์ Web Application Mobile App AI Chatbot ยิงโฆษณา SEO ครบวงจร',
    en: 'Full-service digital agency for websites, apps, AI chatbots, and SEO.',
  };

  return {
    title: { default: titles[locale], template: '%s | TUM-WEB' },
    description: descriptions[locale],
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tum-web.com'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider messages={messages}>
            {/* Skip to main content link for keyboard navigation */}
            <a href="#main-content" className="skip-link">
              {locale === 'th' ? 'ข้ามไปยังเนื้อหาหลัก' : 'Skip to main content'}
            </a>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-1 pb-16 md:pb-0" tabIndex={-1}>{children}</main>
              <Footer />
            </div>
            <MobileNav />
            <Toaster richColors position="top-right" />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
