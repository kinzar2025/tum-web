'use client';

import Script from 'next/script';

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TUM-WEB',
    alternateName: 'ทำเว็บ',
    url: 'https://tum-web.com',
    logo: 'https://tum-web.com/logo.png',
    description:
      'บริการรับทำเว็บไซต์ Web Application Mobile App AI Chatbot ยิงโฆษณา SEO และสร้างช่องทางออนไลน์ครบวงจร',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'TUM-WEB Team',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TH',
      addressLocality: 'Bangkok',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '',
        contactType: 'customer service',
        availableLanguage: ['Thai', 'English'],
        url: 'https://lin.ee/EE6XyPL',
      },
    ],
    sameAs: [
      'https://facebook.com/tumweb.co',
      'https://instagram.com/tumweb.co',
      'https://lin.ee/EE6XyPL',
    ],
    knowsAbout: [
      'Web Development',
      'Web Design',
      'Mobile App Development',
      'AI Chatbot',
      'SEO',
      'Digital Marketing',
      'Facebook Ads',
      'Google Ads',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'รับทำเว็บไซต์ทุกรูปแบบ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application',
            description: 'พัฒนา Web Application ระบบจัดการ',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbot',
            description: 'AI Chatbot ตอบลูกค้าอัตโนมัติ 24 ชั่วโมง',
          },
        },
      ],
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TUM-WEB',
    alternateName: 'ทำเว็บ',
    url: 'https://tum-web.com',
    description:
      'บริการรับทำเว็บไซต์ Web Application Mobile App AI Chatbot ยิงโฆษณา SEO และสร้างช่องทางออนไลน์ครบวงจร',
    publisher: {
      '@type': 'Organization',
      name: 'TUM-WEB',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://tum-web.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['th-TH', 'en-US'],
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service Schema
interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `https://tum-web.com${url}`,
    image: image || 'https://tum-web.com/og-image.jpg',
    provider: {
      '@type': 'Organization',
      name: 'TUM-WEB',
      url: 'https://tum-web.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Thailand',
    },
    serviceType: 'Digital Services',
  };

  return (
    <Script
      id={`service-schema-${url}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema
interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = 'TUM-WEB',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://tum-web.com${url}`,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://tum-web.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TUM-WEB',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tum-web.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tum-web.com${url}`,
    },
  };

  return (
    <Script
      id={`article-schema-${url}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// BreadcrumbList Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://tum-web.com${item.url}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
