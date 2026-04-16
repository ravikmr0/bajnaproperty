import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadCapture from '@/components/LeadCapture';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import FAQ from '@/components/FAQ';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-12">Get in touch with us for any inquiries</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-gold-600" size={24} />
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-gray-600">
                Yamuna Expy, Saeo Patti Banger,<br />
                Bajna, Uttar Pradesh 281203, India
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="text-gold-600" size={24} />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <a href="tel:+917895849990" className="text-gray-600 hover:text-gold-600 transition-colors">
                +91 78958 49990
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-gold-600" size={24} />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <a href="mailto:info@bajnarealestate.com" className="text-gray-600 hover:text-gold-600 transition-colors">
                info@bajnarealestate.com
              </a>
            </div>
          </div>
        </div>
        
        <LeadCapture />
        <FAQ />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
