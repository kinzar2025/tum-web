'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqKeys = ['q1', 'q2', 'q3', 'q4'];

export function FAQSection() {
  const t = useTranslations('faq');
  const tItems = useTranslations('faq.items');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="mt-4 text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto mt-12 max-w-3xl">
          {faqKeys.map((key, i) => (
            <div key={key} className={`border-b border-border ${i === 0 ? 'border-t' : ''}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between py-4 text-left">
                <span className="font-medium pr-4">{tItems(`${key}.question`)}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pb-4 text-muted-foreground">{tItems(`${key}.answer`)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
