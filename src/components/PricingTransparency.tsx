'use client'

import { BUSINESS_DATA } from '@/lib/constants'

export default function PricingTransparency() {
  const prices = [
    { route: 'Schiphol → City Centre', price: '€85–€110', note: 'Up to 3 passengers, 45 min wait' },
    { route: 'Schiphol → Amstelveen', price: '€75–€95', note: 'Up to 3 passengers, 45 min wait' },
    { route: 'City Centre → Zuidas / RAI', price: '€45–€65', note: 'Up to 3 passengers' },
    { route: 'Schiphol → Haarlem', price: '€85–€110', note: 'Up to 3 passengers, 45 min wait' },
    { route: 'Hourly disposal (min 2h)', price: '€65–€85 / hr', note: 'Sedan or van, you decide the route' },
  ]

  return (
    <section className="bg-[var(--surface)] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--ink)]">
            Fixed Prices — No Meter Surprises
          </h2>
          <p className="text-lg text-[var(--ink-secondary)]">
            See the total before you book. Flight delays covered, no hidden fees.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="pb-4 font-semibold text-[var(--ink)]">Route</th>
                <th className="pb-4 font-semibold text-[var(--ink)] text-right">Price</th>
                <th className="pb-4 font-semibold text-[var(--ink)]">What&apos;s included</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((item, idx) => (
                <tr key={idx} className="border-b border-[var(--border)]">
                  <td className="py-4 text-[var(--ink)]">{item.route}</td>
                  <td className="py-4 text-right font-bold text-[var(--primary)]">{item.price}</td>
                  <td className="py-4 text-[var(--ink-secondary)]">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/booking"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] text-white font-bold py-4 px-8 text-lg transition hover:bg-blue-700 active:scale-95"
          >
            Get Your Exact Price
          </a>
        </div>
      </div>
    </section>
  )
}