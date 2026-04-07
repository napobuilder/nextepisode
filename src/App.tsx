import { HomePage } from './pages/HomePage';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartPanel } from './components/cart/CartPanel';
import { CartProvider, useCart } from './contexts/CartContext';
import { SearchProvider } from './contexts/SearchContext';
import { CurrencyProvider } from './contexts/CurrencyContext';

// Componente de layout para poder usar el hook useCart
const AppLayout = () => {
  const { isOpen, closeCart } = useCart();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <HomePage />
      </div>
      <Footer />
      <CartPanel isOpen={isOpen} onClose={closeCart} />
    </div>
  );
}

function App() {
  return (
    <CurrencyProvider>
      <CartProvider>
        <SearchProvider>
          <AppLayout />
        </SearchProvider>
      </CartProvider>
    </CurrencyProvider>
  );
}

export default App;
