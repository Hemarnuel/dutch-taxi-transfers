import type { Metadata } from 'next'
import Link from 'next/link'
import CTAFooter from '@/components/CTAFooter'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Family Transfer Service Amsterdam | Safe, Convenient Group Transport',
  description: 'Family-friendly transfer service in Amsterdam with child safety features, group capacity, and easy booking. Perfect for families and tourists.',
  keywords: 'family transfer amsterdam, group taxi, tourist transfer, family transport',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/family-transfer-service',
  },
}

const FAMILY_FAQ = [
  {
    question: 'Do you have child safety features in your vehicles?',
    answer: 'Yes, our vehicles include appropriate safety equipment for children. Please let us know the age of your children when booking so we can prepare accordingly.',
  },
  {
    question: 'How many passengers can you accommodate?',
    answer: 'Our standard vehicles seat up to 4 passengers. For larger groups (5–8 people), we offer mini-coach options. Contact us to confirm capacity for your group size.',
  },
  {
    question: 'Are your drivers kid-friendly?',
    answer: 'Absolutely! Our drivers are experienced with families and children, and they are patient and friendly. Your children will feel safe and comfortable.',
  },
  {
    question: 'Can we make stops during the transfer?',
    answer: 'Yes! We can arrange stops along your route for a small additional fee. Perfect for picking up supplies or visiting attractions en route.',
  },
]

export default function FamilyTransfer() {
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
            <span className="text-gray-900 font-semibold">Family Transfer</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Family-Friendly Transport in Amsterdam
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Comfortable, safe transfer service for families and groups. Child-friendly vehicles, experienced drivers, and flexible booking. Perfect for holiday arrivals and city tours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-secondary hover:bg-orange-600 text-primary font-bold py-3 px-6 rounded-lg transition">
                Book Family Transfer
              </button>
              <button className="bg-white hover:bg-blue-50 text-primary font-bold py-3 px-6 rounded-lg transition">
                Get Group Quote
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
                Designed for Family Travel
              </h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Child Safety Features</p>
                    <p className="text-gray-600">Vehicles equipped with child seats and safety restraints</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Spacious & Comfortable</p>
                    <p className="text-gray-600">Plenty of legroom and luggage space for family gear and souvenirs</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Kid-Friendly Drivers</p>
                    <p className="text-gray-600">Patient, experienced drivers who are great with children</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Flexible & Convenient</p>
                    <p className="text-gray-600">Stop en route for supplies or sightseeing at no extra charge</p>
                  </div>
                </li>
              </ul>

              <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
                Reserve Your Family Transfer
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Simple Booking
              </h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Tell Us Your Party Size</p>
                    <p className="text-sm text-gray-600">Adults and children</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Choose Your Route</p>
                    <p className="text-sm text-gray-600">Airport, hotel, attractions</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Confirm & Relax</p>
                    <p className="text-sm text-gray-600">We handle the rest</p>
                  </div>
                </li>
              </ol>
              <p className="text-sm text-gray-600 mt-6">
                👨‍👩‍👧‍👦 <strong>Group discount</strong> available for bookings of 6+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion items={FAMILY_FAQ} />

      {/* CTA */}
      <CTAFooter />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Family Transfer Service Amsterdam',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31 20 308 6885',
            },
            areaServed: 'Amsterdam',
            description: 'Family-friendly transfer and taxi service with child safety features and group capacity',
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
