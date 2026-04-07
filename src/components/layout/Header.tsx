import { useCart } from '../../contexts/CartContext';
import { useSearch } from '../../contexts/SearchContext';
import { useCurrency } from '../../contexts/CurrencyContext';

export const Header = () => {
  const { openCart, items } = useCart();
  const { searchQuery, setSearchQuery } = useSearch();
  const { currency, setCurrency, isLoading } = useCurrency();
  const hasItems = items.length > 0;

  return (
    <header className="sticky top-0 bg-white-sakura/90 backdrop-blur-lg z-30 border-b border-gray-night/5">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between gap-2 md:gap-8">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center gap-2 text-gray-night cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSearchQuery('')}>
                    <span className="font-display font-black text-xl md:text-2xl tracking-tighter">NEXT EPISODE</span>
                    <div className="w-2.5 h-2.5 bg-neon-magenta rounded-full hidden md:block"></div>
                </div>
                
                {/* Buscador Estilo Cápsula (Pill) */}
                <div className="flex-1 max-w-2xl mx-1 md:mx-4">
                    <div className="relative group flex items-center">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-night/40 hidden sm:flex">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Buscar en la colección..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-night/5 hover:bg-gray-night/10 font-medium pl-4 sm:pl-10 pr-4 py-2.5 text-sm md:text-base text-gray-night placeholder-gray-night/40 focus:outline-none focus:bg-white-sakura focus:ring-2 focus:ring-neon-magenta/30 transition-all rounded-full shadow-inner"
                        />
                    </div>
                </div>
                
                {/* Controles: Currency y Carrito */}
                <div className="flex-shrink-0 flex items-center gap-1 md:gap-3">
                    {/* Toggle Divisa */}
                    <div className="flex items-center bg-gray-night/5 p-1 rounded-full text-[10px] sm:text-xs font-bold font-display text-gray-night/50">
                       <button 
                         onClick={() => setCurrency('USD')}
                         className={`px-2 sm:px-3 py-1.5 rounded-full transition-all ${currency === 'USD' ? 'bg-white-sakura text-neon-magenta shadow-sm' : 'hover:text-gray-night'}`}
                       >
                         $ USD
                       </button>
                       <button 
                         onClick={() => setCurrency('VES')}
                         title="Tasa oficial BCV"
                         className={`px-2 sm:px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${currency === 'VES' ? 'bg-white-sakura text-neon-magenta shadow-sm' : 'hover:text-gray-night'}`}
                       >
                         Bs.
                         {isLoading ? (
                           <span className="w-1.5 h-1.5 bg-neon-magenta rounded-full animate-ping"></span>
                         ) : (
                           <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                         )}
                       </button>
                    </div>

                    <button onClick={openCart} title="Ver carrito" className="relative p-2.5 rounded-full hover:bg-gray-night/10 transition-colors bg-gray-night/5 text-gray-night focus:outline-none">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {hasItems && (
                          <span className="absolute -top-1 -right-1 block min-w-[20px] h-5 px-1 rounded-full bg-neon-magenta text-white-sakura text-[10px] font-bold flex items-center justify-center shadow-sm border-2 border-white-sakura">
                              {items.reduce((acc, i) => acc + i.quantity, 0)}
                          </span>
                        )}
                    </button>
                </div>
            </div>
            
            {/* Categorías (Sin líneas duras) */}
            <div className="hidden sm:flex justify-center mt-4 gap-8 font-medium text-xs tracking-widest text-gray-night/50">
                <a href="#" className="hover:text-neon-magenta transition-colors">ROPA</a>
                <a href="#" className="hover:text-neon-magenta transition-colors">PÓSTERS</a>
                <a href="#" className="hover:text-neon-magenta transition-colors">FIGURAS</a>
            </div>
        </nav>
    </header>
  );
};
