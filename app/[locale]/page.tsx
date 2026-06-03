import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Modules from '@/components/Modules';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import Roadmap from '@/components/Roadmap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="bg-[#080e1a]">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Features />
        <Comparison />
        <Pricing />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
