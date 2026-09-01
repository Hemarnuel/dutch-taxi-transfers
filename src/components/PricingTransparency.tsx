'use client'

import { BUSINESS_DATA } from '@/lib/constants'

export default function PricingTransparency() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Fixed Pricing, No Surprises
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            All our prices are set when you book. What you see is what you pay—no hidden fees, no surprises at the end.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Schiphol to Amsterdam */}
            <div className="border-2 border-primary rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-primary mb-3">
                Schiphol → Amsterdam
              </h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">
                  <span className="font-semibold">€{BUSINESS_DATA.pricing.schipholToAmsterdam.min}</span>–€{BUSINESS_DATA.pricing.schipholToAmsterdam.max}
                </p>
                <p className="text-sm text-gray-600">
                  City Center (10–15 mins traffic permitting)
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Luggage handling included</li>
                <li>✓ Professional driver</li>
                <li>✓ 24/7 support</li>
              </ul>
            </div>

            {/* Business Travel */}
            <div className="border-2 border-gray-300 rounded-lg p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Business Travel (hourly)
              </h3>
              <div className="space-y-2 mb-6">
                <p className="text-gray-700">
                  <span className="font-semibold">€{BUSINESS_DATA.pricing.businessHourly.min}</span>–€{BUSINESS_DATA.pricing.businessHourly.max}
                </p>
                <p className="text-sm text-gray-600">
                  Perfect for corporate meetings & events
                </p>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Punctual & reliable</li>
                <li>✓ Professional vehicle</li>
                <li>✓ Flexible scheduling</li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Other Popular Routes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-2 border-b border-blue-100">
                <span className="text-gray-700">Schiphol → Dam Square</span>
                <span className="font-bold text-primary">€{BUSINESS_DATA.pricing.schipholToDamSquare.min}–€{BUSINESS_DATA.pricing.schipholToDamSquare.max}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-100">
                <span className="text-gray-700">Schiphol → Hotel</span>
                <span className="font-bold text-primary">€{BUSINESS_DATA.pricing.schipholToHotel.min}–€{BUSINESS_DATA.pricing.schipholToHotel.max}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              💡 <strong>Tip:</strong> Prices may vary by time of day and traffic. Confirm during booking.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button className="bg-secondary hover:bg-orange-600 text-primary font-bold py-3 px-8 rounded-lg text-lg transition transform hover:scale-105">
              Get Fixed Price Quote
            </button>
            <p className="text-sm text-gray-600 mt-3">
              Or call <strong className="text-primary">+31 20 308 6885</strong> for instant confirmation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
