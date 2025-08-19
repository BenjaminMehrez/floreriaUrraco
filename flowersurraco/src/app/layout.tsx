import type { Metadata } from "next";
import { Lora } from 'next/font/google'
import "./globals.css";

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'Florería Madison | Ramos y Flores a Domicilio en Mendoza',
    template: '%s - Florería Madison | Ramos y Flores a Domicilio en Mendoza'
  },
  description:
    'En Florería Madison ofrecemos ramos personalizados y flores frescas con entrega a domicilio en Mendoza. Ideal para cumpleaños, aniversarios y ocasiones especiales.',
  keywords: [
    'floreria Mendoza',
    'flores a domicilio Mendoza',
    'ramos de flores',
    'regalar flores',
    'florería en Godoy Cruz',
    'ramos personalizados',
    'flores mendoza'
  ],
  robots: 'index, follow',
  metadataBase: new URL(process.env.URL || 'https://www.floreriamadison.com.ar'),
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'Florería Madison | Envío de Flores en Mendoza',
    description:
      'Regalá flores frescas con entrega el mismo día en Mendoza. Ramos únicos, hechos con amor.',
    url: process.env.URL || 'https://www.floreriamadison.com.ar',
    siteName: 'Floreria Madison',
    images: [
      {
        url: 'https://floreriamadison.com.ar/bannerimg.avif',
        width: 1200,
        height: 630,
        alt: 'Ramo de flores',
        type: 'image/avif',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Florería Madison | Ramos a Domicilio en Mendoza',
    description:
      'Ramos de flores frescas y personalizados. Envío rápido en Mendoza.',
    images: ['https://floreriamadison.com.ar/bannerimg.avif'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://floreriamadison.com.ar',
    languages: {
      'es-AR': 'https://floreriamadison.com.ar',
    },
  },
  other: {
    'theme-color': '#ffffff',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Florist',
              name: 'Florería Madison',
              image: 'https://floreriamadison.com.ar/favicon.ico',
              url: 'https://floreriamadison.com.ar',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Pascual Segura 1898',
                addressLocality: 'Mendoza',
                postalCode: '5501',
                addressCountry: 'AR',
              },
              telephone: '+54 9 261 123-4567',
              openingHours: 'Mo-Sa 09:00-18:00',
              priceRange: '$$',
              sameAs: [
                'https://www.instagram.com/floreriamadison',
                'https://www.facebook.com/floreriamadison',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${lora.className}`}
      >
        {children}
      </body>
    </html>
  );
}
