// TODO: Recibirá un 'item' como prop con los datos del producto y la cantidad
export const CartItem = () => {
  return (
    <div className="flex items-center space-x-4">
        <img src="https://placehold.co/80x80/2E2A3D/FFFBFB?text=NERV" alt="Camiseta NERV" className="w-16 h-16 rounded-md object-cover"/>
        <div className="flex-1">
            <p className="font-bold text-sm">Camiseta Bordada "NERV"</p>
            <p className="text-xs text-gray-night/60">Cantidad: 1</p>
        </div>
        <p className="font-bold text-sm">$20.00</p>
    </div>
  );
};
