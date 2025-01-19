import localFont from 'next/font/local';

import Footer from '~/components/footer';
import Header from '~/components/header';

import type { Metadata } from 'next';

import './globals.css';

import { BASE_URL } from '~/constants';

import GoogleAnalyticsScript from '~/components/google-analytics-script';
import MicrosoftClarity from '~/components/microsoft-clarity';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
const comicSansFont = localFont({
  src: './fonts/comic-sans-ms.ttf',
  variable: '--font-comic-sans',
  weight: '100 400 700  900',
});

export const metadata: Metadata = {
  title: 'TAC Design LAB',
  description:
    'Redefining architecture with eco-friendly buildings and sustainable designs. We craft innovative spaces inspired by tradition, culture, and a commitment to sustainability.',
  keywords: ['sustainability', 'design', 'architecture', 'interior'],
  openGraph: {
    title: 'TAC Design LAB',
    description:
      'Redefining architecture with eco-friendly buildings and sustainable designs. We craft innovative spaces inspired by tradition, culture, and a commitment to sustainability.',
    url: BASE_URL,
    siteName: 'TAC Design LAB',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/tac-hero-og.jpg`,
      },
    ],
  },
  twitter: {
    title: 'TAC Design LAB',
    card: 'summary_large_image',
    description:
      'Redefining architecture with eco-friendly buildings and sustainable designs. We craft innovative spaces inspired by tradition, culture, and a commitment to sustainability.',
    images: [
      {
        url: `${BASE_URL}/tac-hero-og.jpg`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comicSansFont.variable} grid h-screen min-h-screen max-w-full grid-rows-[auto_1fr] antialiased`}
      >
        <Header />
        <div className="">
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalyticsScript />
      <MicrosoftClarity />
    </html>
  );
}
