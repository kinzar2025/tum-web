'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const portfolioItems = [
  { id: 1, title: 'Kinzar', description: { th: 'เว็บแอพฐานข้อมูลเกม', en: 'Gaming database web app' }, url: 'https://kinzar.com', tags: ['Next.js', 'Supabase'] },
  { id: 2, title: 'Bird Blocked', description: { th: 'E-commerce ตาข่ายกันนก', en: 'Bird netting e-commerce' }, url: 'https://birdblocked.com', tags: ['Next.js', 'E-commerce'] },
  { id: 3, title: 'Art and Gun Game', description: { th: 'E-commerce อุปกรณ์เกมมิ่ง', en: 'Gaming gear e-commerce' }, url: 'https://artandgungame.com', tags: ['Next.js'] },
  { id: 4, title: 'iPlus Studio', description: { th: 'ร้านขาย IT', en: 'IT store' }, url: 'https://iplus-studio.net', tags: ['WordPress', 'WooCommerce'] },
  { id: 5, title: 'T62 Residence', description: { th: 'เว็บไซต์โรงแรม', en: 'Hotel website' }, url: 'https://t62residence.com', tags: ['WordPress'] },
  { id: 6, title: 'DC Bigsize', description: { th: 'ร้านเสื้อผ้าไซส์ใหญ่', en: 'Plus-size clothing' }, url: 'https://dcbigsize.com', tags: ['WordPress', 'WooCommerce'] },
];

export function PortfolioSection({ limit }: { limit?: number }) {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  const items = limit ? portfolioItems.slice(0, limit) : portfolioItems;

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="group card-hover overflow-hidden">
                <div className="relative aspect-video rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground/50">{item.title}</span>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      {t('viewProject')} <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description[locale as 'th' | 'en']}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link href={`/${locale}/portfolio`} className="btn-outline">{t('viewAll')} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
