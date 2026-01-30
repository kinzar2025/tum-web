'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight, ArrowLeft, MessageCircle } from 'lucide-react';
import type { BlogPost } from '@/lib/blog-data';

type BlogArticleProps = {
  post: BlogPost;
  locale: string;
};

export function BlogArticle({ post, locale }: BlogArticleProps) {
  const t = useTranslations('blog');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href={`/${locale}`} className="hover:text-primary">
              {locale === 'th' ? 'หน้าแรก' : 'Home'}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/${locale}/blog`} className="hover:text-primary">
              {t('title')}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="line-clamp-1 text-foreground">{post.title}</span>
          </motion.nav>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6"
          >
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              {t('backToBlog')}
            </Link>
          </motion.div>

          {/* Category */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t(`categories.${post.category}`)}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 flex flex-wrap items-center gap-4 text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readingTime} {t('readingTime')}
            </span>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5"
          >
            <div className="aspect-[16/9] flex items-center justify-center">
              <span className="text-8xl opacity-50">
                {post.category === 'website' && '🌐'}
                {post.category === 'seo' && '🔍'}
                {post.category === 'marketing' && '📢'}
                {post.category === 'ai' && '🤖'}
                {post.category === 'business' && '💼'}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:marker:text-primary prose-table:text-sm prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border prose-hr:my-8"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />

          {/* Author Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-2xl">
                👨‍💻
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold">{post.author}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {locale === 'th'
                    ? 'ทีมงานผู้เชี่ยวชาญด้านเว็บไซต์และการตลาดดิจิทัล'
                    : 'Expert team in website development and digital marketing'}
                </p>
                <a
                  href="https://lin.ee/EE6XyPL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00B900] px-4 py-2 text-sm font-medium text-white hover:bg-[#00A000]"
                >
                  <MessageCircle className="h-4 w-4" />
                  {locale === 'th' ? 'ติดต่อทาง LINE' : 'Contact via LINE'}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Code blocks
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  html = html.replace(/`(.*?)`/g, '<code>$1</code>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Horizontal rule
  html = html.replace(/^---$/gm, '<hr />');

  // Tables
  html = html.replace(/^\|(.*)\|$/gm, (match, content) => {
    const cells = content.split('|').map((cell: string) => cell.trim());
    const isHeader = cells.some((cell: string) => cell.match(/^-+$/));
    if (isHeader) return '';
    const cellTag = 'td';
    const cellsHtml = cells.map((cell: string) => `<${cellTag}>${cell}</${cellTag}>`).join('');
    return `<tr>${cellsHtml}</tr>`;
  });
  html = html.replace(/(<tr>.*<\/tr>\s*)+/g, (match) => `<table><tbody>${match}</tbody></table>`);

  // Unordered lists
  html = html.replace(/^\s*-\s+(.*$)/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\s*)+/g, (match) => `<ul>${match}</ul>`);

  // Ordered lists
  html = html.replace(/^\d+\.\s+(.*$)/gm, '<li>$1</li>');

  // Paragraphs
  html = html.replace(/^(?!<[h|u|o|l|t|p|c|a|s])(.*[^>])$/gm, '<p>$1</p>');
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>\s*<\/p>/g, '');

  // Clean up
  html = html.replace(/\n{2,}/g, '\n');

  return html;
}
