import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import ProblemSolving from '@/components/sections/ProblemSolving';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ProblemSolving />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
