'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export default function ServiceShowcase() {
  const serviceList = Object.values(SERVICES)

  return (
    <section className="bg-white py-12 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 text-center">
          Our Services
        </h2>
        <p className="text-gray-600 text-center mb-12 text-lg max-w-2xl mx-auto">
          Choose the service that fits your travel needs. Each comes with professional drivers, fixed pricing, and 24/7 support.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {serviceList.map((service, idx) => (
            <Link
              key={idx}
              href={`/${service.slug}`}
              className="group border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition bg-white"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition pr-4">
                  {service.title}
                </h3>
                <svg className="w-6 h-6 text-primary flex-shrink-0 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition">
                {service.description}
              </p>
              <p className="text-sm text-primary font-semibold group-hover:text-orange-500 transition">
                Learn more →
              </p>
            </Link>
          ))}
        </div>

        {/* Generic CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Not sure which service you need?
          </p>
          <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  )
}
