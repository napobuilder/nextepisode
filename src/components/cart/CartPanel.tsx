import { useCart } from '../../contexts/CartContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import { CartItem } from './CartItem';
import { generateWhatsAppLink } from '../../utils/whatsapp';

// Definimos las props que el componente recibirá
interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartPanel = ({ isOpen, onClose }: CartPanelProps) => {
  const { items, total, updateQuantity, removeFromCart } = useCart();
  const { currency, bcvRate, formatPrice } = useCurrency();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const url = generateWhatsAppLink(items, total, currency, bcvRate, formatPrice);
    window.open(url, '_blank');
  };

  const handleIncrease = (id: string) => updateQuantity(id, 1);
  const handleDecrease = (id: string) => updateQuantity(id, -1);

  return (
    <>
      {/* Overlay Oscuro */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-gray-night/50 z-40 transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      
      {/* El Panel Lateral */}
      <aside 
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-white-sakura z-50 shadow-xl
                    transform transition-transform duration-300 ease-in-out flex flex-col
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header del Carrito */}
          <div className="flex justify-between items-center p-4 border-b border-sakura-light">
            <h2 className="text-xl font-display">Tu Carrito</h2>
            <button onClick={onClose} className="rounded-full p-2 bg-gray-night/5 hover:bg-gray-night/10 text-gray-night/70 hover:text-neon-magenta focus:outline-none transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          {/* Lista de Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col flex-1 h-full items-center justify-center text-gray-night/60">
                <p className="font-bold">Tu carrito está vacío</p>
              </div>
            ) : (
              items.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onRemove={removeFromCart}
                />
              ))
            )}
          </div>
          
          {/* Footer y Checkout */}
          <div className="p-4 border-t border-sakura-light bg-white-sakura">
            <div className="flex justify-between items-end text-lg font-bold mb-4 text-gray-night">
              <span>Total:</span>
              <div className="flex flex-col items-end">
                 <span className="text-xl md:text-2xl text-neon-magenta">{formatPrice(total)}</span>
                 {currency === 'VES' && (
                   <span className="text-[10px] text-gray-night/40 uppercase tracking-widest font-black">
                     TASA BCV OFICIAL
                   </span>
                 )}
              </div>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={items.length === 0}
              className={`w-full py-3.5 font-bold rounded-full transition-transform transform flex items-center justify-center gap-2
                ${items.length === 0 
                  ? 'bg-gray-night/20 text-gray-night/40 cursor-not-allowed' 
                  : 'bg-[#25D366] text-white cursor-pointer hover:scale-[1.02] shadow-sm shadow-[#25D366]/20'
                }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Pedir por WhatsApp
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
