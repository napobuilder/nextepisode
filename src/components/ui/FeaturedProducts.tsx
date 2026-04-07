import { products } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { useSearch } from '../../contexts/SearchContext';

export const FeaturedProducts = () => {
  const { searchQuery } = useSearch();

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayProducts = searchQuery ? filteredProducts : products.slice(0, 4);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 min-h-[50vh]">
      <h2 className="text-3xl font-display text-center mb-8 text-gray-night tracking-tight">
        {searchQuery ? (
          <>
            Resultados para <span className="text-neon-magenta">"{searchQuery}"</span>
          </>
        ) : (
          "Novedades Destacadas"
        )}
      </h2>
      
      {displayProducts.length === 0 ? (
        <div className="text-center text-gray-night/50 font-bold py-12 border-4 border-dashed border-sakura-light/50 rounded-lg">
           <span className="text-4xl block mb-4">👻</span>
           No se encontraron productos para tu búsqueda.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
