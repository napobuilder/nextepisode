import type { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col h-full bg-white-sakura/50 border border-sakura-light rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      {/* Imagen del Producto */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        {/* Etiqueta de tipo (ej. Figura, Póster) */}
        <span className="absolute top-2 left-2 bg-gray-night/80 text-white-sakura text-xs font-bold px-2 py-1 rounded">
          {product.type}
        </span>
      </div>
      
      {/* Detalles del Producto */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-base font-bold font-display text-gray-night truncate">
          {product.name}
        </h3>
        <p className="text-sm text-gray-night/70 mb-4">{product.series}</p>
        
        {/* Precio y CTA */}
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-bold text-neon-magenta">
            ${product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(product)}
            aria-label={`Añadir ${product.name} al carrito`}
            className="w-9 h-9 flex items-center justify-center bg-sakura-deep text-white-sakura rounded-full transition-colors hover:bg-neon-magenta"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
