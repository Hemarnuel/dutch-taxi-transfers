'use client'

import Link from 'next/link'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
      </svg>
    ),
    title: 'Airport Transfers',
    href: '/schiphol-airport-taxi',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 0-5-3-5-2.76 0-5 2.24-5 5 0 1.53.63 2.92 1.64 3.92" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Amsterdam Taxi',
    href: '/amsterdam-transport-booking',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.375 2.25c-1.182-1.182-3.098-1.182-4.28 0l-3.976 4.128L16.176 14.25l8.503-8.503-4.031-4.128zM4.21 16.819a4.5 4.5 0 00-1.897 6.364l.026.027a4.5 4.5 0 006.363 0 4.5 4.5 0 00-1.897-6.363l-.026-.026zM12 9v3.75m0 0v2.25m-1.5-2.25h3m0 0H9m3-3.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Private Transfers',
    href: '/amsterdam-transport-booking',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4-6h4a2 2 0 012 2v2m-6 2v8a2 2 0 002 2h4a2 2 0 002-2v-8" />
      </svg>
    ),
    title: 'Business Transportation',
    href: '/business-taxi-amsterdam',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.227l-1.591-1.591" />
      </svg>
    ),
    title: 'Day Trips',
    href: '/day-trip-transfer',
  },
]

export default function ServiceIcons() {
  return (
    <section className="bg-[var(--bg)] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group flex flex-col items-center text-center p-6 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] rounded-full mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">
                {service.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}