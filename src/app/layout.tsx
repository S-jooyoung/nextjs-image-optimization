import { Metadata } from 'next';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { Footer, Header } from '@/components/common';

import { siteConfig } from '@/constant/config';

// !STARTERCONF Change these default meta
// !STARTERCONF Look at @/constant/config to change them
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/ogImage.png`],
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/ogImage.png`],
    creator: '@joy',
  },
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <Header
            mainTitle={siteConfig.author}
            subTitle={siteConfig.header.title}
            firstLinkSrc={siteConfig.github.src}
            firstLinkText={siteConfig.github.title}
            secondLinkSrc={siteConfig.blog.src}
            secondLinkText={siteConfig.blog.title}
          />
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            {children}
          </div>
          <Footer
            author={siteConfig.author}
            githubUrl={siteConfig.github.src}
          />
        </main>
      </body>
    </html>
  );
}
