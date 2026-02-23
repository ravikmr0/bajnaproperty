import { CheckCircle, Shield, Eye, FileText, TrendingUp, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: CheckCircle, title: 'Verified Properties', desc: 'Every property listed is personally verified with thorough background checks and site inspections.' },
    { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden costs or charges. What you see is what you pay – complete price transparency guaranteed.' },
    { icon: Eye, title: 'Free Site Visit Assistance', desc: 'We arrange complimentary site visits so you can personally inspect properties before making a decision.' },
    { icon: FileText, title: 'Legal Documentation Support', desc: 'Full support with registry, documentation, and legal verification to ensure secure transactions.' },
    { icon: TrendingUp, title: 'Investment Guidance', desc: 'Expert advice on high-growth areas, market trends, and best investment strategies in Bajna.' },
    { icon: MapPin, title: 'Local Market Expertise', desc: '15+ years of experience in Bajna real estate. We know every street, colony, and price point.' },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
            💼 Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-500 mb-4">
            Why Choose <span className="text-gold-500">Bajna Property</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We're not just property dealers – we're your trusted partners in building your
            real estate portfolio with complete transparency and expert guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="card-hover group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-200"
            >
              <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
