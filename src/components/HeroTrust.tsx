'use client'

import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/constants'

export default function HeroTrust() {
  return (
    <section
      className="relative bg-gradient-to-r from-primary to-blue-600 text-white py-12 md:py-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 61, 130, 0.65), rgba(0, 61, 130, 0.65)), url(/images/amsterdam%20airport.jpg)',
      }}
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Headline + Trust Anchors */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Fixed-Price Airport Taxi Amsterdam
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Reliable, transparent, and professional transfer service from Schiphol to Amsterdam. 24/7 booking, no hidden fees.
            </p>

            {/* Trust Anchors */}
            <div className="space-y-4 mb-8">
              {/* Price Anchor */}
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur">
                <div className="text-2xl font-bold text-secondary flex-shrink-0">€50</div>
                <div>
                  <p className="font-semibold">Fixed Price Guaranteed</p>
                  <p className="text-blue-100 text-sm">Schiphol to Amsterdam City Center</p>
                </div>
              </div>

              {/* Rating Anchor */}
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur">
                <div className="text-2xl font-bold text-secondary flex-shrink-0">4.8★</div>
                <div>
                  <p className="font-semibold">{BUSINESS_DATA.trustSignals.reviewCount}+ Happy Travelers</p>
                  <p className="text-blue-100 text-sm">Trusted for {BUSINESS_DATA.trustSignals.yearsInBusiness}+ years</p>
                </div>
              </div>

              {/* No Hidden Fees Anchor */}
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur">
                <div className="text-2xl font-bold text-secondary flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold">No Hidden Fees</p>
                  <p className="text-blue-100 text-sm">Price set at booking, luggage included</p>
                </div>
              </div>

              {/* Credential Anchor */}
              <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg backdrop-blur">
                <div className="text-2xl font-bold text-secondary flex-shrink-0">👤</div>
                <div>
                  <p className="font-semibold">Professional Drivers</p>
                  <p className="text-blue-100 text-sm">Licensed, trained, background-checked</p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {BUSINESS_DATA.trustSignals.guarantees.slice(0, 4).map((guarantee, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Buttons */}
          <div className="space-y-4">
            <Link
              href="/booking"
              className="block w-full bg-secondary hover:bg-orange-600 text-primary font-bold py-4 px-6 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 text-center"
            >
              Book Airport Transfer
            </Link>
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="block w-full bg-white hover:bg-blue-50 text-primary font-bold py-4 px-6 rounded-lg text-lg transition text-center"
            >
              Call {BUSINESS_DATA.phone}
            </a>

            {/* Persona Navigation */}
            <div className="pt-4 space-y-3">
              <p className="text-sm text-blue-100 font-semibold">Need something different?</p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/business-taxi-amsterdam"
                  className="bg-blue-500/20 hover:bg-blue-500/40 px-4 py-2 rounded text-sm font-semibold transition text-center"
                >
                  Business Travel
                </Link>
                <Link
                  href="/day-trip-transfer"
                  className="bg-blue-500/20 hover:bg-blue-500/40 px-4 py-2 rounded text-sm font-semibold transition text-center"
                >
                  Family Transport
                </Link>
                <Link
                  href="/quote"
                  className="col-span-2 bg-blue-500/20 hover:bg-blue-500/40 px-4 py-2 rounded text-sm font-semibold transition text-center"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
