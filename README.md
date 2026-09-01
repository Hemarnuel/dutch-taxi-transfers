# Dutch Taxi Transfers - Next.js Project

A modern, SEO-optimized Next.js website for Dutch Taxi Transfers airport transfer service in Amsterdam/Schiphol.

## Project Overview

This project implements the major redesign recommended in the SEO audit (health score 63/100). Focus areas:

1. **Phase 1: Foundation & Architecture** ✅
   - [ ] Structured data markup (LocalBusiness, TaxiService, AirportTransfer, Offer schema)
   - [ ] Technical SEO foundation (canonical tags, robots.txt, sitemap)
   - [ ] Multi-persona messaging architecture

2. **Phase 2: Homepage Content Redesign**
   - [ ] Above-the-fold redesign with trust signals
   - [ ] Pricing transparency sections
   - [ ] FAQ and objection handling

3. **Phase 3: Landing Pages & Internal Linking**
   - [ ] 5 dedicated service landing pages
   - [ ] Internal linking strategy implementation

4. **Phase 4: Technical Implementation**
   - [ ] Component-based architecture
   - [ ] Schema validation pipeline

5. **Phase 5: Verification & Launch**
   - [ ] QA and validation
   - [ ] Launch and monitoring

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with schema markup
│   ├── page.tsx                # Homepage
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # XML sitemap generation
│   ├── schiphol-airport-taxi/
│   │   └── page.tsx            # Schiphol service landing page
│   ├── business-taxi/
│   │   └── page.tsx            # Business travel landing page
│   ├── family-transfer/
│   │   └── page.tsx            # Family transfer landing page
│   ├── day-trip-transfer/
│   │   └── page.tsx            # Day trip service landing page
│   └── amsterdam-transport/
│       └── page.tsx            # General city taxi landing page
├── components/
│   ├── HeroTrust.tsx           # Hero section with proof anchors
│   ├── PersonaNav.tsx          # Multi-persona CTA navigation
│   ├── PricingTransparency.tsx # Fare examples and pricing
│   ├── ProofSignals.tsx        # Testimonials, fleet, credentials
│   ├── ServiceShowcase.tsx     # Links to service pages
│   ├── FAQAccordion.tsx        # FAQ section
│   ├── CTAFooter.tsx           # Final booking prompt
│   └── SchemaMarkup.tsx        # Reusable schema component
├── lib/
│   ├── schema.ts               # Schema markup generators
│   └── constants.ts            # Business data (phone, hours, etc.)
└── styles/
    └── globals.css             # Global Tailwind styles
```

## Schema Markup Strategy

All pages include:
- **LocalBusiness** with areaServed, serviceArea, businessAddress, telephone, openingHours
- **TaxiService** / **AirportTransfer** with service descriptions
- **Offer** schema with pricing, availability
- **Review** schema (when testimonials available)
- **FAQPage** schema on homepage

Validation: Use [Google Rich Results Test](https://search.google.com/test/rich-results)

## SEO Key Metrics

- **Current Health Score:** 63/100
- **Target Health Score:** 85+/100
- **Key Issues Addressed:**
  - ✅ Missing schema markup
  - ✅ Thin content → unique service pages
  - ✅ Weak technical SEO → canonical, sitemap, robots.txt
  - ✅ Limited trust signals → testimonials, credentials, pricing
  - ✅ Placeholder links → valid internal linking

## Content Strategy

### Homepage Personas
1. **Airport Traveler** - Fixed price, pickup clarity, driver reassurance
2. **Business Traveler** - Reliability, punctuality, professional fleet
3. **Family/Tourist** - Ease, baggage, family-friendly messaging
4. **Budget-Conscious** - Transparent fares, no hidden fees

### Keyword Targeting
- Primary: "taxi amsterdam schiphol", "airport taxi amsterdam"
- Secondary: "schiphol transfer amsterdam", "amsterdam airport taxi", "business taxi amsterdam"
- Long-tail: Service-specific phrases for each landing page

## Deployment

This project is optimized for deployment on:
- Vercel (recommended)
- Netlify
- Self-hosted Node.js

### Vercel Deployment

```bash
npm i -g vercel
vercel
```

## Performance Targets

- **Lighthouse Score:** 90+
- **Core Web Vitals:**
  - LCP: < 2.5s
  - CLS: < 0.1
  - FID: < 100ms

## Monitoring & Analytics

- Google Search Console integration for indexation tracking
- GA4 setup for conversion tracking (bookings, phone calls)
- Monthly SEO metrics review

## Future Enhancements

- [ ] Review aggregation and display
- [ ] Dynamic pricing calculator
- [ ] Multi-language support (EN, NL)
- [ ] Booking system integration
- [ ] Fleet vehicle showcase
- [ ] Driver profile pages

## Contributing

See CONTRIBUTING.md for contribution guidelines.

## License

MIT
