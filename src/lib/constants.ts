// Business data and constants for Dutch Taxi Transfers — Executive Chauffeur Service Amsterdam
export const BUSINESS_DATA = {
  name: 'Dutch Taxi Transfers',
  description: 'Executive chauffeur service for business travelers in Amsterdam. Schiphol transfers, corporate roadshows, event transport — discreet, reliable, on time.',
  phone: '+31 20 308 6885',
  email: 'bookings@dutchtaxitransfers.nl',
  website: 'https://dutchtaxitransfers.nl',

  address: {
    streetAddress: 'Gustav Mahlerlaan 1212',
    addressLocality: 'Amsterdam',
    addressRegion: 'North Holland',
    postalCode: '1081 LA',
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
    latitude: 52.3382,
    longitude: 4.8732,
  },

  serviceArea: [
    'Amsterdam',
    'Schiphol Airport',
    'Zuidas Business District',
    'RAI Convention Centre',
    'Amsterdam City Centre',
    'Amstelveen',
    'Haarlem',
    'The Hague',
  ],

  pricing: {
    schipholToCity: { min: 85, max: 110, description: 'Schiphol → City Centre / Zuidas' },
    schipholToRAI: { min: 95, max: 120, description: 'Schiphol → RAI Convention Centre' },
    hourlyRate: { min: 95, max: 125, description: 'Executive hourly (min. 3 hours)' },
    halfDay: { min: 380, max: 480, description: 'Half-day disposal (4 hours)' },
    fullDay: { min: 650, max: 850, description: 'Full-day disposal (8 hours)' },
  },

  trustSignals: {
    yearsInBusiness: 15,
    rating: 4.9,
    reviewCount: 847,
    onTimeRate: 98,
    corporateClients: 500,
    guarantees: [
      'Fixed price — confirmed at booking',
      'Flight tracking included',
      '60 min complimentary wait time',
      'Discreet, unbranded vehicles available',
      'GDPR-compliant, no ride data shared',
      'Executive fleet: Mercedes S/V/Class, BMW 7 Series',
    ],
  },

  testimonials: [
    {
      name: 'M. van der Berg',
      role: 'Managing Partner, Amsterdam Law Firm',
      quote: 'Used them for a week of client visits across Zuidas and Schiphol. Every pickup was early, every vehicle immaculate. The discretion matters — unbranded cars, drivers who know when to be silent.',
      rating: 5,
    },
    {
      name: 'S. Andersson',
      role: 'EA to C-Suite, Nordic Tech',
      quote: 'We book their hourly disposal for executive roadshows. The team handles last-minute schedule changes without friction. Reliable in a way that lets me stop worrying about transport.',
      rating: 5,
    },
    {
      name: 'J. de Vries',
      role: 'Event Director, RAI Amsterdam',
      quote: 'Coordinated 40+ VIP transfers for a three-day summit. Zero incidents. Their dispatcher acts as an extension of our team. That level of integration is rare.',
      rating: 5,
    },
  ],

  fleet: [
    {
      name: 'Mercedes S-Class',
      category: 'Executive Sedan',
      capacity: '3 passengers',
      luggage: '2 large + 2 carry-on',
      features: ['Massage seats', 'Privacy glass', 'Wi-Fi', 'Bottled water', 'Phone chargers'],
      image: '/images/fleet/s-class.jpg',
    },
    {
      name: 'Mercedes V-Class',
      category: 'Executive Van',
      capacity: '6 passengers',
      luggage: '6 large + 4 carry-on',
      features: ['Conference seating', 'Privacy partition', 'Wi-Fi', 'Refreshments', 'Work tables'],
      image: '/images/fleet/v-class.jpg',
    },
    {
      name: 'BMW 7 Series',
      category: 'Executive Sedan',
      capacity: '3 passengers',
      luggage: '2 large + 2 carry-on',
      features: ['Executive rear seating', 'Panoramic roof', 'Wi-Fi', 'Ambient lighting', 'Climate zones'],
      image: '/images/fleet/7-series.jpg',
    },
  ],
}

// Service-specific data for business chauffeur — using original slugs
export const SERVICES = {
  schipholAirportTaxi: {
    title: 'Schiphol Airport Transfers',
    slug: 'schiphol-airport-taxi',
    description: 'Executive airport transfer from Schiphol to Amsterdam City Centre, Zuidas, or RAI. Flight-tracked, 60 min wait included.',
    keywords: ['Schiphol chauffeur', 'airport transfer Amsterdam', 'executive airport taxi'],
    mainKeyword: 'schiphol airport chauffeur service',
  },
  corporateRoadshows: {
    title: 'Corporate Roadshows',
    slug: 'business-taxi-amsterdam',
    description: 'Multi-stop hourly disposal for executive schedules across Amsterdam and Randstad. Dedicated vehicle and driver.',
    keywords: ['corporate chauffeur Amsterdam', 'roadshow transport', 'executive hourly hire'],
    mainKeyword: 'corporate roadshow chauffeur amsterdam',
  },
  eventTransport: {
    title: 'Event & Conference Transport',
    slug: 'day-trip-transfer',
    description: 'VIP shuttle coordination for RAI, Beurs van Berlage, and private venues. Fleet scaling, dispatcher integration.',
    keywords: ['event transport Amsterdam', 'conference chauffeur', 'VIP shuttle service'],
    mainKeyword: 'event chauffeur service amsterdam',
  },
  cityTransfer: {
    title: 'Inter-City Transfers',
    slug: 'amsterdam-transport-booking',
    description: 'Amsterdam ⇄ The Hague, Rotterdam, Utrecht, Brussels. Door-to-door, productive travel time.',
    keywords: ['Amsterdam to Hague chauffeur', 'intercity executive transfer', 'business travel Netherlands'],
    mainKeyword: 'intercity chauffeur netherlands',
  },
}

// FAQ content tailored to business clients
export const FAQ_ITEMS = [
  {
    question: 'How does flight tracking work for Schiphol transfers?',
    answer: 'We monitor your flight in real time. If you land early or late, your chauffeur adjusts automatically — no action needed from you. Complimentary wait time is 60 minutes after actual arrival.',
  },
  {
    question: 'Can I book an unbranded vehicle for discretion?',
    answer: 'Yes. All our fleet can be deployed without company branding. Simply request "discreet vehicle" at booking. Drivers wear business attire without logos.',
  },
  {
    question: 'What is included in the hourly disposal rate?',
    answer: 'The hourly rate covers vehicle, chauffeur, fuel, insurance, and standard wait time. Minimum 3 hours. Parking fees and tolls are itemized separately on the invoice.',
  },
  {
    question: 'How do you handle last-minute schedule changes?',
    answer: 'Our dispatch team operates 24/7. Changes communicated via your booking portal or direct line are relayed to your chauffeur in real time. No re-booking fees for adjustments within the same disposal period.',
  },
  {
    question: 'Do you provide invoicing for corporate accounts?',
    answer: 'Yes. We offer consolidated monthly invoicing with VAT breakdown, ride-level detail, and cost-center tagging. Terms: net 14 days. Contact us to set up a corporate account.',
  },
  {
    question: 'What vehicles are available for groups larger than 3?',
    answer: 'The Mercedes V-Class accommodates 6 passengers with executive conference seating. For larger groups, we coordinate multiple V-Class vehicles with a lead dispatcher.',
  },
  {
    question: 'Is Wi-Fi available in all vehicles?',
    answer: 'Yes. Every vehicle in our fleet has 4G/5G mobile Wi-Fi with unlimited data for passengers. Connection details are provided by your chauffeur.',
  },
  {
    question: 'What are your payment terms for corporate clients?',
    answer: 'Corporate accounts: net 14 days on monthly consolidated invoices. Ad-hoc bookings: card at booking or cash/card with chauffeur. All major cards accepted.',
  },
]

// Process steps for the booking flow
export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Request',
    description: 'Submit your itinerary via our booking form, email, or phone. Include flight numbers, addresses, and any special requirements.',
  },
  {
    number: 2,
    title: 'Confirm',
    description: 'Receive a fixed-price confirmation with chauffeur details, vehicle assignment, and direct contact number — typically within 15 minutes.',
  },
  {
    number: 3,
    title: 'Arrive',
    description: 'Your chauffeur arrives 15 minutes early, tracks your flight, and waits up to 60 minutes complimentary. You travel; we handle the rest.',
  },
]