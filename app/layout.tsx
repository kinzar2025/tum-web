import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TUM-WEB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
