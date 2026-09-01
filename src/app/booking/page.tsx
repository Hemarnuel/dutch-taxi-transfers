import type { Metadata } from 'next'
import Link from 'next/link'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Book Taxi Amsterdam | Dutch Taxi Transfers',
  description: 'Book your reliable airport taxi or transfer in Amsterdam. Fast, secure, and transparent booking process.',
  keywords: 'book taxi amsterdam, reserve transfer, taxi booking',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl/booking',
  },
}

export default function BookingPage() {
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
            <span className="text-gray-900 font-semibold">Book Transfer</span>
          </div>
        </div>
      </div>

      {/* Hero with Background Image */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-16 md:py-24"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 61, 130, 0.8), rgba(0, 61, 130, 0.8)), url(/images/amsterdam%20airport.jpg)',
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Book Your Transfer Now
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Fast, reliable, and transparent. Fixed prices, no hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Confirm Your Booking
              </h2>
              <p className="text-lg text-gray-600">
                Fill in your details and we&apos;ll send you a confirmation email with all the
                booking details and payment options.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <BookingForm />
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  📞 Call Us
                </h3>
                <p className="text-gray-600">
                  Prefer to call? Reach us at
                  <br />
                  <a href="tel:+31203086885" className="text-primary hover:underline font-bold">
                    +31 20 308 6885
                  </a>
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-secondary">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ⏱️ Quick Response
                </h3>
                <p className="text-gray-600">
                  We confirm most bookings within 15 minutes.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-primary">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ✓ Fixed Price
                </h3>
                <p className="text-gray-600">
                  No surge pricing, no hidden fees. Transparent rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Booking Questions?
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  When will I receive confirmation?
                </h3>
                <p className="text-gray-600">
                  You&apos;ll receive an email confirmation within 15 minutes. If you don&apos;t see it,
                  check your spam folder or call us.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  Can I modify my booking after submission?
                </h3>
                <p className="text-gray-600">
                  Yes, you can modify pickup time, date, or location within 24 hours by calling
                  us or replying to your confirmation email.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept credit/debit cards, bank transfer, and cash. Payment options will be
                  included in your confirmation email.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">
                  Is there a cancellation fee?
                </h3>
                <p className="text-gray-600">
                  Free cancellation up to 4 hours before pickup. Cancellations within 4 hours are
                  subject to a 50% charge.
                </p>
              </div>
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
            name: 'Taxi Booking Service',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dutch Taxi Transfers',
              telephone: '+31 20 308 6885',
            },
            areaServed: 'Amsterdam',
            description: 'Book reliable airport taxi and transfer service in Amsterdam',
          }),
        }}
      />
    </main>
  )
}
