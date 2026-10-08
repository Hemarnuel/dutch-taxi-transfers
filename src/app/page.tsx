import Link from 'next/link'
import HeroTrust from '@/components/HeroTrust'
import ServiceIcons from '@/components/ServiceIcons'
import TrustSection from '@/components/TrustSection'
import BottomBanner from '@/components/BottomBanner'

export const metadata = {
  title: 'Dutch Taxi Transfers - Amsterdam Taxi & Airport Transfers',
  description: 'Your trusted transfer service for Schiphol, Amsterdam and beyond. Book your ride and travel with confidence.',
  keywords: 'taxi Amsterdam, Schiphol airport transfer, Amsterdam airport taxi, private transfers, airport shuttle',
  alternates: {
    canonical: 'https://dutchtaxitransfers.nl',
  },
  openGraph: {
    title: 'Dutch Taxi Transfers - Amsterdam Taxi & Airport Transfers',
    description: 'Your trusted transfer service for Schiphol, Amsterdam and beyond.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroTrust />
      <ServiceIcons />
      <TrustSection />
      <BottomBanner />
    </main>
  )
}