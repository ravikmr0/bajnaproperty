import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
          <p className="text-gray-600 mb-8">What our satisfied clients say about us</p>
        </div>
        <Testimonials />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TestimonialsPage;
