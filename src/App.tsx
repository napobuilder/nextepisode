import { HomePage } from './pages/HomePage';
import { Header } from './components/layout/Header';
import { CartPanel } from './components/cart/CartPanel';
import { CartProvider, useCart } from './contexts/CartContext';

// Componente de layout para poder usar el hook useCart
const AppLayout = () => {
  const { isOpen, closeCart } = useCart();
  return (
    <>
      <Header />
      <HomePage />
      <CartPanel isOpen={isOpen} onClose={closeCart} />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppLayout />
    </CartProvider>
  );
}

export default App;
