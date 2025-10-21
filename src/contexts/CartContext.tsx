import { createContext, useState, useContext, type ReactNode } from 'react';
import type { Product } from '../data/products';

// Definimos la forma de los items en el carrito (producto + cantidad)
export interface CartItem extends Product {
  quantity: number;
}

// Definimos la forma del contexto
interface CartContextType {
  isOpen: boolean;
  items: CartItem[];
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  // Futuras funciones: removeFromCart, updateQuantity, etc.
}

// 1. Creamos el contexto con un valor por defecto
const CartContext = createContext<CartContextType | undefined>(undefined);

// 2. Creamos el Proveedor (Provider)
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (product: Product) => {
    // Lógica para añadir al carrito (simplificada)
    // TODO: Añadir lógica para incrementar cantidad si el item ya existe
    setItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    setIsOpen(true); // Abrimos el carrito al añadir un producto
  };

  const value = { isOpen, items, openCart, closeCart, addToCart };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Creamos el Hook custom para consumir el contexto de forma segura
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
