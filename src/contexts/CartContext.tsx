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
  total: number;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
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
    setItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const value = { isOpen, items, total, openCart, closeCart, addToCart, removeFromCart, updateQuantity };

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
