// Definimos las props que el componente recibirá
interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartPanel = ({ isOpen, onClose }: CartPanelProps) => {
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
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header del Carrito */}
          <div className="flex justify-between items-center p-4 border-b border-sakura-light">
            <h2 className="text-xl font-display">Tu Carrito</h2>
            <button onClick={onClose} className="text-gray-night/70 hover:text-neon-magenta">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          {/* Lista de Items (Aquí iría el map de 'items') */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* --- INICIO: Placeholder para CartItem --- */}
            <div className="flex items-center space-x-4">
                <img src="https://placehold.co/80x80/2E2A3D/FFFBFB?text=NERV" alt="Camiseta NERV" className="w-16 h-16 rounded-md object-cover"/>
                <div className="flex-1">
                    <p className="font-bold text-sm">Camiseta Bordada "NERV"</p>
                    <p className="text-xs text-gray-night/60">Cantidad: 1</p>
                </div>
                <p className="font-bold text-sm">$20.00</p>
            </div>
            {/* --- FIN: Placeholder para CartItem --- */}
            
            {/* Alerta de Bundle! */}
            <div className="mt-4 p-3 bg-sakura-light/70 rounded-lg text-center">
              <p className="text-sm font-bold text-sakura-deep">
                ¡Estás a 1 póster de activar el combo 3x$5! 
              </p>
            </div>
          </div>
          
          {/* Footer y Checkout */}
          <div className="p-4 border-t border-sakura-light">
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Subtotal:</span>
              {/* TODO: El subtotal debe ser calculado dinámicamente */}
              <span>$20.00</span>
            </div>
            <button className="w-full py-3 bg-neon-magenta text-white-sakura font-bold rounded-full transition-transform transform hover:scale-105">
              Ir al Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
