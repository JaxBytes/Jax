import { Header } from '@/components/layout/header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/siteconfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  alternates: {
    canonical: siteConfig.site.url,
    types: {
      'application/rss+xml': [{ url: 'feed.xml', title: 'RSS' }],
    },
  },
  icons: {
    icon: [{ url: siteConfig.icons.icon }],
    apple: [{ url: siteConfig.icons.apple }],
    shortcut: [{ url: siteConfig.icons.shortcut }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
