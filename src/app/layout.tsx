// eslint-disable-next-line camelcase -- disabled because package is exported in this manner
// import { Comic_Neue } from 'next/font/google';
import localFont from 'next/font/local';

import Footer from '~/components/footer';
import Header from '~/components/header';

import type { Metadata } from 'next';

import './globals.css';

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
  description: 'Where Every Space Is A Step Towards Sustainability',
  keywords: ['sustainability', 'design', 'architecture', 'interior'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comicSansFont.variable} grid h-screen min-h-screen grid-rows-[auto_1fr] antialiased`}
      >
        <Header />
        <div className="">
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
