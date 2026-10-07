'use client'

import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/constants'

export default function CTAFooter() {
  return (
    <section className="bg-[#0D141C] text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">
            Your Business, Our Priority
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Book an executive chauffeur today. Discreet, reliable, professional —
            Amsterdam&apos;s choice for corporate transport.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/booking"
              className="bg-amber-500 hover:bg-amber-600 text-[#0D141C] font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 inline-block"
            >
              Book Your Transfer
            </Link>
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="border border-gray-600 hover:border-amber-400 hover:text-amber-400 text-white hover:text-amber-400 font-bold py-4 px-8 rounded-lg text-lg transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.738 1.437 1.748 2.447 1.01 1.01 1.888 1.487 2.447 1.748l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2.153z" />
              </svg>
              {BUSINESS_DATA.phone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
            <span>✓ Instant booking confirmation</span>
            <span>✓ Flight tracking included</span>
            <span>✓ 60 min complimentary wait</span>
          </div>
        </div>
      </div>
    </section>
  )
}
