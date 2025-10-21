import { Hero } from '../components/ui/Hero';
import { FeaturedProducts } from '../components/ui/FeaturedProducts';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      {/* Aquí irían las categorías principales */}
      <FeaturedProducts />
    </main>
  );
};
