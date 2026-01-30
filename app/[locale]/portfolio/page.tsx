import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ExternalLink, Globe, Smartphone, Bot, Laptop } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'portfolio' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: '/portfolio',
      languages: {
        th: '/th/portfolio',
        en: '/en/portfolio',
      },
    },
  };
}

const projects = [
  {
    id: 'kinzar',
    name: 'Kinzar',
    type: 'website',
    image: '/images/portfolio/kinzar.jpg',
    tags: ['E-commerce', 'Next.js', 'Tailwind'],
    url: 'https://kinzar.com',
  },
  {
    id: 'bird-blocked',
    name: 'Bird Blocked',
    type: 'app',
    image: '/images/portfolio/bird-blocked.jpg',
    tags: ['Mobile Game', 'Unity', 'iOS/Android'],
    url: '#',
  },
  {
    id: 'art-and-gun',
    name: 'Art and Gun Game',
    type: 'app',
    image: '/images/portfolio/art-and-gun.jpg',
    tags: ['Mobile Game', 'Unity', 'Casual'],
    url: '#',
  },
  {
    id: 'dc-bigsize',
    name: 'DC Bigsize',
    type: 'website',
    image: '/images/portfolio/dc-bigsize.jpg',
    tags: ['E-commerce', 'WordPress', 'WooCommerce'],
    url: 'https://dcbigsize.com',
  },
  {
    id: 't62-residence',
    name: 'T62 Residence',
    type: 'website',
    image: '/images/portfolio/t62-residence.jpg',
    tags: ['Corporate', 'Next.js', 'Property'],
    url: '#',
  },
  {
    id: 'iplus-studio',
    name: 'iPlus Studio',
    type: 'webapp',
    image: '/images/portfolio/iplus-studio.jpg',
    tags: ['Web App', 'React', 'Dashboard'],
    url: '#',
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  website: Globe,
  webapp: Laptop,
  app: Smartphone,
  ai: Bot,
};

const categoryColors: Record<string, string> = {
  website: 'from-purple-500 to-blue-500',
  webapp: 'from-blue-500 to-cyan-500',
  app: 'from-cyan-500 to-teal-500',
  ai: 'from-purple-500 to-pink-500',
};

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('portfolio');

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

      {/* Portfolio Grid */}
      <section className="section bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const Icon = categoryIcons[project.type] || Globe;
              const color = categoryColors[project.type] || 'from-purple-500 to-blue-500';

              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl bg-secondary/50 border border-border"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-secondary to-background">
                    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-16 w-16 text-muted-foreground/30" />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {project.url !== '#' && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('viewProject')}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="font-bold text-lg">{project.name}</h3>
                        <p className="text-sm text-muted-foreground capitalize">
                          {t(`categories.${project.type}`)}
                        </p>
                      </div>
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${color}`}>
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
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
