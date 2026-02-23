import { Search, Home, IndianRupee, Maximize2, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto mb-12 fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Trusted Property Consultancy in Bajna, Mathura
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-6">
            Verified Property in{' '}
            <span className="text-gold-400">Bajna, Mathura</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">
              Invest Smart, Grow Faster
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Buy residential plots, land & investment properties in Bajna with full transparency
            and expert guidance. Start your real estate journey with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#properties"
              className="w-full sm:w-auto px-8 py-4 gold-gradient text-white rounded-xl font-semibold text-lg shadow-2xl hover:opacity-90 transition-all hover:shadow-gold-400/25 hover:shadow-2xl"
            >
              View Available Plots
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-5xl mx-auto fade-in">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <Home size={14} /> Property Type
                </label>
                <select className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm">
                  <option>All Types</option>
                  <option>Residential Plot</option>
                  <option>Commercial Plot</option>
                  <option>Agricultural Land</option>
                  <option>House / Villa</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <IndianRupee size={14} /> Budget
                </label>
                <select className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm">
                  <option>Any Budget</option>
                  <option>Under ₹10 Lac</option>
                  <option>₹10 - 20 Lac</option>
                  <option>₹20 - 50 Lac</option>
                  <option>₹50 Lac+</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <Maximize2 size={14} /> Plot Size
                </label>
                <select className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm">
                  <option>Any Size</option>
                  <option>50-100 Sq Yards</option>
                  <option>100-200 Sq Yards</option>
                  <option>200-500 Sq Yards</option>
                  <option>500+ Sq Yards</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <MapPin size={14} /> Location
                </label>
                <select className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm">
                  <option>All Bajna</option>
                  <option>Bajna Town</option>
                  <option>NH-2 Corridor</option>
                  <option>Bajna Bypass</option>
                  <option>Mathura Road</option>
                </select>
              </div>

              <div className="flex flex-col justify-end">
                <button className="w-full px-6 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: '500+', label: 'Properties Sold' },
            { number: '1000+', label: 'Happy Families' },
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Verified Listings' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
              <div className="text-3xl font-heading font-bold text-gold-400">{stat.number}</div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
