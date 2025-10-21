import { mockProducts } from '../../data/products';
import { ProductCard } from '../product/ProductCard';

// Grid de productos destacados
export const FeaturedProducts = () => {
  const featured = mockProducts.slice(0, 4); // Mostramos solo los primeros 4

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-display text-center mb-8">
        Novedades Destacadas
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
