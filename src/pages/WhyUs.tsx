import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h1>
          <p className="text-gray-600 mb-8">Your trusted partner in real estate investment</p>
        </div>
        <WhyChooseUs />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default WhyUs;
