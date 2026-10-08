'use client'

import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/constants'

export default function CTAFooter() {
  return (
    <section className="bg-[var(--bg)] py-16 md:py-20 border-t border-[var(--border)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary)]">
              Amsterdam&apos;s Taxi — For Everyone
            </h2>
          <p className="text-[var(--ink-secondary)] lg:text-xl mb-8">
            From Schiphol to the city, from door to door. Fixed prices, on time, clean.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/booking"
              className="bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--bg)] font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 inline-block"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] hover:text-[var(--accent)] font-bold py-4 px-8 rounded-lg text-lg transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.26.559.738 1.437 1.748 2.447 1.01 1.01 1.888 1.487 2.447 1.748l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 4 14.18 4 9.5V5a1 1 0 011-1h2.153z" />
              </svg>
              {BUSINESS_DATA.phone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-[var(--ink-secondary)]">
            <span>✓ Fixed price — confirmed at booking</span>
            <span>✓ Flight tracking included</span>
            <span>✓ 45 min complimentary wait</span>
          </div>
        </div>
      </div>
    </section>
  )
}