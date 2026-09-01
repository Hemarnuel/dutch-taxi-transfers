import type { Metadata } from 'next'
import Link from 'next/link'
import CTAFooter from '@/components/CTAFooter'

export const metadata: Metadata = {
  title: 'Day Trip Transfer Service Amsterdam | Sightseeing & Flexible Transport',
  description: 'Multi-stop transfer service for Amsterdam day trips and sightseeing. Flexible hours, professional guidance, and convenient booking.',
  keywords: 'day trip transfer amsterdam, sightseeing taxi, amsterdam tour transport',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/day-trip-transfer',
  },
}

export default function DayTripTransfer() {
  return (
    <main className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Day Trip Transfer</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Amsterdam Day Trip & Sightseeing Transport
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Multi-stop transfer service for Amsterdam sightseeing and day trips. Flexible hours, comfortable vehicles, and professional drivers who know the city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-block bg-secondary hover:bg-orange-600 text-primary font-bold py-3 px-6 rounded-lg transition text-center"
              >
                Book Day Trip Transfer
              </Link>
              <Link
                href="/quote"
                className="inline-block bg-white hover:bg-blue-50 text-primary font-bold py-3 px-6 rounded-lg transition text-center"
              >
                Request Custom Itinerary
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Explore Amsterdam at Your Own Pace
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Whether you&apos;re interested in museums, canal tours, or picturesque villages, our day trip transfer service makes it easy to explore without the hassle of public transport.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Popular Routes */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Popular Day Trip Routes
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Amsterdam City Tour</p>
                      <p className="text-sm text-gray-600">Canals, museums, Anne Frank House, Van Gogh Museum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Volendam & Marken</p>
                      <p className="text-sm text-gray-600">Traditional fishing villages with authentic charm</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Windmills at Zaanse Schans</p>
                      <p className="text-sm text-gray-600">Historic windmills and traditional Dutch crafts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900">Tulip Fields & Keukenhof</p>
                      <p className="text-sm text-gray-600">Seasonal (Spring) beautiful tulip landscapes</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Why Choose Our Service
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Flexible Scheduling</p>
                      <p className="text-sm text-gray-600">Stay as long as you like at each stop</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Knowledgeable Drivers</p>
                      <p className="text-sm text-gray-600">Local experts with sightseeing recommendations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">No Stress Driving</p>
                      <p className="text-sm text-gray-600">Relax while we handle navigation and parking</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Custom Itineraries</p>
                      <p className="text-sm text-gray-600">Design your own day trip route</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-blue-50 rounded-lg p-8 border-2 border-primary mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Flexible Hourly Pricing
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Half Day (4 hours)</p>
                  <p className="text-2xl font-bold text-primary">€280–€350</p>
                  <p className="text-sm text-gray-600">Perfect for nearby attractions</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="font-semibold text-gray-900 mb-2">Full Day (8 hours)</p>
                  <p className="text-2xl font-bold text-primary">€520–€620</p>
                  <p className="text-sm text-gray-600">Comprehensive sightseeing</p>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="font-semibold text-gray-900 mb-2">Custom Hours</p>
                  <p className="text-2xl font-bold text-primary">€85–€95/hr</p>
                  <p className="text-sm text-gray-600">Design your own itinerary</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/booking"
                className="inline-block bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition mb-4"
              >
                Reserve Your Day Trip Now
              </Link>
              <p className="text-gray-600">
                Or call <strong className="text-primary">+31 20 308 6885</strong> to discuss your custom itinerary
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Day Trip Transfer Service Amsterdam',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31 20 308 6885',
            },
            areaServed: ['Amsterdam', 'North Holland'],
            description: 'Multi-stop transfer service for Amsterdam sightseeing and day trips',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              url: 'https://dutchtaxitransfers.nl/day-trip-transfer',
            },
          }),
        }}
      />
    </main>
  )
}
