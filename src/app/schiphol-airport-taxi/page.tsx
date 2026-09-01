import type { Metadata } from 'next'
import Link from 'next/link'
import HeroTrust from '@/components/HeroTrust'
import ProofSignals from '@/components/ProofSignals'
import PricingTransparency from '@/components/PricingTransparency'
import FAQAccordion from '@/components/FAQAccordion'
import CTAFooter from '@/components/CTAFooter'

export const metadata: Metadata = {
  title: 'Schiphol Airport Taxi to Amsterdam | Fixed Price Guaranteed',
  description: 'Fixed-price airport transfer from Schiphol to Amsterdam City Center. €35-€45, professional drivers, 24/7 booking, no hidden fees.',
  keywords: 'schiphol airport taxi, airport transfer amsterdam, schiphol to amsterdam',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/schiphol-airport-taxi',
  },
}

export default function SchipholAirportTaxi() {
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
            <span className="text-gray-900 font-semibold">Schiphol Airport Taxi</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Schiphol to Amsterdam Airport Transfer
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Fast, reliable, and affordable airport taxi service. Fixed price of €35–€45 from Schiphol Airport to Amsterdam City Center. Professional drivers, 24/7 availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary hover:bg-orange-600 text-primary font-bold py-3 px-6 rounded-lg transition">
                Book Now
              </button>
              <button className="bg-white hover:bg-blue-50 text-primary font-bold py-3 px-6 rounded-lg transition">
                Call for Instant Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                The Smart Choice for Schiphol Transfers
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Fixed Price Guarantee</p>
                    <p className="text-gray-600">€35–€45 set at booking—no surge pricing, no surprises</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Drivers</p>
                    <p className="text-gray-600">Licensed, trained, and background-checked for your safety</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Availability</p>
                    <p className="text-gray-600">Book anytime, day or night. Same-day bookings available</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Luggage & Service Included</p>
                    <p className="text-gray-600">Comfortable vehicles with ample luggage space and friendly service</p>
                  </div>
                </li>
              </ul>

              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Book Your Transfer
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Booking is Simple
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Select Your Route</p>
                    <p className="text-sm text-gray-600">Choose Schiphol → Amsterdam</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Pick Your Time</p>
                    <p className="text-sm text-gray-600">Choose your preferred pickup time</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Confirm & Pay</p>
                    <p className="text-sm text-gray-600">Secure your booking and get instant confirmation</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Signals */}
      <ProofSignals />

      {/* Pricing */}
      <PricingTransparency />

      {/* FAQ */}
      <FAQAccordion />

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Schiphol Airport Taxi to Amsterdam',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31 20 308 6885',
            },
            areaServed: ['Amsterdam', 'Schiphol Airport'],
            description: 'Fixed-price airport taxi transfer from Amsterdam Schiphol to city center',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: '35-45',
              url: 'https://dutchtaxitransfers.nl/schiphol-airport-taxi',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </main>
  )
}
