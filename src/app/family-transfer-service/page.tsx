import type { Metadata } from 'next'
import Link from 'next/link'
import HeroTrust from '@/components/HeroTrust'
import ProofSignals from '@/components/ProofSignals'
import PricingTransparency from '@/components/PricingTransparency'
import FAQAccordion from '@/components/FAQAccordion'
import CTAFooter from '@/components/CTAFooter'

export const metadata: Metadata = {
  title: 'Executive Van Transport Amsterdam | Mercedes V-Class Chauffeur Service',
  description: 'Mercedes V-Class executive van for groups of 4-6. Conference seating, privacy partition, Wi-Fi, refreshments. Perfect for corporate roadshows and VIP delegations.',
  keywords: 'executive van Amsterdam, V-Class chauffeur, group transport Amsterdam, business van service',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/family-transfer-service',
  },
}

const VAN_FAQ = [
  {
    question: 'How many passengers can the V-Class accommodate?',
    answer: 'The Mercedes V-Class seats 6 passengers in executive conference seating with a privacy partition. Luggage capacity: 6 large bags + 4 carry-on bags.',
  },
  {
    question: 'Is Wi-Fi available in the V-Class?',
    answer: 'Yes. Every V-Class is equipped with 4G/5G mobile Wi-Fi with unlimited data for passenger use.',
  },
  {
    question: 'Can we use the V-Class for corporate meetings on the road?',
    answer: 'Yes. The V-Class features executive conference seating, work tables, and privacy partition — ideal for productive roadshow travel.',
  },
  {
    question: 'Is the V-Class available for airport transfers and events?',
    answer: 'Yes. The V-Class is available for Schiphol transfers, corporate roadshows, and event transport. It is our most versatile vehicle.',
  },
]

export default function VanTransport() {
  return (
    <main className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-[#F5F5F5] border-b border-gray-200 py-4 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Executive Van Transport</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0D141C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Executive Van
              <br />
              <span className="text-amber-400">Transport Service</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Mercedes V-Class for groups of 4-6. Conference seating, privacy partition,
              Wi-Fi, refreshments. The ultimate business travel vehicle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/booking"
                className="bg-amber-500 hover:bg-amber-600 text-[#0D141C] font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 inline-block text-center"
              >
                Book Your V-Class
              </a>
              <a
                href="tel:+31203086885"
                className="border border-gray-600 hover:border-amber-400 hover:text-amber-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition inline-block text-center"
              >
                Get Fixed Price Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                The Ultimate Business Travel Vehicle
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Executive Conference Seating</p>
                    <p className="text-gray-600">6 passengers, work tables, privacy partition</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">4G/5G Mobile Wi-Fi</p>
                    <p className="text-gray-600">Unlimited data for passenger use</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Refreshments & Ambiance</p>
                    <p className="text-gray-600">Bottled water, phone chargers, ambient lighting</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">6 Large Bags + 4 Carry-On</p>
                    <p className="text-gray-600">Ample luggage space for business travelers</p>
                  </div>
                </li>
              </ul>

              <a
                href="/booking"
                className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition inline-block"
              >
                Book Your V-Class
              </a>
            </div>

            <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                V-Class Features
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Passenger Capacity</span>
                  <span className="text-gray-600">6 seats</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Luggage Capacity</span>
                  <span className="text-gray-600">6 large + 4 carry-on</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Wi-Fi</span>
                  <span className="text-gray-600">4G/5G, unlimited data</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Conference Seating</span>
                  <span className="text-gray-600">Work tables, privacy partition</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Ideal For</span>
                  <span className="text-gray-600">Roadshows, delegations, VIPs</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                💼 <strong>Corporate accounts</strong> available with consolidated invoicing.{' '}
                <Link href="/booking" className="text-primary hover:underline">Contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Signals */}
      <ProofSignals />

      {/* FAQ */}
      <FAQAccordion items={VAN_FAQ} />

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Executive Van Transport Amsterdam',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31-20-308-6885',
            },
            areaServed: ['Amsterdam', 'Zuidas', 'RAI', 'Randstad'],
            description: 'Mercedes V-Class executive van transport for groups of 4-6 with conference seating and Wi-Fi',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              url: 'https://dutchtaxitransfers.nl/family-transfer-service',
            },
          }),
        }}
      />
    </main>
  )
}