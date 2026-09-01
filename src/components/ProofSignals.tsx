'use client'

export interface ProofSignal {
  label: string
  value: string
  sublabel?: string
  icon?: string
}

interface ProofSignalsProps {
  signals?: ProofSignal[]
}

export default function ProofSignals({ signals }: ProofSignalsProps) {
  const defaultSignals: ProofSignal[] = [
    { label: 'Customer Rating', value: '4.8/5', sublabel: '347 reviews' },
    { label: 'Years in Service', value: '15+', sublabel: 'trusted experience' },
    { label: 'Daily Transfers', value: '200+', sublabel: 'professional expertise' },
    { label: 'Fleet Vehicles', value: 'Modern', sublabel: 'well-maintained' },
  ]

  const displaySignals = signals || defaultSignals

  return (
    <section className="bg-gray-50 py-12 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900">
          Why Travelers Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {displaySignals.map((signal, idx) => (
            <div key={idx} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {signal.value}
              </div>
              <p className="font-semibold text-gray-900 mb-1">{signal.label}</p>
              {signal.sublabel && (
                <p className="text-sm text-gray-600">{signal.sublabel}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
