import type { Metadata } from 'next'
import Link from 'next/link'
import CTAFooter from '@/components/CTAFooter'
import ServiceShowcase from '@/components/ServiceShowcase'

export const metadata: Metadata = {
  title: 'Amsterdam City Taxi Service | Professional Urban Transport',
  description: 'Professional city taxi and transportation service in Amsterdam. Quick, reliable, affordable. Book now for immediate service.',
  keywords: 'amsterdam taxi, city taxi, amsterdam transportation, urban taxi service',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/amsterdam-transport-booking',
  },
}

export default function AmsterdamTransport() {
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
            <span className="text-gray-900 font-semibold">Amsterdam City Taxi</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Amsterdam City Taxi Service
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Quick, reliable, and affordable city taxi service for all your Amsterdam transportation needs. Available 24/7 for immediate or scheduled bookings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary hover:bg-orange-600 text-primary font-bold py-3 px-6 rounded-lg transition">
                Book Taxi Now
              </button>
              <button className="bg-white hover:bg-blue-50 text-primary font-bold py-3 px-6 rounded-lg transition">
                Call for Immediate Pickup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Your Reliable Amsterdam Transport Partner
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Whether you need to get to a restaurant, a meeting, or across the city, our professional drivers and well-maintained vehicles make your journey comfortable and worry-free.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Service Highlights */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Why Amsterdam Residents & Visitors Choose Us
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">24/7 Availability</p>
                      <p className="text-gray-600">Whenever you need us, day or night</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Fair Metered Pricing</p>
                      <p className="text-gray-600">Transparent rates or fixed-price options</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Local Drivers</p>
                      <p className="text-gray-600">Know the city and fastest routes</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Easy Booking</p>
                      <p className="text-gray-600">Online, phone, or call us for immediate service</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Coverage */}
              <div className="bg-blue-50 rounded-lg p-8 border-2 border-primary">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Service Coverage
                </h3>
                <p className="text-gray-700 mb-4">
                  We serve all of Amsterdam and surrounding areas:
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ City Centre & Business District</li>
                  <li>✓ Residential Neighborhoods</li>
                  <li>✓ Schiphol Airport</li>
                  <li>✓ Hotels & Attractions</li>
                  <li>✓ Train Stations</li>
                  <li>✓ Hospitals & Medical Centres</li>
                  <li>✓ Restaurants & Entertainment</li>
                  <li>✓ Surrounding Areas</li>
                </ul>
                <p className="text-sm text-gray-600">
                  🚕 <strong>Not sure of your destination?</strong> Just call us. We can help with directions.
                </p>
              </div>
            </div>

            {/* How to Book */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                How to Book Your Amsterdam Taxi
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Book Online</h4>
                  <p className="text-gray-600">Visit our website or use our mobile app</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                  <p className="text-gray-600">+31 20 308 6885 for immediate service</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Get Picked Up</h4>
                  <p className="text-gray-600">Driver arrives quickly and safely</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition mb-4">
                Book Your Amsterdam Taxi
              </button>
              <p className="text-gray-600">
                Or call <strong className="text-primary">+31 20 308 6885</strong> for immediate pickup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <ServiceShowcase />

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Amsterdam City Taxi Service',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31 20 308 6885',
            },
            areaServed: 'Amsterdam',
            description: 'Professional city taxi and urban transportation service in Amsterdam. 24/7 availability.',
            offers: {
              '@type': 'Offer',
              url: 'https://dutchtaxitransfers.nl/amsterdam-transport-booking',
            },
          }),
        }}
      />
    </main>
  )
}
