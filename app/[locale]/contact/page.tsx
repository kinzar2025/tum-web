import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Sparkles, MessageCircle, Mail, Phone, Facebook, MapPin, Clock } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: '/contact',
      languages: {
        th: '/th/contact',
        en: '/en/contact',
      },
    },
  };
}

const contactMethods = [
  {
    key: 'line',
    icon: MessageCircle,
    href: 'https://lin.ee/EE6XyPL',
    color: 'from-[#00B900] to-[#00A000]',
    isExternal: true,
  },
  {
    key: 'email',
    icon: Mail,
    href: 'mailto:contact@tum-web.com',
    color: 'from-blue-500 to-cyan-500',
    isExternal: true,
  },
  {
    key: 'phone',
    icon: Phone,
    href: 'tel:0812345678',
    color: 'from-purple-500 to-pink-500',
    isExternal: true,
  },
  {
    key: 'facebook',
    icon: Facebook,
    href: 'https://facebook.com/tumweb',
    color: 'from-blue-600 to-blue-500',
    isExternal: true,
  },
];

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <Sparkles className="h-4 w-4 text-brand-purple" />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title.line1')}
              <br />
              <span className="gradient-text">{t('hero.title.line2')}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.key}
                  href={method.href}
                  target={method.isExternal ? '_blank' : undefined}
                  rel={method.isExternal ? 'noopener noreferrer' : undefined}
                  className="group relative overflow-hidden rounded-2xl bg-secondary/50 border border-border p-6 text-center hover:border-primary/50 transition-colors"
                >
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-1">{t(`info.${method.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`info.${method.key}.value`)}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-border p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('hours.title')}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('hours.weekdays')}</span>
                    <span className="font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('hours.weekend')}</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <p className="text-sm text-brand-purple pt-2">
                    {t('hours.note')}
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-border p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('location.title')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('location.address')}
                </p>
                <p className="text-sm text-brand-cyan">
                  {t('location.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-card">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 md:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t('cta.subtitle')}
              </p>
              <a
                href="https://lin.ee/EE6XyPL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#00B900] px-8 py-4 font-medium text-white hover:bg-[#00A000] transition-colors shadow-lg shadow-[#00B900]/30"
              >
                <MessageCircle className="h-5 w-5" />
                {t('cta.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
