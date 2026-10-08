'use client'

import Link from 'next/link'
import { BUSINESS_DATA } from '@/lib/constants'

export default function HeroTrust() {
  return (
    <section className="relative bg-[var(--bg)] text-[var(--ink)] min-h-screen py-20 md:py-28 flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/regular-passenger.png"
          alt="Regular passenger at Schiphol Airport, Amsterdam"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 max-w-7xl">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Amsterdam Taxi
            <span className="text-[var(--accent)]"> Service</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--ink-secondary)] mb-8">
            Book airport transfers, city rides, and group transport. Fixed prices at checkout.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 bg-[var(--surface)]/80 p-4 rounded-lg backdrop-blur">
              <div className="text-2xl font-bold text-[var(--accent)] flex-shrink-0">€85</div>
              <div>
                <p className="font-semibold">Fixed price guarantee</p>
                <p className="text-[var(--ink-secondary)] text-sm">Schiphol to City Centre — confirmed at booking</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[var(--surface)]/80 p-4 rounded-lg backdrop-blur">
              <div className="text-2xl font-bold text-[var(--accent)] flex-shrink-0">97%</div>
              <div>
                <p className="font-semibold">On-time rate</p>
                <p className="text-[var(--ink-secondary)] text-sm">Flight-tracked, 45 min complimentary wait</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[var(--surface)]/80 p-4 rounded-lg backdrop-blur">
              <div className="text-2xl font-bold text-[var(--accent)] flex-shrink-0">✓</div>
              <div>
                <p className="font-semibold">Clean, modern fleet</p>
                <p className="text-[var(--ink-secondary)] text-sm">Sedans, vans, child seats available</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="bg-[var(--primary)] hover:bg-[var(--accent)] text-[var(--bg)] font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 active:scale-95 text-center"
            >
              Get a quote
            </Link>
            <a
              href={`tel:${BUSINESS_DATA.phone}`}
              className="border border-[var(--border)] hover:border-[var(--accent)] text-[var(--ink)] font-bold py-4 px-8 rounded-lg text-lg transition text-center"
            >
              Call {BUSINESS_DATA.phone}
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 hidden md:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-2xl blur-2xl"></div>
            <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                  <span className="text-[var(--accent)] font-semibold">From Schiphol → City</span>
                  <span className="text-[var(--primary)] font-bold text-xl">€85–€110</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                    <span className="text-[var(--ink-secondary)]">Sedan / Van / Premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                    <span className="text-[var(--ink-secondary)]">Wi-Fi, water, chargers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                    <span className="text-[var(--ink-secondary)]">Flight tracked & 45 min wait</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--accent)] rounded-full"></div>
                    <span className="text-[var(--ink-secondary)]">Clean, modern cars</span>
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