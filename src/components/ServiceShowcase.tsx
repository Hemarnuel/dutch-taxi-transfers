'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/constants'

export default function ServiceShowcase() {
  const serviceList = Object.values(SERVICES)

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Corporate Transport Solutions
          </h2>
          <p className="text-lg text-gray-600">
            {serviceList.length} executive services, designed for Amsterdam&apos;s business community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceList.map((service, idx) => (
            <Link
              key={idx}
              href={`/${service.slug}`}
              className="group block border-2 border-gray-200 rounded-lg p-8 hover:border-primary hover:shadow-lg transition bg-white"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-semibold">
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
