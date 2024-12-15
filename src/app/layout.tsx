// eslint-disable-next-line camelcase -- disabled because package is exported in this manner
import { Comic_Neue } from 'next/font/google';
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

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '700'],
  variable: '--font-comic-neue',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comicNeue.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
