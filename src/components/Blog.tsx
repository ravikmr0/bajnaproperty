import { Calendar, ArrowRight, Clock } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
      category: 'Investment Guide',
      title: 'Top 5 Reasons to Invest in Land in Bajna, Mathura',
      excerpt: 'Discover why Bajna is becoming the top choice for smart real estate investors in the Mathura region. From affordable prices to high appreciation...',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
    },
    {
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80',
      category: 'Market Trends',
      title: 'Property Prices in Mathura: 2025 Forecast',
      excerpt: 'An in-depth analysis of real estate market trends in Mathura district and how Bajna is positioned to deliver the highest returns to investors...',
      date: 'Dec 10, 2024',
      readTime: '7 min read',
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
      category: 'Buying Guide',
      title: 'Complete Guide to Buying Property in Bajna',
      excerpt: 'Everything you need to know before purchasing property in Bajna – from documentation to site visits, legal checks, and registration process...',
      date: 'Dec 5, 2024',
      readTime: '8 min read',
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-gold-50 text-gold-600 rounded-full text-sm font-semibold mb-4">
            📝 Blog & Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary-500 mb-4">
            Latest <span className="text-gold-500">Property Insights</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest real estate trends, investment tips, and property news from Bajna, Mathura.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="card-hover bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2 group-hover:text-gold-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <button className="text-gold-500 hover:text-gold-600 font-semibold text-sm flex items-center gap-1">
                    Read <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
