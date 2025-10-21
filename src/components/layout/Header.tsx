import { useCart } from '../../contexts/CartContext';

export const Header = () => {
  const { openCart, items } = useCart();
  const hasItems = items.length > 0;

  return (
    <header className="sticky top-0 bg-white-sakura/80 backdrop-blur-md z-30 border-b border-sakura-light">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-3 text-gray-night">
                    <span className="font-display font-black text-xl md:text-2xl tracking-tight">NEXT EPISODE</span>
                    <div className="w-4 h-4 bg-neon-magenta rounded-full"></div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a href="#" className="text-gray-night/80 hover:text-neon-magenta px-3 py-2 rounded-md text-sm font-medium">Ropa</a>
                        <a href="#" className="text-gray-night/80 hover:text-neon-magenta px-3 py-2 rounded-md text-sm font-medium">Pósters</a>
                        <a href="#" className="text-gray-night/80 hover:text-neon-magenta px-3 py-2 rounded-md text-sm font-medium">Figuras</a>
                        <a href="#" className="text-gray-night/80 hover:text-neon-magenta px-3 py-2 rounded-md text-sm font-medium">Combos</a>
                    </div>
                </div>
                <div className="flex items-center">
                    <button onClick={openCart} className="relative p-2 rounded-full text-gray-night/80 hover:text-neon-magenta focus:outline-none">
                        <span className="sr-only">Ver carrito</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {hasItems && (
                          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-neon-magenta ring-2 ring-white-sakura"></span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    </header>
  );
};
