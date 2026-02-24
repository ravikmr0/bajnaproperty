import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 mb-8">Latest insights and updates from the real estate market</p>
        </div>
        <Blog />
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPage;
