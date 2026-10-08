'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BottomBanner() {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1600&q=80"
          alt="Amsterdam canals at sunset"
          fill
          priority={false}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/95 via-[var(--primary)]/85 to-[var(--primary)]/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-32 text-center text-white">
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Explore Amsterdam. We&apos;ll take you there.
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          From the canals to the museums, from Schiphol to your hotel door. 
          Book your transfer and start your Amsterdam adventure stress-free.
        </p>
        <Link
          href="/booking"
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-[var(--ink)] font-bold px-8 py-4 rounded-lg text-lg transition hover:bg-orange-500"
        >
          Book Your Ride
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  )
}