import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import LocationHighlight from '@/components/LocationHighlight';
import MarketOpportunity from '@/components/MarketOpportunity';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Bajna</h1>
          <p className="text-gray-600 mb-8">Discover why Bajna is the next big investment destination</p>
        </div>
        <LocationHighlight />
        <MarketOpportunity />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
