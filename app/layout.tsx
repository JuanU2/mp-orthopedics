import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'MUDr. Michal Prádel - Ortopedická ambulancia Námestovo',
  description: 'Ortopedická ambulancia v Námestove poskytuje profesionálnu ortopedickú starostlivosť pre dospelých a deti. Ordinačné hodiny, online rezervácia, kontakt. Červeného Kríža 62/30, Námestovo.',
  keywords: ['ortopéd Námestovo', 'ortopedická ambulancia', 'MUDr. Michal Prádel', 'ortopéd', 'detský ortopéd', 'online rezervácia', 'eCasenka', 'ortopedická starostlivosť', 'Námestovo', 'Orava'],
  authors: [{ name: 'MUDr. Michal Prádel' }],
  creator: 'MP-ORTHOPEDICS',
  publisher: 'MP-ORTHOPEDICS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.pradel.sk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MUDr. Michal Prádel - Ortopedická ambulancia Námestovo',
    description: 'Profesionálna ortopedická starostlivosť pre dospelých a deti v Námestove. Online rezervácia časenky cez eCasenka.',
    url: 'https://www.pradel.sk',
    siteName: 'MP-ORTHOPEDICS',
    locale: 'sk_SK',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MUDr. Michal Prádel - Ortopedická ambulancia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUDr. Michal Prádel - Ortopedická ambulancia Námestovo',
    description: 'Profesionálna ortopedická starostlivosť pre dospelých a deti v Námestove.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalOrganization',
              name: 'MP-ORTHOPEDICS - MUDr. Michal Prádel',
              description: 'Ortopedická ambulancia v Námestove',
              url: 'https://www.pradel.sk',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Červeného Kríža 62/30',
                addressLocality: 'Námestovo',
                postalCode: '02901',
                addressCountry: 'SK',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Monday',
                  opens: '06:30',
                  closes: '13:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Tuesday',
                  opens: '06:30',
                  closes: '13:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Wednesday',
                  opens: '06:30',
                  closes: '13:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Thursday',
                  opens: '06:30',
                  closes: '13:30',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Friday',
                  opens: '07:00',
                  closes: '14:00',
                },
              ],
              medicalSpecialty: 'Orthopedics',
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
