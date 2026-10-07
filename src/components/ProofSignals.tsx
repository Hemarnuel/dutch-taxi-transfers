'use client'

import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/constants'

export default function ProofSignals() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Trusted by Amsterdam&apos;s Business Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From legal firms to tech companies, our executive chauffeur service is the
            transport choice for professionals who value reliability and discretion.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {BUSINESS_DATA.trustSignals.yearsInBusiness}+
            </div>
            <p className="font-semibold text-gray-900 mb-1">Years Executive Experience</p>
            <p className="text-sm text-gray-600">Serving Amsterdam business community</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {BUSINESS_DATA.trustSignals.rating}
            </div>
            <p className="font-semibold text-gray-900 mb-1">★★★★★ Customer Rating</p>
            <p className="text-sm text-gray-600">{BUSINESS_DATA.trustSignals.reviewCount}+ verified reviews</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {BUSINESS_DATA.trustSignals.onTimeRate}%
            </div>
            <p className="font-semibold text-gray-900 mb-1">On-Time Arrivals</p>
            <p className="text-sm text-gray-600">Flight-tracked, schedule-aligned</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {BUSINESS_DATA.trustSignals.corporateClients}
            </div>
            <p className="font-semibold text-gray-900 mb-1">Corporate Clients</p>
            <p className="text-sm text-gray-600">Companies, law firms, agencies</p>
          </div>
        </div>
      </div>
    </section>
  )
}