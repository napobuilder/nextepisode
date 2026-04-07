import { Hero } from '../components/ui/Hero';
import { FeaturedProducts } from '../components/ui/FeaturedProducts';
import { useSearch } from '../contexts/SearchContext';

export const HomePage = () => {
  const { searchQuery } = useSearch();

  return (
    <main className="bg-white-sakura min-h-screen">
      {!searchQuery && <Hero />}
      <FeaturedProducts />
    </main>
  );
};
