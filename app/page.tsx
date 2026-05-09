import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import Benefits from '@/components/home/Benefits';
import CaseStudyPreview from '@/components/home/CaseStudyPreview';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import TrustSection from '@/components/home/TrustSection';
import CTASection from '@/components/home/CTASection';
import Technologies from '@/components/home/Technologies';
import SphereModel from '@/components/home/SphereModel';

export default function Home() {
  return (
    <div className="relative">
      {/* ===== Full-page Sphere Background with image ===== */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-black"
        
      >
        {/* bg-gradient-to-br from-blue-900 via-blue-950 to-black" */}

      </div>

      {/* ===== Foreground Content ===== */}
      <div className="relative z-10">
        <Hero />
        <ServicesOverview />
        <Technologies />
        <Benefits />
        <CaseStudyPreview />
        <PortfolioPreview />
        <TrustSection />
        <CTASection />
      </div>
    </div>
  );
}