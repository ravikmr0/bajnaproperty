import { MapPin, Shield, TreePine, Landmark, FileCheck } from 'lucide-react';

export default function LocationHighlight() {
  const benefits = [
    { icon: MapPin, text: 'Strategic location near Mathura city with excellent road connectivity' },
    { icon: TreePine, text: 'Peaceful & developing residential zone perfect for families' },
    { icon: Landmark, text: 'Ideal for long-term land investment with proven appreciation' },
    { icon: Shield, text: 'Freehold plots available with government-approved layouts' },
    { icon: FileCheck, text: 'Clear documentation support with legal verification' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-primary-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map / Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80"
              alt="Bajna Mathura development zone aerial view"
              className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
              <div className="w-14 h-14 gold-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={28} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-primary-800">Bajna – Mathura Growth Zone</h4>
                <p className="text-sm text-gray-600">Prime investment corridor on NH-2</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-gold-400 rounded-full text-sm font-semibold mb-4 border border-white/10">
              🗺️ Location Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Bajna – Mathura
              <span className="text-gold-400"> Growth Zone</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Situated on the Mathura-Agra corridor, Bajna enjoys prime positioning
              that makes it an ideal destination for property investment. The area
              is witnessing unprecedented growth with new developments every month.
            </p>

            <div className="space-y-5">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 bg-gold-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/30 transition-colors">
                    <item.icon className="text-gold-400" size={22} />
                  </div>
                  <p className="text-white/90 text-base leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
