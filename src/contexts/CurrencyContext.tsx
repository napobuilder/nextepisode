import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

export type Currency = 'USD' | 'VES';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  bcvRate: number;
  isLoading: boolean;
  formatPrice: (usdPrice: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Tasa de seguridad actualizada en caso de caída de API
const FALLBACK_RATE = 475.00;

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [bcvRate, setBcvRate] = useState<number>(FALLBACK_RATE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
        if (!response.ok) throw new Error('API Response not ok');
        const data = await response.json();
        if (data && data.promedio) {
           setBcvRate(data.promedio);
        }
      } catch (error) {
        console.error('Error fetching BCV rate, using fallback', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchRate();
    // Podría re-intentar cada hora, pero un SPA e-commerce local está bien onMount
  }, []);

  const formatPrice = (usdPrice: number) => {
    if (currency === 'USD') {
      return `$${usdPrice.toFixed(2)}`;
    } else {
      const vesAmount = usdPrice * bcvRate;
      // Formato venezolano: comas para decimales, puntos para miles
      return `Bs ${vesAmount.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, bcvRate, isLoading, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
