import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChromeGate } from '@/components/ChromeGate';
import { FAQ, SITE } from '@/lib/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const classico = localFont({
  src: [
    { path: '../public/fonts/urw-classico/URWClassico-Regular.woff2',    weight: '400', style: 'normal' },
    { path: '../public/fonts/urw-classico/URWClassico-Italic.woff2',     weight: '400', style: 'italic' },
    { path: '../public/fonts/urw-classico/URWClassico-Bold.woff2',       weight: '700', style: 'normal' },
    { path: '../public/fonts/urw-classico/URWClassico-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-classico',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://farmeden.ma'),
  title: {
    default: 'Farm Eden - Ferme avec piscine privée près de Rabat',
    template: 'Farm Eden - %s',
  },
  description:
    "Louer une ferme avec piscine privée près de Rabat, à la campagne. Villa entière privatisée pour vos séjours, événements et séminaires, à 45 minutes de Rabat.",
  openGraph: {
    siteName: 'Farm Eden',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Farm Eden, ferme avec piscine privée près de Rabat' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LodgingBusiness',
      '@id': 'https://farmeden.ma/#lodging',
      name: 'Farm Eden',
      description:
        "Ferme avec piscine privée à louer près de Rabat. Villa entière privatisée pour vos séjours, séminaires, anniversaires et événements à la campagne.",
      url: 'https://farmeden.ma',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ain Johra, Tiflet',
        addressRegion: 'Rabat-Salé-Kénitra',
        addressCountry: 'MA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.9603,
        longitude: -6.3572,
      },
      amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Piscine privée',         value: true },
        { '@type': 'LocationFeatureSpecification', name: 'WiFi',                   value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Cuisine équipée',        value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Parking privé',          value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Espace animaux',         value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Terrain de 1,5 hectare', value: true },
      ],
      numberOfRooms: 4,
      occupancy: { '@type': 'QuantitativeValue', maxValue: 12 },
      checkinTime: '14:00',
      checkoutTime: '12:00',
      priceRange: '$$',
      image: 'https://farmeden.ma/images/og-default.jpg',
      sameAs: [SITE.google, SITE.airbnb, SITE.instagram].filter(Boolean),
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://farmeden.ma/#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${classico.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ChromeGate nav={<Navbar />} footer={<Footer />}>
          {children}
        </ChromeGate>
      </body>
    </html>
  );
}
