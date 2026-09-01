import type { Metadata } from 'next'
import '../styles/globals.css'
export const metadata: Metadata = {
  title: 'Dutch Taxi Transfers - Fixed-Price Airport Taxi Amsterdam to Schiphol',
  description: 'Reliable, fixed-price airport taxi and transfer service in Amsterdam. Book your Schiphol transfer online. 24/7, no hidden fees, professional drivers.',
  keywords: 'taxi amsterdam, airport taxi, schiphol transfer, amsterdam transportation',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema markup for LocalBusiness and TaxiService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'TaxiService'],
              name: 'Dutch Taxi Transfers',
              description: 'Fixed-price airport taxi and transfer service in Amsterdam',
              url: 'https://dutchtaxitransfers.nl',
              telephone: '+31 20 308 6885',
              email: 'info@dutchtaxitransfers.nl',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Amsterdam',
                addressLocality: 'Amsterdam',
                addressRegion: 'North Holland',
                postalCode: '1012 XX',
                addressCountry: 'NL',
              },
              areaServed: ['Amsterdam', 'Schiphol', 'North Holland'],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '52.3676',
                longitude: '4.9041',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '347',
              },
              sameAs: ['https://www.google.com/maps/place/Dutch+Taxi+Transfers'],
            }),
          }}
        />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#003d82" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-white text-gray-900">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
