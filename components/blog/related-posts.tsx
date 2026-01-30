'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import type { BlogPost } from '@/lib/blog-data';
import { BlogCard } from './blog-card';

type RelatedPostsProps = {
  posts: BlogPost[];
  locale: string;
};

export function RelatedPosts({ posts, locale }: RelatedPostsProps) {
  const t = useTranslations('blog');

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border bg-muted/30 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold">{t('relatedPosts')}</h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogCard post={post} locale={locale} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
