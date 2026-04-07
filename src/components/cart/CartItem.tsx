import type { CartItem as CartItemType } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export const CartItem = ({ item, onIncrease, onDecrease, onRemove }: CartItemProps) => {
  return (
    <div className="flex items-center space-x-4">
        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-md object-cover"/>
        <div className="flex-1 flex flex-col">
            <p className="font-bold text-sm leading-tight text-gray-night">{item.name}</p>
            <div className="flex items-center gap-2 mt-2">
              <button onClick={() => onDecrease(item.id)} className="w-5 h-5 rounded bg-sakura-light/50 text-gray-night hover:bg-sakura-light hover:text-neon-magenta flex items-center justify-center leading-none focus:outline-none transition-colors">-</button>
              <span className="text-sm font-bold w-4 text-center select-none">{item.quantity}</span>
              <button onClick={() => onIncrease(item.id)} className="w-5 h-5 rounded bg-sakura-light/50 text-gray-night hover:bg-sakura-light hover:text-neon-magenta flex items-center justify-center leading-none focus:outline-none transition-colors">+</button>
              <button onClick={() => onRemove(item.id)} className="ml-2 text-xs text-sakura-deep hover:text-neon-magenta hover:underline transition-colors">Eliminar</button>
            </div>
        </div>
        <p className="font-bold text-sm text-gray-night whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};
