import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Sparkles, Target, Eye, Users, Award, Clock, ThumbsUp, Zap } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: '/about',
      languages: {
        th: '/th/about',
        en: '/en/about',
      },
    },
  };
}

const stats = [
  { key: 'projects', value: '50+', icon: Award },
  { key: 'experience', value: '5+', icon: Clock },
  { key: 'satisfaction', value: '100%', icon: ThumbsUp },
  { key: 'support', value: '24/7', icon: Zap },
];

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

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

      {/* Story Section */}
      <section className="section bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('story.title')}</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('story.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-border p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('mission.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('mission.content')}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-border p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('vision.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('vision.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('stats.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('stats.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.key}
                  className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t(`stats.items.${stat.key}`)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('team.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-secondary/50 border border-border p-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-brand flex items-center justify-center mb-6">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('team.founder.name')}</h3>
              <p className="text-brand-purple font-medium mb-4">{t('team.founder.role')}</p>
              <p className="text-muted-foreground text-sm">
                {t('team.founder.bio')}
              </p>
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
                className="inline-flex items-center gap-2 rounded-lg bg-[#00B900] px-8 py-4 font-medium text-white hover:bg-[#00A000] transition-colors"
              >
                {t('cta.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
