import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'About Bajna', href: '#about' },
    { label: 'Connectivity', href: '#connectivity' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top Bar */}
      {!isScrolled && (
        <div className="bg-primary-900/90 text-white text-sm py-2 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <Phone size={14} />
                +91 78958 49990
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                Bajna, Mathura, Uttar Pradesh
              </span>
            </div>
            <span className="text-gold-400 font-medium">Your Trusted Property Partner in Bajna</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-lg ${
              isScrolled ? 'bg-primary-500 text-white' : 'gold-gradient text-white'
            }`}>
              BP
            </div>
            <div>
              <span className={`text-xl font-heading font-bold ${isScrolled ? 'text-primary-500' : 'text-white'}`}>
                Bajna Property
              </span>
              <p className={`text-xs ${isScrolled ? 'text-gray-500' : 'text-white/70'}`}>
                Property Consultancy
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2.5 gold-gradient text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Get Free Consultation
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-primary-500' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t mt-2 fade-in">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-500 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-5 py-3 gold-gradient text-white rounded-lg text-sm font-semibold text-center shadow-lg"
            >
              Get Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
