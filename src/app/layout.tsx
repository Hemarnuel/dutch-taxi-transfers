import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Dutch Taxi Transfers - Executive Chauffeur Service Amsterdam',
  description: 'Executive chauffeur service for business travelers in Amsterdam. Schiphol transfers, corporate roadshows, event transport — discreet, reliable, on time.',
  keywords: 'chauffeur Amsterdam, executive taxi, business transport Schiphol, corporate car service Netherlands',
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
      <head />
      <body className="bg-off-white text-charcoal antialiased max-w-none">
        <div className="flex min-h-screen flex-col bg-off-white text-charcoal">
          <header className="sticky top-0 z-40 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <a href="/" className="text-2xl font-bold text-primary" aria-label="Dutch Taxi Transfers Home">
                  Dutch Taxi Transfers
                </a>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/" className="text-sm font-medium text-charcoal hover:text-primary transition">
                  Home
                </a>
                <a href="/schiphol-airport-transfers" className="text-sm font-medium text-charcoal hover:text-primary transition">
                  Airport Transfers
                </a>
                <a href="/corporate-roadshows" className="text-sm font-medium text-charcoal hover:text-primary transition">
                  Roadshows
                </a>
                <a href="/event-transport" className="text-sm font-medium text-charcoal hover:text-primary transition">
                  Events
                </a>
                <a href="/fleet" className="text-sm font-medium text-charcoal hover:text-primary transition">
                  Fleet
                </a>
              </nav>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+31203086885"
                  className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-secondary text-primary hover:bg-orange-600 px-4 py-2"
                >
                  +31 20 308 6885
                </a>
                <a
                  href="/booking"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-white hover:bg-blue-700 px-4 py-2"
                >
                  Book Now
                </a>
              </div>
            </div>
          </header>
          <main className="flex flex-1">
            {children}
          </main>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Dutch Taxi Transfers',
              description: 'Executive chauffeur service for business travelers in Amsterdam. Offers Schiphol transfers, corporate roadshows, and event transport with discreet, reliable service.',
              url: 'https://dutchtaxitransfers.nl',
              telephone: '+31-20-308-6885',
              email: 'bookings@dutchtaxitransfers.nl',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Gustav Mahlerlaan 1212, 1081 LA',
                addressLocality: 'Amsterdam',
                addressRegion: 'North Holland',
                postalCode: '1081 LA',
                addressCountry: 'NL',
              },
              areaServed: ['Amsterdam', 'Schiphol Airport', 'Zuidas', 'RAI', 'Haarlem', 'The Hague'],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '52.3382',
                longitude: '4.8732',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '00:00',
                  closes: '23:59',
                },
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '847',
              },
              sameAs: [
                'https://www.linkedin.com/company/dutch-taxi-transfers',
                'https://www.google.com/maps/place/Dutch+Taxi+Transfers',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}