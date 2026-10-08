'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export default function ServiceShowcase() {
  const serviceList = Object.values(SERVICES)

  return (
    <section className="bg-[var(--bg)] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--ink)]">
            What We Do
          </h2>
          <p className="text-lg text-[var(--ink-secondary)]">
            {serviceList.length} passenger services across Amsterdam and Schiphol.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceList.map((service, idx) => (
            <Link
              key={idx}
              href={`/${service.slug}`}
              className="group block bg-[var(--surface)] border border-[var(--border)] rounded-lg p-8 hover:border-[var(--primary)] hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-[var(--ink)] mb-3 group-hover:text-[var(--primary)] transition">
                {service.title}
              </h3>
              <p className="text-[var(--ink-secondary)] mb-4 transition">
                {service.description}
              </p>
              <div className="flex items-center text-[var(--primary)] font-semibold">
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}