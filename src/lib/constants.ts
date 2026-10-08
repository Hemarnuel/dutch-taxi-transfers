// Business data and constants for Dutch Taxi Transfers — Regular Passenger Taxi Service Amsterdam
export const BUSINESS_DATA = {
  name: 'Dutch Taxi Transfers',
  description: 'Your trusted transfer service for Schiphol, Amsterdam and beyond. Book your ride and travel with confidence.',
  phone: '+31 020 308 6885',
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
    'Amsterdam City Centre',
    'Amstelveen',
    'Haarlem',
    'The Hague',
  ],

  pricing: {
    schipholToCity: { min: 85, max: 110, description: 'Schiphol → City Centre' },
    schipholToRAI: { min: 95, max: 120, description: 'Schiphol → RAI Convention Centre' },
    cityToCity: { min: 45, max: 75, description: 'City Centre → Zuidas / RAI / Amstelveen' },
    hourlyRate: { min: 65, max: 85, description: 'Hourly disposal (min. 2 hours)' },
  },

  trustSignals: {
    yearsInBusiness: 15,
    rating: 4.8,
    reviewCount: 500,
    onTimeRate: 97,
    guarantees: [
      'Fixed pricing — no hidden fees',
      'Professional English-speaking drivers',
      'Flight monitoring included',
      '24/7 customer support',
    ],
  },

  testimonials: [
    {
      name: 'Emma van Dijk',
      role: 'Frequent traveler, Amsterdam',
      quote: 'Used them for Schiphol runs for years. Price is fixed at booking, driver waits if flight is delayed. Never had a surprise charge.',
      rating: 5,
    },
    {
      name: 'Marco Rossi',
      role: 'Tourist from Milan',
      quote: 'Booked from my phone at the airport. Driver was there in 5 minutes, spoke English, knew exactly where our hotel was. Easy.',
      rating: 5,
    },
    {
      name: 'Lisa de Jong',
      role: 'Amsterdam resident',
      quote: 'My go-to for airport trips. Clean cars, on time, and the app saves my addresses. Much better than hailing a random cab.',
      rating: 5,
    },
  ],

  fleet: [
    {
      name: 'Standard Sedan',
      category: '1–3 passengers',
      capacity: '3 passengers',
      luggage: '2 large + 2 carry-on',
      features: ['Air conditioning', 'Phone chargers', 'Water'],
      image: '/images/fleet/standard.jpg',
    },
    {
      name: 'Comfort Van',
      category: '4–7 passengers',
      capacity: '7 passengers',
      luggage: '6 large + 4 carry-on',
      features: ['Extra legroom', 'Air conditioning', 'Phone chargers', 'Water'],
      image: '/images/fleet/van.jpg',
    },
    {
      name: 'Premium Sedan',
      category: '1–3 passengers (premium)',
      capacity: '3 passengers',
      luggage: '2 large + 2 carry-on',
      features: ['Leather seats', 'Extra legroom', 'Wi-Fi', 'Water', 'Phone chargers'],
      image: '/images/fleet/premium.jpg',
    },
  ],
}

// Service-specific data for regular passengers — using original slugs
export const SERVICES = {
  schipholAirportTaxi: {
    title: 'Schiphol Airport Transfers',
    slug: 'schiphol-airport-taxi',
    description: 'Fixed-price airport transfer from Schiphol to Amsterdam City Centre, Amstelveen, Haarlem. Flight-tracked, 45 min wait included.',
    keywords: ['Schiphol taxi', 'airport transfer Amsterdam', 'Schiphol airport taxi'],
    mainKeyword: 'schiphol airport taxi service',
  },
  cityTransfer: {
    title: 'City Rides & Transfers',
    slug: 'amsterdam-transport-booking',
    description: 'Point-to-point rides across Amsterdam, Amstelveen, Haarlem, The Hague. Book now or schedule ahead.',
    keywords: ['taxi Amsterdam', 'city transport Amsterdam', 'book taxi Amsterdam'],
    mainKeyword: 'amsterdam taxi booking',
  },
  dayTrip: {
    title: 'Day Trips & Excursions',
    slug: 'day-trip-transfer',
    description: 'Private day trips to Zaanse Schans, Keukenhof, Volendam, Utrecht. Driver waits, returns you same day.',
    keywords: ['day trip Amsterdam', 'private tour Netherlands', 'day excursion from Amsterdam'],
    mainKeyword: 'amsterdam day trip taxi',
  },
  familyTransfer: {
    title: 'Family & Group Transport',
    slug: 'family-transfer-service',
    description: 'Vans for 4–7 passengers with luggage. Child seats available on request. Stress-free airport runs.',
    keywords: ['family taxi Amsterdam', 'group transport Schiphol', 'van taxi Amsterdam'],
    mainKeyword: 'family taxi service amsterdam',
  },
}

// FAQ content for regular passengers
export const FAQ_ITEMS = [
  {
    question: 'How do I book a taxi from Schiphol Airport?',
    answer: 'Book online or call +31 020 308 6885. We track your flight — if it\'s delayed, your driver waits up to 45 minutes free. You\'ll get a confirmation with driver details.',
  },
  {
    question: 'Are prices fixed or metered?',
    answer: 'Fixed prices. You see the total before you book — no meter, no surprises. Airport transfers include wait time and all fees.',
  },
  {
    question: 'Can I book a child seat?',
    answer: 'Yes. Request a child seat when booking (infant, toddler, or booster). No extra charge. We\'ll have it installed when your driver arrives.',
  },
  {
    question: 'What if my flight is early or late?',
    answer: 'We track every flight in real time. Your driver adjusts automatically — early arrival means they\'re there early; delays up to 45 min are covered at no extra cost.',
  },
  {
    question: 'Do you accept card payments?',
    answer: 'Yes. Pay by card in the car, or prepay online. All major cards, Apple Pay, Google Pay accepted. Cash also accepted.',
  },
  {
    question: 'Can I book for someone else?',
    answer: 'Absolutely. Enter their pickup location, destination, and phone number. We\'ll send them the driver details directly.',
  },
]

// Process steps for the booking flow
export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Enter trip details',
    description: 'Pickup, destination, date/time, passengers. See fixed price instantly.',
  },
  {
    number: 2,
    title: 'Confirm & pay',
    description: 'Enter contact details. Pay now or in the car. Instant confirmation with driver info.',
  },
  {
    number: 3,
    title: 'Ride',
    description: 'Driver arrives on time, helps with luggage, takes the best route. You arrive relaxed.',
  },
]