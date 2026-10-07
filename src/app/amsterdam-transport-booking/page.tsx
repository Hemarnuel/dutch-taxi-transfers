import type { Metadata } from 'next'
import Link from 'next/link'
import HeroTrust from '@/components/HeroTrust'
import ProofSignals from '@/components/ProofSignals'
import PricingTransparency from '@/components/PricingTransparency'
import FAQAccordion from '@/components/FAQAccordion'
import CTAFooter from '@/components/CTAFooter'

export const metadata: Metadata = {
  title: 'Inter-City Chauffeur Amsterdam ⇄ The Hague, Rotterdam & Brussels | Dutch Taxi Transfers',
  description: 'Door-to-door executive transfer from Amsterdam to The Hague, Rotterdam, Utrecht, and Brussels. Productive travel time, fixed price.',
  keywords: 'Amsterdam to Hague chauffeur, intercity executive transfer, business travel Netherlands, Brussels airport chauffeur',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/amsterdam-transport-booking',
  },
}

const CITY_FAQ = [
  {
    question: 'What routes do you cover outside Amsterdam?',
    answer: 'We cover door-to-door transfers from Amsterdam to The Hague, Rotterdam, Utrecht, Brussels, Schiphol Airport, and more. Tell us your destination — if it is on a main route, we serve it.',
  },
  {
    question: 'Is the price fixed for inter-city transfers?',
    answer: 'Yes. Your inter-city transfer price is fixed at booking and confirmed before departure. No surprise fees, regardless of traffic or route taken.',
  },
  {
    question: 'How far in advance should I book a long-distance transfer?',
    answer: 'Same-day bookings are accommodated when available. For guaranteed availability on busy days, we recommend booking at least 24 hours ahead.',
  },
]

export default function CityTransfers() {
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
            <span className="text-gray-900 font-semibold">Inter-City Transfers</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0D141C] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Amsterdam ⇄ Randstad &amp;
              <br />
              <span className="text-amber-400">Brussels</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Door-to-door executive transfer from Amsterdam to The Hague, Rotterdam,
              Utrecht, and Brussels. Productive travel time. Fixed price.
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
                Business-Class Long-Distance Travel
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Fixed Price Confirmed at Booking</p>
                    <p className="text-gray-600">Traffic and route changes never alter your confirmed price</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Productive Travel Time</p>
                    <p className="text-gray-600">Wi-Fi, charging ports, workspaces — turn travel time into work time</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Door-to-Door Service</p>
                    <p className="text-gray-600">Pickup and drop-off at your exact addresses — no station hops</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Cross-Border Capability</p>
                    <p className="text-gray-600">Amsterdam ⇄ Brussels, Netherlands ⇄ Belgium — no extra coordination required</p>
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
                Popular Inter-City Routes
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Amsterdam ⇄ The Hague</span>
                  <span className="text-gray-600">~1 hr</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Amsterdam ⇄ Rotterdam</span>
                  <span className="text-gray-600">~1 hr 15 min</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Amsterdam ⇄ Utrecht</span>
                  <span className="text-gray-600">~50 min</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-900">Amsterdam ⇄ Brussels</span>
                  <span className="text-gray-600">~2 hrs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Amsterdam ⇄ Schiphol Airport</span>
                  <span className="text-gray-600">~30 min</span>
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
      <FAQAccordion items={CITY_FAQ} />

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Inter-City Executive Chauffeur',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31-20-308-6885',
            },
            areaServed: ['Amsterdam', 'The Hague', 'Rotterdam', 'Utrecht', 'Brussels'],
            description: 'Door-to-door executive transfer service from Amsterdam to The Hague, Rotterdam, Utrecht, and Brussels',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              url: 'https://dutchtaxitransfers.nl/amsterdam-transport-booking',
            },
          }),
        }}
      />
    </main>
  )
}