// Business data and constants for Dutch Taxi Transfers
export const BUSINESS_DATA = {
  name: 'Dutch Taxi Transfers',
  description: 'Fixed-price airport taxi and city transfer service in Amsterdam and Schiphol',
  phone: '+31 20 308 6885',
  email: 'info@dutchtaxitransfers.nl',
  website: 'https://dutchtaxitransfers.nl',
  
  address: {
    streetAddress: 'Amsterdam, Netherlands',
    addressLocality: 'Amsterdam',
    addressRegion: 'North Holland',
    postalCode: '1012 XX',
    addressCountry: 'NL',
  },
  
  businessHours: [
    { day: 'Monday', opens: '00:00', closes: '23:59' },
    { day: 'Tuesday', opens: '00:00', closes: '23:59' },
    { day: 'Wednesday', opens: '00:00', closes: '23:59' },
    { day: 'Thursday', opens: '00:00', closes: '23:59' },
    { day: 'Friday', opens: '00:00', closes: '23:59' },
    { day: 'Saturday', opens: '00:00', closes: '23:59' },
    { day: 'Sunday', opens: '00:00', closes: '23:59' },
  ],
  
  geo: {
    latitude: 52.3676,
    longitude: 4.9041,
  },

  // Service area
  serviceArea: [
    'Amsterdam',
    'Schiphol Airport',
    'North Holland',
    'Utrecht',
    'Haarlem',
  ],

  // Pricing examples (in EUR)
  pricing: {
    schipholToAmsterdam: { min: 35, max: 45, description: 'Schiphol → Amsterdam City' },
    schipholToDamSquare: { min: 35, max: 45, description: 'Schiphol → Dam Square' },
    schipholToHotel: { min: 40, max: 50, description: 'Schiphol → Hotel' },
    businessHourly: { min: 85, max: 95, description: 'Business Transfer (hourly)' },
  },

  // Trust signals
  trustSignals: {
    yearsInBusiness: 15,
    rating: 4.8,
    reviewCount: 347,
    guarantees: [
      'No hidden fees',
      'Fixed price upfront',
      '24/7 customer support',
      'Professional drivers',
      'Clean, modern vehicles',
      'Luggage handling included',
    ],
  },

  // Social proof examples (sample testimonials)
  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Business Traveler',
      quote: 'Reliable, punctual, and professional. I use them for all my Amsterdam trips.',
      rating: 5,
    },
    {
      name: 'Maria & Family',
      role: 'Family Traveler',
      quote: 'Easy booking, friendly driver, and our kids felt safe. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Robert Schmidt',
      role: 'Budget-Conscious Traveler',
      quote: 'Best value for fixed-price airport transfer. No surprises at the end!',
      rating: 5,
    },
  ],
}

// Service-specific data
export const SERVICES = {
  schipholAirportTaxi: {
    title: 'Schiphol Airport Taxi to Amsterdam',
    slug: 'schiphol-airport-taxi',
    description: 'Fixed-price airport transfer from Amsterdam Schiphol to city center or your hotel',
    keywords: ['Schiphol taxi', 'airport transfer Amsterdam', 'Schiphol to Amsterdam'],
    mainKeyword: 'schiphol airport taxi amsterdam',
  },
  businessTaxi: {
    title: 'Business Taxi Amsterdam',
    slug: 'business-taxi-amsterdam',
    description: 'Professional, reliable business transportation for corporate meetings and events',
    keywords: ['business taxi Amsterdam', 'corporate transfer', 'business transportation'],
    mainKeyword: 'business taxi amsterdam',
  },
  familyTransfer: {
    title: 'Family Transfer Service',
    slug: 'family-transfer-service',
    description: 'Family-friendly transport with child safety features and flexible booking',
    keywords: ['family transfer', 'group taxi', 'family transport Amsterdam'],
    mainKeyword: 'family transfer amsterdam',
  },
  dayTripTransfer: {
    title: 'Day Trip Transfer Service',
    slug: 'day-trip-transfer',
    description: 'Multi-stop service for Amsterdam sightseeing and day trip excursions',
    keywords: ['day trip transfer', 'Amsterdam tour transport', 'sightseeing taxi'],
    mainKeyword: 'amsterdam day trip transfer',
  },
  amsterdamTransport: {
    title: 'Amsterdam City Taxi Service',
    slug: 'amsterdam-transport-booking',
    description: 'General city taxi service for all your Amsterdam transportation needs',
    keywords: ['Amsterdam taxi', 'city transport', 'Amsterdam transportation'],
    mainKeyword: 'amsterdam taxi service',
  },
}

// FAQ content
export const FAQ_ITEMS = [
  {
    question: 'How much is the airport transfer from Amsterdam to Schiphol?',
    answer: 'Our fixed-price airport transfer from Amsterdam city center to Schiphol Airport costs €35–€45 depending on your exact location and vehicle type. The price is set when you book, with no hidden fees.',
  },
  {
    question: 'What happens if my flight is delayed?',
    answer: 'If you are delayed, simply contact our 24/7 customer support team to reschedule your return transfer. There is no additional charge for reasonable delays (up to 2 hours).',
  },
  {
    question: 'Do you provide family or group transport?',
    answer: 'Yes! We offer family-friendly transfers with appropriate child safety features and larger vehicle options for group bookings. Please specify your party size when booking.',
  },
  {
    question: 'How do I book and when do I pay?',
    answer: 'Booking is easy: visit our website, select your route and time, and secure your reservation. Payment can be made online during booking or directly with the driver—your choice.',
  },
  {
    question: 'Are your drivers professional and background-checked?',
    answer: 'Absolutely. All our drivers are professionally trained, licensed, and background-checked. They are courteous, reliable, and knowledgeable about Amsterdam and Schiphol.',
  },
  {
    question: 'Do you charge for luggage or extra stops?',
    answer: 'No hidden fees! Luggage handling is included with every transfer. Extra stops can be arranged for an additional fee—contact us for details.',
  },
  {
    question: 'Can I book for the same day?',
    answer: 'Yes, same-day bookings are available subject to vehicle availability. Simply book online or call us at +31 20 308 6885 for instant confirmation.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and bank transfers. You can pay securely online at booking or cash with the driver.',
  },
]
