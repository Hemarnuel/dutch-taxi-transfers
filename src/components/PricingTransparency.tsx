'use client'

import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/constants'

export default function PricingTransparency() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Transparent Corporate Pricing
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl">
            All our prices are fixed and confirmed at booking. No surge pricing, no hidden
            fees — simply budgetable business transport.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Schiphol to City */}
            <div className="border-2 border-primary rounded-lg p-6 hover:shadow-lg transition bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-primary">
                  Schiphol ⇄ City Transfer
                </h3>
                <span className="bg-primary text-white text-xs px-2 py-1 rounded">Most Popular</span>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl text-gray-900">€{BUSINESS_DATA.pricing.schipholToCity.min}–€{BUSINESS_DATA.pricing.schipholToCity.max}</span>
                </p>
                <p className="text-sm text-gray-600">
                  City Centre, Zuidas, RAI Convention Centre (90 min, flight-tracked)
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Luggage handling included</li>
                <li>✓ Professional chauffeur</li>
                <li>✓ 60 min complimentary wait</li>
              </ul>
            </div>

            {/* Corporate Disposal */}
            <div className="border border-gray-300 rounded-lg p-6 hover:border-primary transition bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Corporate Disposal (Hourly)
              </h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl text-gray-900">€{BUSINESS_DATA.pricing.hourlyRate.min}–€{BUSINESS_DATA.pricing.hourlyRate.max}</span>
                  <span className="text-sm text-gray-500">/hr</span>
                </p>
                <p className="text-sm text-gray-600">
                  Minimum 3 hours — executive meetings, multi-stop schedules
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Dedicated driver & vehicle</li>
                <li>✓ Real-time schedule adjustments</li>
                <li>✓ Monthly consolidated invoicing</li>
              </ul>
            </div>

            {/* Half-Day */}
            <div className="border border-gray-300 rounded-lg p-6 hover:border-primary transition bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Half-Day Disposal
              </h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl text-gray-900">€{BUSINESS_DATA.pricing.halfDay.min}–€{BUSINESS_DATA.pricing.halfDay.max}</span>
                </p>
                <p className="text-sm text-gray-600">
                  4 hours — full-day meetings, client visits (half-day rate)
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Flexible multi-stop routing</li>
                <li>✓ No rebooking fees within window</li>
                <li>✓ Cost-center invoice tagging</li>
              </ul>
            </div>

            {/* Full-Day */}
            <div className="border border-gray-300 rounded-lg p-6 hover:border-primary transition bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Full-Day Disposal
              </h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">
                  <span className="font-bold text-2xl text-gray-900">€{BUSINESS_DATA.pricing.fullDay.min}–€{BUSINESS_DATA.pricing.fullDay.max}</span>
                </p>
                <p className="text-sm text-gray-600">
                  8 hours — conferences, conferences, all-day events
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Unmatched availability</li>
                <li>✓ Fixed daily rate</li>
                <li>✓ Itemized invoices</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Other Corporate Routes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Schiphol → RAI Convention Centre</span>
                <span className="font-bold text-primary">€{BUSINESS_DATA.pricing.schipholToRAI.min}–€{BUSINESS_DATA.pricing.schipholToRAI.max}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Inter-City (Amsterdam ⇄ The Hague)</span>
                <span className="font-bold text-primary">€{BUSINESS_DATA.pricing.schipholToRAI.min + 45}–€{BUSINESS_DATA.pricing.schipholToRAI.max + 45}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Corporate accounts receive consolidated net-14 invoicing. <Link href="/booking" className="text-primary hover:underline">Set up your account</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}