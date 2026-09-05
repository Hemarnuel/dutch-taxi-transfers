import type { Metadata } from 'next'
import HeroTrust from '@/components/HeroTrust'
import ProofSignals from '@/components/ProofSignals'
import PricingTransparency from '@/components/PricingTransparency'
import ServiceShowcase from '@/components/ServiceShowcase'
import FAQAccordion from '@/components/FAQAccordion'
import CTAFooter from '@/components/CTAFooter'

export const metadata: Metadata = {
  title: 'Dutch Taxi Transfers - Fixed-Price Airport Taxi & Transfer Service',
  description: 'Reliable fixed-price airport taxi from Amsterdam Schiphol to city center. Professional drivers, 24/7 booking, no hidden fees. €50-€65 guaranteed.',
  keywords: 'airport taxi amsterdam, schiphol transfer, taxi service, airport transfer, amsterdam transportation',
  openGraph: {
    title: 'Dutch Taxi Transfers - Fixed-Price Airport Taxi',
    description: 'Professional airport transfer service from Schiphol to Amsterdam',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl',
  },
}

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero with Trust Signals */}
      <HeroTrust />

      {/* Proof Signals */}
      <ProofSignals />

      {/* Pricing Transparency */}
      <PricingTransparency />

      {/* Service Showcase */}
      <ServiceShowcase />

      {/* FAQ */}
      <FAQAccordion />

      {/* CTA Footer */}
      <CTAFooter />

      {/* Main Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Dutch Taxi Transfers',
            description: 'Fixed-price airport taxi and transfer service in Amsterdam',
            publisher: {
              '@type': 'Organization',
              name: 'Dutch Taxi Transfers',
            },
            mainEntity: {
              '@type': 'Organization',
              name: 'Dutch Taxi Transfers',
              url: 'https://dutchtaxitransfers.nl',
              telephone: '+31 20 308 6885',
            },
          }),
        }}
      />
    </main>
  )
}
