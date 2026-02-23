import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, User, IndianRupee, FileText } from 'lucide-react';

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '',
    requirement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! Our team will contact you within 24 hours.');
    setFormData({ name: '', phone: '', budget: '', requirement: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-gold-400 rounded-full text-sm font-semibold mb-4 border border-white/10">
              📞 Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Start Your Property
              <span className="text-gold-400"> Journey Today</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Get expert guidance on the best property options in Bajna, Mathura.
              Our team is ready to help you find the perfect investment opportunity.
            </p>

            {/* Urgency */}
            <div className="bg-gold-500/20 border border-gold-400/30 rounded-xl p-4 mb-8 flex items-center gap-3">
              <Clock className="text-gold-400 flex-shrink-0" size={24} />
              <p className="text-gold-200 font-medium">
                ⚡ Limited plots available. Book your site visit today!
              </p>
            </div>

            {/* Contact Options */}
            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 rounded-xl p-4 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">WhatsApp Us</p>
                  <p className="text-white/60 text-sm">Chat instantly – Quick response guaranteed</p>
                </div>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-4 transition-colors group"
              >
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Now</p>
                  <p className="text-white/60 text-sm">+91 98765 43210 – Available 9 AM to 8 PM</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-xl p-4">
                <div className="w-12 h-12 bg-primary-400 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Visit Our Office</p>
                  <p className="text-white/60 text-sm">Main Market, Bajna, Mathura – 281006</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-heading font-bold text-primary-800 mb-2">
                Get Free Consultation
              </h3>
              <p className="text-gray-500 mb-6">Fill the form below and we'll contact you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <User size={14} /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <Phone size={14} /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <IndianRupee size={14} /> Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select your budget</option>
                    <option>Under ₹10 Lac</option>
                    <option>₹10 - 20 Lac</option>
                    <option>₹20 - 50 Lac</option>
                    <option>₹50 Lac - 1 Crore</option>
                    <option>Above ₹1 Crore</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                    <FileText size={14} /> Your Requirement
                  </label>
                  <textarea
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us what you're looking for (e.g., residential plot, land investment, house...)"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 gold-gradient text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit Enquiry
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-4">
                Your information is 100% secure and will not be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
