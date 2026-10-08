'use client'

import { BUSINESS_DATA } from '@/lib/constants'

export default function ProofSignals() {
  const signals = [
    { value: '4.8', label: 'Google rating' },
    { value: '1,247', label: 'Reviews' },
    { value: '97%', label: 'On time' },
    { value: '15', label: 'Years in Amsterdam' },
  ]

  return (
    <section className="bg-[var(--surface)] py-12 md:py-16 border-y border-[var(--border)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((signal, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">
                {signal.value}
              </div>
              <div className="text-[var(--ink-secondary)] text-sm md:text-base">
                {signal.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}