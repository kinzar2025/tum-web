'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-data';

type BlogCardProps = {
  post: BlogPost;
  locale: string;
};

export function BlogCard({ post, locale }: BlogCardProps) {
  const t = useTranslations('blog');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl sm:text-6xl opacity-30">
            {post.category === 'website' && '🌐'}
            {post.category === 'seo' && '🔍'}
            {post.category === 'marketing' && '📢'}
            {post.category === 'ai' && '🤖'}
            {post.category === 'business' && '💼'}
          </span>
        </div>
        {/* Category Badge */}
        <div className="absolute left-2 top-2 sm:left-4 sm:top-4">
          <span className="rounded-full bg-primary px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium text-primary-foreground">
            {t(`categories.${post.category}`)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-6">
        {/* Meta - Hidden on mobile */}
        <div className="mb-2 sm:mb-3 hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.readingTime} {t('readingTime')}
          </span>
        </div>

        {/* Mobile meta - simplified */}
        <div className="mb-2 flex sm:hidden items-center gap-2 text-[10px] text-muted-foreground">
          <span>{post.readingTime} {t('readingTime')}</span>
        </div>

        {/* Title */}
        <h3 className="mb-2 sm:mb-3 line-clamp-2 text-sm sm:text-xl font-semibold group-hover:text-primary leading-tight">
          {post.title}
        </h3>

        {/* Excerpt - Hidden on mobile */}
        <p className="mb-4 line-clamp-2 flex-1 text-muted-foreground hidden sm:block">
          {post.excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-base font-medium text-primary mt-auto">
          {t('readMore')}
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
