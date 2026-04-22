import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

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
    default: 'Farm Eden — Ferme avec piscine privée à 45 min de Rabat',
    template: '%s — Farm Eden',
  },
  description:
    "Ferme avec piscine privée à louer près de Rabat. Villa entière privatisée, 4 chambres, 12 personnes. Séjours, séminaires, événements. À 45 min de Rabat.",
  openGraph: {
    siteName: 'Farm Eden',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Farm Eden — Ferme avec piscine privée près de Rabat' }],
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
        "Ferme avec piscine privée à louer près de Rabat. Villa entière privatisée, 4 chambres, 12 personnes. Séjours famille, séminaires, anniversaires.",
      url: 'https://farmeden.ma',
      telephone: '+212600000000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ain Johra',
        addressRegion: 'Tifelt',
        addressCountry: 'MA',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.8944,
        longitude: -6.3064,
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
      sameAs: [],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://farmeden.ma/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Qu'est-ce qu'on loue exactement ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Vous louez toute la ferme — la villa avec ses 4 chambres, la piscine, le jardin et tous les espaces. Il n'y a aucun autre client pendant votre séjour.",
          },
        },
        {
          '@type': 'Question',
          name: "C'est loin de Rabat ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Non, environ 45 minutes. La ferme est à Ain Johra, près de Tifelt, dans la région Rabat-Salé-Kénitra.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de personnes peut-on être ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Jusqu'à 12 personnes confortablement, entre les chambres et les espaces supplémentaires.",
          },
        },
        {
          '@type': 'Question',
          name: "Est-ce qu'on peut manger sur place ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. L'équipe propose la cuisine marocaine traditionnelle (tagine, couscous, méchoui), le petit-déjeuner, et le service de ménage — en option.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment réserver ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Tout se fait sur WhatsApp. Envoyez vos dates et votre nombre de personnes — on vous répond rapidement avec les disponibilités et le tarif.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on organiser un mariage ou une grande fête ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, la ferme se privatise pour tous les événements. Contactez-nous pour en discuter.",
          },
        },
      ],
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
