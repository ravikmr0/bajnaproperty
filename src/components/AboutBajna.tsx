import { TrendingUp, Building, Landmark, Route, Home, Shield } from 'lucide-react';

export default function AboutBajna() {
  const highlights = [
    { icon: TrendingUp, title: 'Rapid Infrastructure Growth', desc: 'Major road developments and urban planning transforming Bajna into a modern township.' },
    { icon: Building, title: 'Increasing Land Demand', desc: 'Growing demand from Delhi NCR investors and local buyers driving property values upward.' },
    { icon: Landmark, title: 'Affordable Investment Entry', desc: 'Property prices in Bajna are significantly lower than neighboring cities with high ROI potential.' },
    { icon: Route, title: 'Nearby Connectivity Routes', desc: 'Excellent road connectivity via NH-2 and state highways to Mathura, Agra, and Delhi NCR.' },
    { icon: Home, title: 'Growing Residential Development', desc: 'New residential colonies and gated communities are rapidly developing across Bajna.' },
    { icon: Shield, title: 'Safe & Secure Investment', desc: 'Government-approved layouts with clear documentation and freehold ownership available.' },
  ];

  return (
    <section id="about-bajna" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
              📍 About Bajna
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-500 mb-6 leading-tight">
              Why Bajna is the Next
              <span className="text-gold-500"> Real Estate Hotspot</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Bajna, located near the holy city of Mathura, is emerging as one of the most promising
              real estate destinations in Uttar Pradesh. With rapid infrastructure development,
              increasing connectivity, and affordable land prices, Bajna offers unmatched investment
              opportunities for both residential and commercial properties.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're a first-time buyer looking for a dream plot or an investor seeking
              high-growth property, Bajna delivers exceptional value with its strategic location
              and development trajectory.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                Near Mathura City
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                NH-2 Connected
              </span>
              <span className="px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium">
                Growing Township
              </span>
              <span className="px-4 py-2 bg-gold-50 text-gold-600 rounded-full text-sm font-medium">
                High ROI Zone
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
              alt="Bajna property development area"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-primary-500">25%+</div>
                  <div className="text-sm text-gray-500">Avg. Yearly Appreciation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="card-hover bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-primary-500" size={24} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
