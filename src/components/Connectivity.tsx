import {
  Car,
  Bus,
  Train,
  MapPin,
  Clock,
  ArrowRight,
  Building2,
  Warehouse,
  Hotel,
  Home,
  TrendingUp,
  Zap,
  Route,
  Milestone,
  CircleDot,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const expressways = [
  {
    emoji: '🛣️',
    name: 'Yamuna Expressway',
    description:
      'The main arterial road connecting Jewar Airport to Noida, Greater Noida & Delhi NCR.',
    impact:
      'Bajna plots near Yamuna Expressway benefit from direct airport access, increasing land appreciation and commercial potential.',
  },
  {
    emoji: '🛣️',
    name: 'Delhi–Mumbai Expressway (via Ballabhgarh Link)',
    description:
      'Provides fast connectivity from Haryana, Rajasthan, and Western India.',
    impact:
      'Enhances demand for Bajna commercial property near Jewar Airport.',
  },
  {
    emoji: '🛣️',
    name: 'Eastern Peripheral Expressway (EPE)',
    description:
      'Improves access from Ghaziabad, Meerut, Palwal, and Sonipat.',
    impact:
      'Strengthens logistics and industrial growth around Bajna land investment zone.',
  },
  {
    emoji: '🛣️',
    name: 'Future Link to Ganga Expressway',
    description:
      'A ₹1,200 crore, 74 km proposed corridor connecting the airport to Western UP cities.',
    impact:
      'This future infrastructure will significantly boost Bajna property prices and long-term ROI.',
  },
];

const travelTimes = [
  { from: 'Noida', distance: '~60 km', time: '~55 min' },
  { from: 'Greater Noida', distance: '~40 km', time: '~30–50 min' },
  { from: 'Delhi (South / Central)', distance: '~72 km', time: '~1.5–2 hrs' },
];

const idealFor = [
  { icon: Home, text: 'Residential plots in Bajna' },
  { icon: Building2, text: 'Commercial land near Jewar Airport' },
  { icon: Warehouse, text: 'Warehousing & logistics investment' },
  { icon: Hotel, text: 'Hospitality & rental income projects' },
];

const publicTransport = [
  'UPSRTC & Haryana Roadways provide direct connectivity from NCR hubs.',
  'DTC expansion plans will improve accessibility.',
  'Taxi & ride-hailing services available from the Ground Transportation Centre (GTC).',
];

const railProjects = [
  {
    emoji: '🚄',
    name: 'Ghaziabad–Jewar RRTS (RapidX)',
    description:
      'Planned high-speed regional rail connecting Ghaziabad, Noida, Greater Noida, and Jewar Airport.',
    timeline: 'Mid-late 2020s',
    benefits: [
      'Bajna investment plots',
      'Bajna commercial property',
      'Pre-launch projects near Jewar Airport',
    ],
  },
  {
    emoji: '🚇',
    name: 'Metro / Aqua Line Extension',
    description:
      'Proposed extension of Noida Metro Aqua Line toward the airport region.',
    timeline: 'Under planning',
    benefits: [
      'Bajna land near Jewar Airport even more accessible',
      'Increased investor-friendliness',
    ],
  },
];

const gtcFeatures = [
  'Bus terminals',
  'Taxi & cab pickup zones',
  'Future underground metro / RRTS connectivity',
  'Retail & passenger services',
];

const summaryRows = [
  {
    mode: '🚗 Road',
    status: 'Operational',
    impact: 'Strong appreciation potential',
    color: 'bg-green-100 text-green-700',
  },
  {
    mode: '🚍 Bus',
    status: 'Expanding',
    impact: 'Better residential demand',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    mode: '🚆 Rail',
    status: 'Under development',
    impact: 'Future price growth',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    mode: '🚖 Taxi',
    status: 'Available',
    impact: 'Immediate connectivity advantage',
    color: 'bg-emerald-100 text-emerald-700',
  },
];

/* ------------------------------------------------------------------ */
/*  SEO keywords (hidden but crawlable)                                */
/* ------------------------------------------------------------------ */

const seoKeywords = [
  'Bajna Property near Jewar Airport',
  'Bajna plots near Yamuna Expressway',
  'Bajna land investment',
  'Commercial property in Bajna',
  'Residential plots near Jewar Airport',
  'Bajna real estate project',
  'Bajna Village investment opportunity',
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */

export default function Connectivity() {
  return (
    <section
      id="connectivity"
      className="relative overflow-hidden"
      aria-label="Connectivity and transport infrastructure near Bajna property and Jewar Airport"
    >
      {/* Hidden SEO paragraph – visible to crawlers */}
      <p className="sr-only">
        {seoKeywords.join(', ')}. Discover the fastest road, rail, bus & taxi
        connectivity from Bajna Village to Noida International Airport (Jewar
        Airport). Yamuna Expressway, Delhi-Mumbai Expressway, Eastern Peripheral
        Expressway, Ganga Expressway link, Ghaziabad–Jewar RRTS RapidX, Noida
        Metro Aqua Line extension, Ground Transportation Centre (GTC).
      </p>

      {/* ============================================================ */}
      {/*  HERO BANNER                                                   */}
      {/* ============================================================ */}
      <div className="relative py-20 lg:py-28 bg-primary-500 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1400&q=60')] bg-cover bg-center opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-gold-400 rounded-full text-sm font-semibold mb-4 border border-white/10">
            🛣️ Connectivity & Accessibility
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
            Road Connectivity —{' '}
            <span className="text-gold-400">
              Fastest&nbsp;&amp;&nbsp;Most Accessible
            </span>{' '}
            for Bajna Property Near Jewar&nbsp;Airport
          </h1>
          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-relaxed">
            The <strong>Noida International Airport (Jewar Airport)</strong> is
            rapidly transforming <strong>Bajna Village</strong> into a prime real
            estate hotspot. Bajna Property near Yamuna Expressway enjoys direct
            and seamless road connectivity, making it one of the most promising
            investment zones in NCR.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  1 · EXPRESSWAYS & HIGHWAYS                                   */}
      {/* ============================================================ */}
      <div className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 text-primary-500 rounded-full text-sm font-semibold mb-3">
              <Route size={16} /> Section 1
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              🚦 Expressways &amp; Highways Boosting{' '}
              <span className="text-gold-500">Bajna Real Estate Value</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expressways.map((item, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-7 border border-navy-100 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="text-lg font-heading font-bold text-primary-700">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <p className="flex items-start gap-2 text-primary-600 font-medium text-sm">
                  <ArrowRight
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-gold-500"
                  />
                  {item.impact}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  TRAVEL TIMES TABLE                                           */}
      {/* ============================================================ */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-3">
              ⏱️ Typical Road Travel Times{' '}
              <span className="text-gold-500">
                (Ideal for Bajna Property Buyers)
              </span>
            </h2>
          </div>

          {/* Responsive table */}
          <div className="overflow-x-auto rounded-2xl border border-navy-100 shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-500 text-white">
                  <th className="px-6 py-4 font-semibold text-sm">From</th>
                  <th className="px-6 py-4 font-semibold text-sm">Distance</th>
                  <th className="px-6 py-4 font-semibold text-sm">
                    Est. Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {travelTimes.map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? 'bg-white' : 'bg-navy-50'
                    } border-t border-navy-100`}
                  >
                    <td className="px-6 py-4 font-medium text-navy-900">
                      {row.from}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.distance}</td>
                    <td className="px-6 py-4 text-gray-600">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-gray-500 text-center">
            📌 <em>Travel time may vary depending on traffic conditions.</em>
          </p>

          {/* Proximity callout */}
          <div className="mt-10 bg-gold-50 border border-gold-300/40 rounded-2xl p-6 sm:p-8">
            <p className="text-navy-800 font-medium leading-relaxed mb-5">
              💡 Because <strong>Bajna Village</strong> is located very close to
              Jewar Airport, travel time from Bajna to the airport terminal will
              be <strong>minimal</strong> — making it ideal for:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {idealFor.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm"
                >
                  <item.icon size={20} className="text-gold-500 flex-shrink-0" />
                  <span className="text-navy-800 font-medium text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  2 · BUS & PUBLIC TRANSPORT                                   */}
      {/* ============================================================ */}
      <div className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80"
                alt="Public bus transport near Bajna Jewar Airport connectivity"
                className="rounded-2xl shadow-2xl w-full h-[380px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 text-primary-500 rounded-full text-sm font-semibold mb-3">
                <Bus size={16} /> Section 2
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                🚌 Bus &amp; Public Transport —{' '}
                <span className="text-gold-500">Supporting Bajna Growth</span>
              </h2>

              <ul className="space-y-5 mb-6">
                {publicTransport.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleDot
                      size={18}
                      className="text-gold-500 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="flex items-start gap-2 bg-white rounded-xl px-5 py-4 shadow-sm border border-navy-100 text-primary-700 font-medium text-sm">
                <ArrowRight
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-gold-500"
                />
                Improved public transport increases demand for{' '}
                <strong>Bajna residential plots near Jewar Airport</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  3 · FUTURE RAIL CONNECTIVITY                                 */}
      {/* ============================================================ */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 text-primary-500 rounded-full text-sm font-semibold mb-3">
              <Train size={16} /> Section 3
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              🚆 Future Rail Connectivity —{' '}
              <span className="text-gold-500">
                Game Changer for Bajna Property
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {railProjects.map((rail, i) => (
              <article
                key={i}
                className="bg-navy-50 rounded-2xl p-7 border border-navy-100 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{rail.emoji}</span>
                  <h3 className="text-lg font-heading font-bold text-primary-700">
                    {rail.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-2">{rail.description}</p>
                <p className="text-sm text-gold-600 font-semibold mb-4 flex items-center gap-1">
                  <Clock size={14} /> Expected: {rail.timeline}
                </p>
                <p className="text-sm font-medium text-primary-600 mb-2">
                  Once operational, it will dramatically increase demand for:
                </p>
                <ul className="space-y-2">
                  {rail.benefits.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <Zap size={14} className="text-gold-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  4 · GROUND TRANSPORTATION CENTRE (GTC)                      */}
      {/* ============================================================ */}
      <div className="py-20 bg-primary-500 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-gold-400 rounded-full text-sm font-semibold mb-3 border border-white/10">
              🧳 Section 4
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold leading-tight mb-4">
              Ground Transportation Centre{' '}
              <span className="text-gold-400">(GTC)</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              The airport's multimodal hub designed for seamless passenger
              transfers — a direct benefit for{' '}
              <strong>Bajna real estate projects near Airport Zone</strong>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            {gtcFeatures.map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 rounded-xl px-5 py-4 backdrop-blur-sm border border-white/10"
              >
                <Milestone size={18} className="text-gold-400 flex-shrink-0" />
                <span className="text-white/90 text-sm font-medium">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  SUMMARY TABLE                                                */}
      {/* ============================================================ */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-3">
              📍 In Summary — Why{' '}
              <span className="text-gold-500">
                Bajna Property is Strategically Located
              </span>
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-navy-100 shadow-md">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary-500 text-white">
                  <th className="px-6 py-4 font-semibold text-sm">Mode</th>
                  <th className="px-6 py-4 font-semibold text-sm">Status</th>
                  <th className="px-6 py-4 font-semibold text-sm">
                    Impact on Bajna Property
                  </th>
                </tr>
              </thead>
              <tbody>
                {summaryRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? 'bg-white' : 'bg-navy-50'
                    } border-t border-navy-100`}
                  >
                    <td className="px-6 py-4 font-medium text-navy-900">
                      {row.mode}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${row.color}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  SEO CTA BANNER                                               */}
      {/* ============================================================ */}
      <div className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-navy-100">
            <TrendingUp
              size={40}
              className="mx-auto text-gold-500 mb-5"
            />
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-4">
              🔥 Invest in <span className="text-gold-500">Bajna Property</span>{' '}
              Before Prices Skyrocket
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              With Yamuna Expressway operational, RRTS &amp; Metro under
              development, and the Jewar Airport nearing completion — Bajna
              Village offers an unmatched investment opportunity. Residential
              plots, commercial land, warehousing &amp; hospitality projects —
              all set to deliver exceptional ROI.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-white rounded-xl text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Structured Data – JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Road Connectivity — Fastest & Most Accessible for Bajna Property Near Jewar Airport',
            description:
              'Complete connectivity guide covering Yamuna Expressway, Delhi-Mumbai Expressway, EPE, Ganga Expressway, RRTS, Metro Aqua Line, and GTC for Bajna property investors near Noida International Airport.',
            keywords: seoKeywords.join(', '),
            author: {
              '@type': 'Organization',
              name: 'Bajna Property',
              url: 'https://bajnaproperty.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Bajna Property',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://bajnaproperty.com/#connectivity',
            },
          }),
        }}
      />
    </section>
  );
}
