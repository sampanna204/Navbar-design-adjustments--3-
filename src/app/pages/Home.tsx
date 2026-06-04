import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { InfoSection } from '../components/InfoSection';
import { StatsSection } from '../components/StatsSection';
import { Footer } from '../components/Footer';
// Imported locally from the current folder
import { About } from './About'; 

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
      <InfoSection />
      <StatsSection />
      <Footer />
    </>
  );
}