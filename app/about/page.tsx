import Mission from '@/components/about/Mission';
import VisionPhilosophy from '@/components/about/VisionPhilosophy';
import Founders from '@/components/about/Founders';
import Values from '@/components/about/Values';
import WhyDifferent from '@/components/about/WhyDifferent';
import AboutHero from '@/components/about/AboutHero';
export default function AboutPage() {
  return (
    <>
      <AboutHero/>
      <Founders />
      <Mission />
      <VisionPhilosophy />
      <Values />
      <WhyDifferent />
    </>
  );
}