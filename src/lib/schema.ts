import { BUSINESS_DATA } from './constants'

/**
 * Generate LocalBusiness + TaxiService schema markup
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TaxiService'],
    name: BUSINESS_DATA.name,
    description: BUSINESS_DATA.description,
    url: BUSINESS_DATA.website,
    telephone: BUSINESS_DATA.phone,
    email: BUSINESS_DATA.email,
    
    // Address
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_DATA.address.streetAddress,
      addressLocality: BUSINESS_DATA.address.addressLocality,
      addressRegion: BUSINESS_DATA.address.addressRegion,
      postalCode: BUSINESS_DATA.address.postalCode,
      addressCountry: BUSINESS_DATA.address.addressCountry,
    },

    // Service area
    areaServed: BUSINESS_DATA.serviceArea.map((area) => ({
      '@type': 'City',
      name: area,
    })),

    // Geo coordinates
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_DATA.geo.latitude.toString(),
      longitude: BUSINESS_DATA.geo.longitude.toString(),
    },

    // Business hours
    openingHoursSpecification: BUSINESS_DATA.businessHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.day,
      opens: hours.opens,
      closes: hours.closes,
    })),

    // Rating/Review (if available)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_DATA.trustSignals.rating.toString(),
      ratingCount: BUSINESS_DATA.trustSignals.reviewCount.toString(),
    },

    // Organization info
    sameAs: [
      'https://www.google.com/maps/place/Dutch+Taxi+Transfers',
      // Add social profiles here
    ],
  }
}

/**
 * Generate Airport Transfer service schema
 */
export function generateAirportTransferSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Airport Transfer Service',
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_DATA.name,
    },
    areaServed: {
      '@type': 'City',
      name: 'Amsterdam',
    },
    description: 'Fixed-price airport taxi transfer from Amsterdam Schiphol Airport to city center and hotels',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '35-45',
      url: `${BUSINESS_DATA.website}/schiphol-airport-taxi`,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0],
    },
  }
}

/**
 * Generate Offer schema for pricing
 */
export function generateOfferSchema(serviceKey: keyof typeof BUSINESS_DATA.pricing) {
  const pricing = BUSINESS_DATA.pricing[serviceKey as keyof typeof BUSINESS_DATA.pricing]
  if (!pricing) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: pricing.description,
    priceCurrency: 'EUR',
    price: pricing.min.toString(),
    priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    availability: 'https://schema.org/InStock',
    url: BUSINESS_DATA.website,
  }
}

/**
 * Generate Review schema
 */
export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: BUSINESS_DATA.trustSignals.rating.toString(),
    bestRating: '5',
    worstRating: '1',
    ratingCount: BUSINESS_DATA.trustSignals.reviewCount.toString(),
    reviewCount: BUSINESS_DATA.trustSignals.reviewCount.toString(),
  }
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: (index + 1).toString(),
      name: item.name,
      item: item.url,
    })),
  }
}
