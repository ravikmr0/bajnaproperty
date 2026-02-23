import { TrendingUp, ArrowDown, ArrowUp, Shield } from 'lucide-react';

export default function MarketOpportunity() {
  const comparisons = [
    { label: 'Entry Cost', value: 'Low', icon: ArrowDown, color: 'text-green-500', bg: 'bg-green-50', desc: 'Starting from ₹8 Lac for quality plots' },
    { label: 'Growth Potential', value: 'High', icon: ArrowUp, color: 'text-blue-500', bg: 'bg-blue-50', desc: '25%+ yearly land appreciation' },
    { label: 'Affordability', value: 'Excellent', icon: TrendingUp, color: 'text-gold-500', bg: 'bg-gold-50', desc: '3x cheaper than nearby cities' },
    { label: 'Investment Security', value: 'Secure', icon: Shield, color: 'text-primary-500', bg: 'bg-primary-50', desc: 'Freehold with clear documents' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
              📊 Market Opportunity
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-500 mb-6 leading-tight">
              Why Smart Investors Choose
              <span className="text-gold-500"> Bajna</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Bajna is emerging as a promising land investment zone with increasing demand and
              limited supply. Early investors can benefit from long-term appreciation as the
              area transforms into a major residential and commercial hub.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With property prices in Bajna still significantly lower than neighboring cities like
              Mathura, Vrindavan, and Agra, now is the perfect time to invest. The infrastructure
              boom and growing connectivity are driving property values upward consistently.
            </p>

            <div className="bg-primary-500 rounded-2xl p-6 text-white">
              <h3 className="font-heading font-bold text-xl mb-2">💡 Investment Insight</h3>
              <p className="text-white/90 leading-relaxed">
                Land purchased in Bajna 5 years ago has already appreciated by over 150%.
                Current market indicators suggest continued strong growth for the next decade.
              </p>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-2 gap-5">
            {comparisons.map((item, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <item.icon className={item.color} size={24} />
                </div>
                <div className={`text-2xl font-heading font-bold ${item.color} mb-1`}>
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-primary-800 mb-1">{item.label}</div>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
