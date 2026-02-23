import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Property Investor, Delhi',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'I bought a plot through Bajna Property 2 years ago and the value has already doubled! The documentation was smooth and completely transparent. Highly recommended for serious investors.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'First-time Buyer, Mathura',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      text: 'As a first-time buyer, I was nervous about the process. The Bajna Property team guided me through every step – from site visit to registration. Their transparency gave me complete confidence.',
      rating: 5,
    },
    {
      name: 'Suresh Agarwal',
      role: 'Business Owner, Agra',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      text: 'Excellent service and professional approach. I purchased a commercial plot that is already giving great returns. Their local market knowledge is unmatched. Thank you team!',
      rating: 5,
    },
    {
      name: 'Meena Devi',
      role: 'Homeowner, Bajna',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      text: 'We built our dream home on a plot we bought from Bajna Property. The pricing was very reasonable and all paperwork was handled professionally. Our family is very happy.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
            ⭐ Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-500 mb-4">
            What Our <span className="text-gold-500">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from real customers who trusted Bajna Property for their real estate needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="card-hover bg-gray-50 rounded-2xl p-6 border border-gray-100 relative"
            >
              <Quote className="text-gold-200 absolute top-4 right-4" size={32} />

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-400"
                />
                <div>
                  <h4 className="font-heading font-semibold text-primary-800">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold-400 fill-gold-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
