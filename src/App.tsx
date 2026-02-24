import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LocationHighlight from '@/components/LocationHighlight';
import Connectivity from '@/components/Connectivity';
import PropertyListings from '@/components/PropertyListings';
import WhyChooseUs from '@/components/WhyChooseUs';
import MarketOpportunity from '@/components/MarketOpportunity';
import LeadCapture from '@/components/LeadCapture';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LocationHighlight />
      <Connectivity />
      <PropertyListings />
      <WhyChooseUs />
      <MarketOpportunity />
      <Testimonials />
      <LeadCapture />
      <Blog />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
