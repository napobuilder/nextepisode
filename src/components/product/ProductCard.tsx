import { useState } from 'react';
import type { Product } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { useCurrency } from '../../contexts/CurrencyContext';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imageUrl];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const openGallery = () => {
    setCurrentImgIndex(0);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <div className="group relative flex flex-col h-full bg-white-sakura/80 border border-sakura-light/50 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        {/* Imagen del Producto */}
        <div className="relative overflow-hidden cursor-pointer" onClick={openGallery} title="Ver detalles fotográficos">
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`w-full h-48 md:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 ${product.isSoldOut ? 'opacity-70 grayscale-[30%]' : ''}`}
          />
          {/* Etiqueta de tipo (ej. Figura, Póster) */}
          <span className="absolute top-3 left-3 bg-white-sakura/90 backdrop-blur-sm shadow-sm text-gray-night text-[10px] font-bold px-2 py-1 rounded-full select-none z-10 uppercase tracking-widest">
            {product.type}
          </span>
          {/* Overlay Agotado (Minimalista) */}
          {product.isSoldOut && (
            <div className="absolute inset-0 bg-gray-night/10 flex items-center justify-center z-20 pointer-events-none">
              <span className="bg-white-sakura/90 backdrop-blur-md text-gray-night font-bold text-sm md:text-base tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
                AGOTADO
              </span>
            </div>
          )}
          {/* Indicador de galería */}
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-gray-night/70 text-white-sakura text-[10px] px-2 py-1 rounded flex gap-1 items-center z-10">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              1/{images.length}
            </div>
          )}
        </div>
        
        {/* Detalles del Producto */}
        <div className="flex-1 flex flex-col p-4">
          <h3 className="text-base font-bold font-display text-gray-night truncate">
            {product.name}
          </h3>
          <p className="text-[11px] uppercase tracking-wider text-gray-night/50 mt-1 mb-2 font-bold">{product.series}</p>
          
          {/* Renderizado de Talla Única / Variantes */}
          {product.variants && (
            <div className="flex gap-2 mb-4">
              {product.variants.map((v) => (
                <span key={v} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-gray-night/20 text-gray-night/70 rounded bg-white-sakura/50">
                  {v}
                </span>
              ))}
            </div>
          )}
          
          {/* Precio y CTA */}
          <div className="mt-auto flex justify-between items-center">
            <span className={`text-lg font-bold ${product.isSoldOut ? 'text-gray-night/40 line-through' : 'text-neon-magenta'}`}>
              {formatPrice(product.price)}
            </span>
            <button 
              onClick={() => !product.isSoldOut && addToCart(product)}
              disabled={product.isSoldOut}
              aria-label={`Añadir ${product.name} al carrito`}
              title={product.isSoldOut ? "Agotado" : "Añadir a carrito"}
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors focus:outline-none ${product.isSoldOut ? 'bg-gray-night/10 text-gray-night/40 cursor-not-allowed' : 'bg-sakura-deep text-white-sakura hover:bg-neon-magenta'}`}
            >
              {product.isSoldOut ? '✕' : '+'}
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox / Overlay Modal */}
      {isGalleryOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-night/95 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setIsGalleryOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 text-white-sakura/50 hover:text-neon-magenta transition-colors focus:outline-none"
            onClick={(e) => { e.stopPropagation(); setIsGalleryOpen(false); }}
            title="Cerrar (o click afuera)"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div className="relative w-full max-w-3xl flex items-center justify-center">
            {images.length > 1 && (
              <button 
                className="absolute left-0 md:-left-16 p-4 bg-transparent text-white-sakura/50 hover:text-neon-magenta transition-colors focus:outline-none"
                onClick={handlePrev}
                title="Anterior"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
            )}
            
            <img 
              src={images[currentImgIndex]} 
              alt={`${product.name} vista ${currentImgIndex + 1}`}
              className="max-h-[85vh] w-auto max-w-full rounded shadow-2xl shadow-black/50 select-none animate-[fadeIn_0.3s_ease-out]"
              onClick={(e) => e.stopPropagation()} 
            />

            {images.length > 1 && (
              <button 
                className="absolute right-0 md:-right-16 p-4 bg-transparent text-white-sakura/50 hover:text-neon-magenta transition-colors focus:outline-none"
                onClick={handleNext}
                title="Siguiente"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            )}
          </div>
          
          {/* Indicadores Inferiores */}
          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-3">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2.5 h-2.5 rounded-full shadow-md transition-all duration-300 ${idx === currentImgIndex ? 'bg-neon-magenta scale-125' : 'bg-white-sakura/30'}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
