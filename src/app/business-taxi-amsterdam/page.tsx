import type { Metadata } from 'next'
import Link from 'next/link'
import CTAFooter from '@/components/CTAFooter'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Business Taxi Amsterdam | Professional Corporate Transfer Service',
  description: 'Professional business taxi and corporate transfer service in Amsterdam. Reliable, punctual, and premium vehicles for business travelers.',
  keywords: 'business taxi amsterdam, corporate transfer, business transportation',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/business-taxi-amsterdam',
  },
}

const BUSINESS_FAQ = [
  {
    question: 'Do you offer hourly business rates?',
    answer: 'Yes! We offer flexible hourly rates starting at €85–€95/hour, perfect for multi-stop business itineraries, meetings, and events. Contact us for custom quotes.',
  },
  {
    question: 'Can you accommodate last-minute bookings?',
    answer: 'Absolutely. We can often arrange same-day pickups depending on vehicle availability. Call +31 20 308 6885 for instant confirmation.',
  },
  {
    question: 'Are your drivers familiar with the Amsterdam business district?',
    answer: 'Yes, all drivers are knowledgeable about Amsterdam business areas and can navigate efficiently to corporate offices, hotels, and meeting venues.',
  },
]

export default function BusinessTaxi() {
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
            <span className="text-gray-900 font-semibold">Business Taxi</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Professional Business Taxi Amsterdam
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Reliable, punctual corporate transportation for business meetings, events, and airport transfers. Flexible hourly rates and premium vehicles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary hover:bg-orange-600 text-primary font-bold py-3 px-6 rounded-lg transition">
                Book Business Transfer
              </button>
              <button className="bg-white hover:bg-blue-50 text-primary font-bold py-3 px-6 rounded-lg transition">
                Call for Quote
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
                Punctuality & Professionalism
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">On-Time Guarantee</p>
                    <p className="text-gray-600">We understand the importance of punctuality for business. Arrive early, leave on time.</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Professional Fleet</p>
                    <p className="text-gray-600">Premium, well-maintained vehicles perfect for client meetings and executive travel</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Courteous Drivers</p>
                    <p className="text-gray-600">Professional, trained drivers who maintain discretion and high service standards</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Flexible Scheduling</p>
                    <p className="text-gray-600">Hourly rates for multi-stop itineraries, meetings, and flexible business needs</p>
                  </div>
                </li>
              </ul>

              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Book Now
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Pricing
              </h3>
              <div className="space-y-4 mb-6">
                <div>
                  <p className="font-semibold text-gray-900">Hourly Rate</p>
                  <p className="text-2xl font-bold text-primary">€85–€95</p>
                  <p className="text-sm text-gray-600">Flexible business transportation</p>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <p className="font-semibold text-gray-900">Airport Transfer</p>
                  <p className="text-2xl font-bold text-primary">€40–€50</p>
                  <p className="text-sm text-gray-600">Fixed price to/from Schiphol</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                💼 <strong>Corporate accounts</strong> available. Call for custom rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={BUSINESS_FAQ} />

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Taxi Amsterdam',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31 20 308 6885',
            },
            areaServed: 'Amsterdam',
            description: 'Professional, reliable business taxi and corporate transfer service in Amsterdam',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'EUR',
              price: '85-95',
              url: 'https://dutchtaxitransfers.nl/business-taxi-amsterdam',
            },
          }),
        }}
      />
    </main>
  )
}
