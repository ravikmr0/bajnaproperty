import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Is property in Bajna a good investment?',
      a: 'Yes! Bajna is a rapidly developing area near Mathura with excellent connectivity and infrastructure growth. Land prices have appreciated by over 25% annually in recent years, making it an excellent investment opportunity for both short and long-term investors.',
    },
    {
      q: 'What types of properties are available in Bajna?',
      a: 'We offer residential plots, agricultural land, commercial plots, and ready-to-move houses in various sizes and budgets. All our properties are freehold with clear documentation and government-approved layouts.',
    },
    {
      q: 'What is the starting price for plots in Bajna?',
      a: 'Residential plots in Bajna start from as low as ₹8 Lac onwards for smaller plots (80 sq yards). Premium plots and larger parcels are available at competitive prices. Contact us for the latest pricing.',
    },
    {
      q: 'Do you provide legal documentation support?',
      a: 'Absolutely! We provide complete legal documentation support including title verification, registry assistance, mutation support, and all necessary paperwork. Our legal team ensures 100% secure transactions.',
    },
    {
      q: 'Can I visit the property before buying?',
      a: 'Yes! We offer free site visits for all our listed properties. Our team will personally accompany you, show you the plots, explain the surroundings, and answer all your questions on-site.',
    },
    {
      q: 'How is the connectivity of Bajna?',
      a: 'Bajna enjoys excellent connectivity via NH-2 (Delhi-Agra highway) and state highways connecting to Mathura, Vrindavan, Agra, and Delhi NCR. The area is well-connected by road and rail.',
    },
    {
      q: 'Are the plots freehold or leasehold?',
      a: 'All properties listed by Bajna Property are freehold, meaning you get complete ownership rights. We ensure clear titles and documentation for every plot we sell.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
            ❓ FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-500 mb-4">
            Frequently Asked <span className="text-gold-500">Questions</span>
          </h2>
          <p className="text-gray-600">
            Everything you need to know about property investment in Bajna, Mathura.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-primary-800 pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="text-gold-500 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
