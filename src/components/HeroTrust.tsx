'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroTrust() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/regular-passenger.png"
          alt="Family at Schiphol Airport with taxi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/95 via-[var(--primary)]/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Amsterdam Taxi & Airport Transfers
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl">
              Your trusted transfer service for Schiphol, Amsterdam and beyond. Book your ride and travel with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="bg-[var(--accent)] text-[var(--ink)] font-bold px-8 py-4 rounded-lg text-lg transition hover:bg-orange-500 flex items-center justify-center gap-2"
              >
                Book Your Ride
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/booking"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg transition hover:bg-white/10 flex items-center justify-center gap-2"
              >
                Get a Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto">
              <h3 className="text-xl font-bold text-[var(--ink)] mb-6 text-center">Quick Book Your Ride</h3>
              <form className="space-y-4" action="/booking" method="GET">
                <div>
                  <label htmlFor="from" className="block text-sm font-medium text-[var(--ink-secondary)] mb-1">From</label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    placeholder="Pickup location"
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="to" className="block text-sm font-medium text-[var(--ink-secondary)] mb-1">To</label>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    placeholder="Destination"
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="datetime" className="block text-sm font-medium text-[var(--ink-secondary)] mb-1">Date & Time</label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    name="datetime"
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-medium text-[var(--ink-secondary)] mb-1">Passengers</label>
                    <select
                      id="passengers"
                      name="passengers"
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5">5 Passengers</option>
                      <option value="6">6 Passengers</option>
                      <option value="7">7 Passengers</option>
                      <option value="8">8+ Passengers</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="luggage" className="block text-sm font-medium text-[var(--ink-secondary)] mb-1">Luggage</label>
                    <select
                      id="luggage"
                      name="luggage"
                      className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
                    >
                      <option value="0">No luggage</option>
                      <option value="1">1 Suitcase</option>
                      <option value="2">2 Suitcases</option>
                      <option value="3">3 Suitcases</option>
                      <option value="4">4+ Suitcases</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--accent)] text-[var(--ink)] font-bold py-4 rounded-lg text-lg transition hover:bg-orange-500 flex items-center justify-center gap-2"
                >
                  Check Price
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}