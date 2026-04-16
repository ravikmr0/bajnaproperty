import { useEffect } from 'react';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';
import LeadCaptureSection from '@/components/landing/LeadCaptureSection';
import LocationAdvantageSection from '@/components/landing/LocationAdvantageSection';
import PricingSection from '@/components/landing/PricingSection';
import ProjectHighlightsSection from '@/components/landing/ProjectHighlightsSection';
import SiteHeader from '@/components/landing/SiteHeader';
import VirtualTourSection from '@/components/landing/VirtualTourSection';
import WhatsAppFloat from '@/components/landing/WhatsAppFloat';

const seoConfig = {
  title: 'Bajna Property 3D Virtual Tour | Professional Township Location on Bajna Cut',
  description:
    'Explore Bajna Property with a 3D virtual tour and discover a professional township location at Bajna Cut on the expressway, around 30 minutes from Noida International Airport and connected to Greater Noida, Noida, Delhi, and Gurugram.',
};

function App() {
  useEffect(() => {
    document.title = seoConfig.title;

    const ensureMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    };

    ensureMeta('description', seoConfig.description);
    ensureMeta('theme-color', '#0c0c0e');
  }, []);

  return (
    <div className="bg-stone-950 text-stone-100">
      <SiteHeader />
      <main>
        <HeroSection />
        <VirtualTourSection />
        <ProjectHighlightsSection />
        <LocationAdvantageSection />
        <PricingSection />
        <LeadCaptureSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
