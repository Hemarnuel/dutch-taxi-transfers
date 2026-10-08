import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Dutch Taxi Transfers - Amsterdam Taxi & Airport Transfers',
  description: 'Your trusted transfer service for Schiphol, Amsterdam and beyond. Book your ride and travel with confidence.',
  keywords: 'taxi Amsterdam, Schiphol airport transfer, Amsterdam airport taxi, private transfers, airport shuttle',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl',
  },
  openGraph: {
    title: 'Dutch Taxi Transfers - Amsterdam Taxi & Airport Transfers',
    description: 'Your trusted transfer service for Schiphol, Amsterdam and beyond.',
    type: 'website',
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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg)] text-[var(--ink)] antialiased min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--border)]">
          <div className="container">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex items-center gap-2 text-[var(--primary)] font-bold text-xl" aria-label="Dutch Taxi Transfers Home">
                <svg className="w-8 h-8 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v3m0 12v3M3 12h3m12 0h3M4.2 4.2l2.1 2.1m11.4 11.4l2.1 2.1M3 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
                  <path d="M12 8v8M16 12H8" strokeWidth={2} strokeLinecap="round" />
                </svg>
                <span>Dutch <span className="text-[var(--accent)]">Taxi</span> Transfers</span>
              </a>

              <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                <a href="/" className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition">Home</a>
                
                <div className="relative group">
                  <button className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition flex items-center gap-1">
                    Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="/schiphol-airport-taxi" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)] first:rounded-t-lg">Schiphol Airport Transfers</a>
                    <a href="/amsterdam-transport-booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)]">City Rides & Transfers</a>
                    <a href="/day-trip-transfer" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)]">Day Trips & Excursions</a>
                    <a href="/family-transfer-service" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)] last:rounded-b-lg">Family & Group Transport</a>
                  </div>
                </div>

                <div className="relative group">
                  <button className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition flex items-center gap-1">
                    Destinations
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="/schiphol-airport-taxi" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)] first:rounded-t-lg">Schiphol Airport</a>
                    <a href="/amsterdam-transport-booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)]">Amsterdam City Centre</a>
                    <a href="/amsterdam-transport-booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)]">Amstelveen</a>
                    <a href="/amsterdam-transport-booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)]">Haarlem</a>
                    <a href="/amsterdam-transport-booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)] last:rounded-b-lg">The Hague</a>
                  </div>
                </div>

                <div className="relative group">
                  <button className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition flex items-center gap-1">
                    Pricing
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[var(--border)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <a href="/booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)] first:rounded-t-lg">Get a Quote</a>
                    <a href="/booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)]">Fixed Prices</a>
                    <a href="/booking" className="block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--surface)] last:rounded-b-lg">Hourly Rates</a>
                  </div>
                </div>

                <a href="/about" className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition">About Us</a>
                <a href="/blog" className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition">Blog</a>
                <a href="/contact" className="px-4 py-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--primary)] transition">Contact</a>
              </nav>

              <div className="flex items-center gap-4">
                <div className="hidden lg:flex flex-col items-end">
                  <a href="tel:+31203086885" className="text-[var(--primary)] font-bold text-lg">+31 020 308 6885</a>
                  <span className="text-xs text-[var(--ink-secondary)]">24/7 Customer Support</span>
                </div>
                <a
                  href="/booking"
                  className="bg-[var(--accent)] text-[var(--ink)] font-bold px-6 py-3 rounded-lg hover:bg-orange-500 transition whitespace-nowrap"
                >
                  Book Your Ride
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="flex flex-col min-h-screen flex-1">
          {children}
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TaxiService',
              name: 'Dutch Taxi Transfers',
              description: 'Your trusted transfer service for Schiphol, Amsterdam and beyond. Book your ride and travel with confidence.',
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
              areaServed: ['Amsterdam', 'Schiphol Airport', 'Amstelveen', 'Haarlem', 'The Hague'],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '52.3382',
                longitude: '4.8732',
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
                ratingCount: '500',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}