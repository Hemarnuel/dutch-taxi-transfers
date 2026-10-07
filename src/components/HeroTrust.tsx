'use client'

import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/constants'

export default function HeroTrust() {
  return (
    <section className="relative bg-[#0D141C] text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Executive Chauffeur
              <span className="text-amber-400"> Service</span>, Amsterdam
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Schiphol ⇄ City ⇄ Zuidas — door-to-door, discreet, on time.
              Your business deserves reliable, professional transport.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg backdrop-blur">
                <div className="text-2xl font-bold text-amber-400 flex-shrink-0">€85</div>
                <div>
                  <p className="font-semibold">Fixed Price Guarantee</p>
                  <p className="text-gray-400 text-sm">Schiphol to City Centre/Zuidas — confirmed at booking</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg backdrop-blur">
                <div className="text-2xl font-bold text-amber-400 flex-shrink-0">98%</div>
                <div>
                  <p className="font-semibold">On-Time Rate</p>
                  <p className="text-gray-400 text-sm">Flight-tracked, 60 min complimentary wait</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-lg backdrop-blur">
                <div className="text-2xl font-bold text-amber-400 flex-shrink-0">✓</div>
                <div>
                  <p className="font-semibold">Discreet & Unbranded</p>
                  <p className="text-gray-400 text-sm">Your business stays your business</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="bg-amber-500 hover:bg-amber-600 text-[#0D141C] font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 text-center"
              >
                Book Your Transfer
              </Link>
              <a
                href={`tel:${BUSINESS_DATA.phone}`}
                className="border border-gray-600 hover:border-amber-400 text-white hover:text-amber-400 font-bold py-4 px-8 rounded-lg text-lg transition text-center"
              >
                Call {BUSINESS_DATA.phone}
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative bg-[#152030] border border-gray-700 rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                    <span className="text-amber-400 font-semibold">From Schiphol → Amsterdam</span>
                    <span className="text-amber-400 font-bold text-xl">€85–€110</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-gray-300">Mercedes S-Class / V-Class / BMW 7 Series</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-gray-300">Wi-Fi, refreshments, charging ports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-gray-300">Flight tracking &amp; 60 min wait time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-gray-300">GDPR-compliant, no ride data shared</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}