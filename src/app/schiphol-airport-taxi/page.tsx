import type { Metadata } from 'next'
import Link from 'next/link'
import HeroTrust from '@/components/HeroTrust'
import ProofSignals from '@/components/ProofSignals'
import PricingTransparency from '@/components/PricingTransparency'
import FAQAccordion from '@/components/FAQAccordion'
import CTAFooter from '@/components/CTAFooter'

export const metadata: Metadata = {
  title: 'Schiphol Airport Chauffeur to Amsterdam | Executive Transfers €85–€110',
  description: 'Executive chauffeur service from Schiphol to Amsterdam City Centre, Zuidas & RAI. Flight-tracked, 60 min wait included. Mercedes S/V-Class fleet.',
  keywords: 'schiphol chauffeur, executive airport transfer amsterdam, business travel schiphol',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/schiphol-airport-taxi',
  },
}

export default function SchipholAirportTransfers() {
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
            <span className="text-gray-900 font-semibold">Schiphol Airport Transfers</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0D141C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Schiphol ⇄ Amsterdam
              <br />
              <span className="text-amber-400">Executive Transfers</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Fixed price €85–€110 from Schiphol to Amsterdam City Centre, Zuidas, or RAI.
              Flight-tracked, 60 min complimentary wait, unbranded vehicles available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/booking"
                className="bg-amber-500 hover:bg-amber-600 text-[#0D141C] font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 inline-block text-center"
              >
                Book Your Transfer
              </a>
              <a
                href="tel:+31203086885"
                className="border border-gray-600 hover:border-amber-400 hover:text-amber-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition inline-block text-center"
              >
                Call for Instant Quote
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
                Amsterdam&apos;s Business Travelers Choose Dutch Chauffeur
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fixed Price Guarantee</p>
                    <p className="text-gray-600">€85–€110 confirmed at booking — no surge, no surprises</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Flight Tracking Included</p>
                    <p className="text-gray-600">Real-time monitoring, automatic wait adjustment</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">60 Min Complimentary Wait</p>
                    <p className="text-gray-600">No charge for delays — your chauffeur tracks your flight</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Discreet & Professional</p>
                    <p className="text-gray-600">Unbranded Mercedes S/V-Class or BMW 7 Series on request</p>
                  </div>
                </li>
              </ul>

              <a
                href="/booking"
                className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition inline-block"
              >
                Book Your Transfer
              </a>
            </div>

            <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Booking is Simple
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Request Your Transfer</p>
                    <p className="text-sm text-gray-600">Select Schiphol → Amsterdam, add flight number</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Receive Confirmation</p>
                    <p className="text-sm text-gray-600">Fixed price, chauffeur details, direct contact — within 15 min</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Arrive Refreshed</p>
                    <p className="text-sm text-gray-600">Chauffeur waits 60 min post-landing. You travel; we handle the rest.</p>
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
            name: 'Schiphol Airport Chauffeur to Amsterdam',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31-20-308-6885',
            },
            areaServed: ['Amsterdam', 'Schiphol Airport', 'Zuidas', 'RAI'],
            description: 'Executive chauffeur service from Amsterdam Schiphol to city center, Zuidas business district, and RAI Convention Centre',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: '85-110',
              url: 'https://dutchtaxitransfers.nl/schiphol-airport-taxi',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </main>
  )
}