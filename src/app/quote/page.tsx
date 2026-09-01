import type { Metadata } from 'next'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get Quote | Dutch Taxi Transfers',
  description: 'Request a quote for your Amsterdam taxi transfer. Hourly rates, group transfers, and custom packages available.',
  keywords: 'taxi quote amsterdam, get quote, transfer pricing, hourly rate',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/quote',
  },
}

export default function QuotePage() {
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
            <span className="text-gray-900 font-semibold">Get Quote</span>
          </div>
        </div>
      </div>

      {/* Hero with Background Image */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-16 md:py-24"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 61, 130, 0.8), rgba(0, 61, 130, 0.8)), url(/images/amsterdam%20airport%20%E2%AD%90%EF%B8%8F.jpg)',
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Get Your Custom Quote
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              For hourly rates, group transfers, corporate packages, and special requests.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request a Custom Quote
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your transfer needs and we&apos;ll send you a detailed estimate within 1
                hour. Perfect for group trips, corporate events, or special requirements.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <QuoteForm />
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  💼 Corporate Packages
                </h3>
                <p className="text-gray-600">
                  Special rates for regular business travel and corporate accounts.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-secondary">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  👥 Group Transfers
                </h3>
                <p className="text-gray-600">
                  Discounted rates for 5+ passengers on the same journey.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ⏰ Hourly Rates
                </h3>
                <p className="text-gray-600">
                  Flexible hourly pricing for multi-stop itineraries and day trips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pricing Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Standard Pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-8 border-2 border-primary text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Airport Transfer
                </h3>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  €40–50
                </p>
                <p className="text-gray-600 mb-4">
                  Fixed price to/from Schiphol Airport
                </p>
                <Link
                  href="/booking"
                  className="inline-block bg-secondary hover:bg-orange-600 text-primary font-bold py-2 px-6 rounded-lg transition"
                >
                  Book Now
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 border-2 border-secondary text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Hourly Rate
                </h3>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  €85–95
                </p>
                <p className="text-gray-600 mb-4">
                  Flexible business transportation
                </p>
                <button className="inline-block bg-secondary hover:bg-orange-600 text-primary font-bold py-2 px-6 rounded-lg transition">
                  Get Quote
                </button>
              </div>

              <div className="bg-white rounded-lg p-8 border-2 border-primary text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Day Trip
                </h3>
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  Custom
                </p>
                <p className="text-gray-600 mb-4">
                  Full-day or multi-hour packages
                </p>
                <button className="inline-block bg-secondary hover:bg-orange-600 text-primary font-bold py-2 px-6 rounded-lg transition">
                  Get Quote
                </button>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-primary">
              <p className="text-center text-gray-700">
                <span className="font-semibold">All prices include:</span>
                <br />
                ✓ Professional driver • ✓ Modern vehicle • ✓ No hidden fees • ✓ Free
                cancellation (4+ hours)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Taxi Quote Service',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31 20 308 6885',
            },
            areaServed: 'Amsterdam',
            description: 'Get a custom quote for taxi transfer services in Amsterdam',
            offers: [
              {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price: '40-50',
                name: 'Airport Transfer',
              },
              {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price: '85-95',
                name: 'Hourly Rate',
              },
            ],
          }),
        }}
      />
    </main>
  )
}
