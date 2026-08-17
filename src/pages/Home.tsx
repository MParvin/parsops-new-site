import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ServicesSection from '@/components/home/ServicesSection';
import WhyUs from '@/components/home/WhyUs';
import ProcessSection from '@/components/home/ProcessSection';
import CtaSection from '@/components/ui/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyUs />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
