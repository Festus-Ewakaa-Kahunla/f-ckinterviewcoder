import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
