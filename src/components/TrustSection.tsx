'use client'

const trustItems = [
  { icon: '✓', text: 'Fixed pricing — no hidden fees' },
  { icon: '✓', text: 'Professional English-speaking drivers' },
  { icon: '✓', text: 'Flight monitoring included' },
  { icon: '✓', text: '24/7 customer support' },
]

export default function TrustSection() {
  return (
    <section className="bg-[var(--primary)] text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Thousands of Travellers</h2>
          <p className="text-lg text-gray-200">
            See why travelers choose Dutch Taxi Transfers for their Amsterdam journeys
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="flex text-[var(--accent)] text-3xl" aria-label="4.8 out of 5 stars">
              ★★★★★
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-gray-300">Google Rating (500+ reviews)</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <span className="text-[var(--accent)] text-3xl font-bold mb-2">{item.icon}</span>
              <p className="text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}