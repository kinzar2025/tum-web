import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date, locale: string = 'th') {
  return new Date(date).toLocaleDateString(locale === 'th' ? 'th-TH' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateSlug(text: string): string {
  return text.toLowerCase().trim().replace(/[^\w\sก-๙]/g, '').replace(/\s+/g, '-');
}
