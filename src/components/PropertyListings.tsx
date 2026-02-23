import { useState } from 'react';
import { MapPin, Maximize2, IndianRupee, Shield, Eye, MessageCircle, SlidersHorizontal } from 'lucide-react';

interface Property {
  id: number;
  image: string;
  title: string;
  size: string;
  price: string;
  ownership: string;
  location: string;
  type: string;
  status: string;
  featured?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    title: 'Premium Residential Plot',
    size: '100 Sq Yards (900 Sq Ft)',
    price: '₹12 Lac Onwards',
    ownership: 'Freehold',
    location: 'Bajna Town, Mathura',
    type: 'Residential Plot',
    status: 'Ready',
    featured: true,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&q=80',
    title: 'Prime Investment Land',
    size: '200 Sq Yards (1800 Sq Ft)',
    price: '₹20 Lac Onwards',
    ownership: 'Freehold',
    location: 'NH-2 Corridor, Bajna',
    type: 'Land',
    status: 'Ready',
    featured: true,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    title: 'Modern 3BHK House',
    size: '150 Sq Yards (1350 Sq Ft)',
    price: '₹35 Lac Onwards',
    ownership: 'Freehold',
    location: 'Bajna Bypass, Mathura',
    type: 'House',
    status: 'Ready to Move',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?w=600&q=80',
    title: 'Commercial Plot',
    size: '250 Sq Yards (2250 Sq Ft)',
    price: '₹30 Lac Onwards',
    ownership: 'Freehold',
    location: 'Main Road, Bajna',
    type: 'Commercial',
    status: 'Ready',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    title: 'Affordable Residential Plot',
    size: '80 Sq Yards (720 Sq Ft)',
    price: '₹8 Lac Onwards',
    ownership: 'Freehold',
    location: 'Bajna Town, Mathura',
    type: 'Residential Plot',
    status: 'Ready',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    title: 'Luxury Villa Plot',
    size: '300 Sq Yards (2700 Sq Ft)',
    price: '₹45 Lac Onwards',
    ownership: 'Freehold',
    location: 'Green Colony, Bajna',
    type: 'Residential Plot',
    status: 'Ready',
    featured: true,
  },
];

export default function PropertyListings() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Residential Plot', 'Land', 'House', 'Commercial'];

  const filtered = activeFilter === 'All'
    ? properties
    : properties.filter(p => p.type === activeFilter);

  return (
    <section id="properties" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
            🏘️ Featured Properties
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-500 mb-4">
            Explore Properties in <span className="text-gold-500">Bajna</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our curated selection of verified plots, land, and properties in Bajna, Mathura.
            Every listing is verified for clear ownership and documentation.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <SlidersHorizontal size={18} className="text-gray-400" />
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'gold-gradient text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(property => (
            <div
              key={property.id}
              className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 gold-gradient text-white text-xs font-semibold rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                )}
                <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                  {property.status}
                </span>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <span className="text-white font-heading font-bold text-xl">{property.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-heading font-semibold text-primary-800 mb-3">
                  {property.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Maximize2 size={15} className="text-gold-500" />
                    {property.size}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Shield size={15} className="text-gold-500" />
                    Ownership: {property.ownership}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin size={15} className="text-gold-500" />
                    {property.location}
                  </div>
                </div>

                <div className="flex gap-3 pt-3 border-t border-gray-100">
                  <button className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors">
                    <Eye size={16} /> View Details
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 gold-gradient text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    <MessageCircle size={16} /> Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl font-semibold text-lg hover:bg-primary-600 transition-colors shadow-lg"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}
