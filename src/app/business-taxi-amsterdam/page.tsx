import type { Metadata } from 'next'
import Link from 'next/link'
import HeroTrust from '@/components/HeroTrust'
import ProofSignals from '@/components/ProofSignals'
import PricingTransparency from '@/components/PricingTransparency'
import FAQAccordion from '@/components/FAQAccordion'
import CTAFooter from '@/components/CTAFooter'

export const metadata: Metadata = {
  title: 'Corporate Roadshow Transport Amsterdam | Executive Disposal Service',
  description: 'Multi-stop corporate roadshow transport in Amsterdam. Executive hourly disposal, dedicated chauffeur, flexible scheduling.',
  keywords: 'corporate roadshow chauffeur, executive roadshow transport Amsterdam, business disposal service',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/business-taxi-amsterdam',
  },
}

const CORPORATE_FAQ = [
  {
    question: 'What is included in the hourly disposal rate?',
    answer: 'The hourly rate covers vehicle, chauffeur, fuel, insurance, and standard wait time. Minimum 3 hours. Parking fees and tolls are itemized separately on the invoice.',
  },
  {
    question: 'Can we book multiple vehicles for a large roadshow?',
    answer: 'Yes. We coordinate multiple vehicles with a lead dispatcher for large roadshows. Contact us to plan your fleet and routing.',
  },
  {
    question: 'Do you provide corporate accounts and invoicing?',
    answer: 'Yes. We offer consolidated monthly invoicing with VAT breakdown, ride-level detail, and cost-center tagging. Terms: net 14 days.',
  },
]

export default function CorporateRoadshows() {
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
            <span className="text-gray-900 font-semibold">Corporate Roadshows</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0D141C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Corporate Roadshow
              <br />
              <span className="text-amber-400">Disposal Service</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Dedicated vehicle and chauffeur for your executive schedule across Amsterdam, Zuidas, RAI, and Randstad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/booking"
                className="bg-amber-500 hover:bg-amber-600 text-[#0D141C] font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 inline-block text-center"
              >
                Book Roadshow
              </a>
              <a
                href="tel:+31203086885"
                className="border border-gray-600 hover:border-amber-400 hover:text-amber-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition inline-block text-center"
              >
                Request Corporate Quote
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
                Your Schedule, Our Priority
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dedicated Driver & Vehicle</p>
                    <p className="text-gray-600">One chauffeur, one vehicle for your full roadshow</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Real-Time Schedule Adjustments</p>
                    <p className="text-gray-600">Last-minute meeting changes? Our dispatcher handles it</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Monthly Consolidated Invoicing</p>
                    <p className="text-gray-600">VAT breakdown, ride-level detail, cost-center tagging</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Discretion Guaranteed</p>
                    <p className="text-gray-600">Unbranded vehicles, business-attire drivers, no ride data shared</p>
                  </div>
                </li>
              </ul>

              <a
                href="/booking"
                className="bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition inline-block"
              >
                Book Roadshow
              </a>
            </div>

            <div className="bg-[#F5F5F5] border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Corporate Disposal Pricing
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-gray-900">Hourly Rate</p>
                  <p className="text-2xl font-bold text-primary">€95–€125/hr</p>
                  <p className="text-sm text-gray-600">Minimum 3 hours</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Half-Day Disposal</p>
                  <p className="text-2xl font-bold text-primary">€380–€480</p>
                  <p className="text-sm text-gray-600">4 hours — meetings, client visits</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">Full-Day Disposal</p>
                  <p className="text-2xl font-bold text-primary">€650–€850</p>
                  <p className="text-sm text-gray-600">8 hours — conferences, events</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                💼 <strong>Corporate accounts</strong> available. Net 14 terms.{' '}
                <Link href="/booking" className="text-primary hover:underline">Contact us to set up</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Signals */}
      <ProofSignals />

      {/* FAQ */}
      <FAQAccordion items={CORPORATE_FAQ} />

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Corporate Roadshow Executive Disposal',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31-20-308-6885',
            },
            areaServed: ['Amsterdam', 'Zuidas', 'Randstad'],
            description: 'Executive hourly disposal service for corporate roadshows across Amsterdam and Randstad',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: '95-125',
              url: 'https://dutchtaxitransfers.nl/business-taxi-amsterdam',
            },
          }),
        }}
      />
    </main>
  )
}