import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Nth Senze — Where Brands Discover Their Next Dimension',
  description:
    'Luxury creative and brand psychology agency helping ambitious brands become unforgettable through strategy, creativity, and tastefully controlled chaos.',
  keywords: [
    'Branding Agency',
    'Brand Strategy',
    'Creative Production',
    'Brand Psychology',
    'Digital Marketing',
    'The Nth Senze',
  ],
  authors: [{ name: 'The Nth Senze' }],
  metadataBase: new URL('https://thenthsenze.com'),
  openGraph: {
    title: 'The Nth Senze — Where Brands Discover Their Next Dimension',
    description:
      'We help ambitious brands scale beyond the noise and become permanently unforgettable.',
    url: 'https://thenthsenze.com',
    siteName: 'The Nth Senze',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
