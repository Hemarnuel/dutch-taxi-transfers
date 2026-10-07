import Link from 'next/link'
import HeroTrust from '@/components/HeroTrust'
import ProofSignals from '@/components/ProofSignals'
import PricingTransparency from '@/components/PricingTransparency'
import ServiceShowcase from '@/components/ServiceShowcase'
import FAQAccordion from '@/components/FAQAccordion'
import CTAFooter from '@/components/CTAFooter'
import { BUSINESS_DATA, PROCESS_STEPS } from '@/lib/constants'

export const metadata = {
  title: 'Dutch Taxi Transfers - Executive Chauffeur Service Amsterdam | Schiphol Transfers & Corporate Transport',
  description: 'Dutch Taxi Transfers provides executive chauffeur service for business travelers in Amsterdam. Schiphol transfers, corporate roadshows, event transport — discreet, reliable, on time.',
  keywords: 'chauffeur Amsterdam, executive taxi, business transport Schiphol, corporate car service Netherlands, roadshow transport',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl',
  },
  openGraph: {
    title: 'Dutch Taxi Transfers - Executive Chauffeur Service Amsterdam',
    description: 'Executive chauffeur service for business travelers in Amsterdam. Schiphol transfers, corporate roadshows, event transport.',
    type: 'website',
  },
}

function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Booking in Three Steps
          </h2>
          <p className="text-lg text-gray-600">
            Reserve your executive chauffeur — confirmation typically within 15 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroTrust />
      <ProofSignals />
      <ProcessSection />
      <ServiceShowcase />
      <PricingTransparency />
      <FAQAccordion />
      <CTAFooter />
    </main>
  )
}