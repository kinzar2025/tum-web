'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { blogPosts, getAllCategories, type BlogPost } from '@/lib/blog-data';
import { BlogCard } from './blog-card';

export function BlogGrid() {
  const t = useTranslations('blog');
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = getAllCategories();
  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {t('categories.all')}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {t(`categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} locale={locale} />
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            {t('noResults')}
          </div>
        )}
      </div>
    </section>
  );
}
