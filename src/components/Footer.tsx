import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'About Bajna', href: '#about-bajna' },
    { label: 'Connectivity', href: '#connectivity' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const categories = [
    'Residential Plots',
    'Commercial Plots',
    'Agricultural Land',
    'Houses & Villas',
    'Investment Properties',
    'Freehold Plots',
  ];

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center font-heading font-bold text-lg text-white">
                BP
              </div>
              <div>
                <span className="text-xl font-heading font-bold text-white">Bajna Property</span>
                <p className="text-xs text-white/50">Property Consultancy</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted property consultancy in Bajna, Mathura. We specialize in residential plots,
              land investment, and commercial properties with complete transparency and expert guidance.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-gold-500/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={18} className="text-white/70 hover:text-gold-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-gold-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Categories */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-gold-400">Property Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat, i) => (
                <li key={i}>
                  <a href="#properties" className="text-white/60 hover:text-gold-400 text-sm transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-gold-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm">Main Market, Bajna,<br />Mathura, UP – 281006</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/60 text-sm hover:text-gold-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:info@bajnaproperty.com" className="text-white/60 text-sm hover:text-gold-400 transition-colors">
                  info@bajnaproperty.com
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28269.82675726419!2d77.6!3d27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Bajna Property Location Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Bajna Property. All rights reserved. | Property Consultancy in Bajna, Mathura
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <ArrowUp size={18} className="text-gold-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
