'use client'

import { BUSINESS_DATA } from '@/lib/constants'

export default function CTAFooter() {
  return (
    <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Transfer?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Book online for instant confirmation, or call us anytime. Available 24/7 for all your transportation needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-secondary hover:bg-orange-600 text-primary font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95">
              Book Now
            </button>
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="bg-white hover:bg-blue-50 text-primary font-bold py-4 px-8 rounded-lg text-lg transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.738 1.437 1.748 2.447 1.01 1.01 1.888 1.487 2.447 1.748l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2.153z" />
              </svg>
              {BUSINESS_DATA.phone}
            </a>
          </div>

          <p className="text-blue-100 text-sm">
            ✓ Instant booking confirmation &nbsp; • &nbsp; ✓ 24/7 customer support &nbsp; • &nbsp; ✓ No hidden fees
          </p>
        </div>
      </div>
    </section>
  )
}
