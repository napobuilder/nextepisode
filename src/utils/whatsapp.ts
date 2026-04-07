import type { CartItem } from '../contexts/CartContext';
import type { Currency } from '../contexts/CurrencyContext';

export const generateWhatsAppLink = (
  items: CartItem[], 
  total: number,
  currency: Currency,
  bcvRate: number,
  formatPrice: (usdPrice: number) => string
): string => {
  // Número de WhatsApp oficial para Venezuela (+58 4243344262)
  const phoneNumber = '584243344262'; 
  
  let message = `¡Hola! Vengo de la tienda web y quiero realizar el siguiente pedido:\n\n`;
  message += `🛍️ *MI ORDEN:*\n`;
  
  items.forEach(item => { 
    message += `- ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
  });
  
  message += `\n💰 *Total a pagar:* ${formatPrice(total)}\n`;
  
  if (currency === 'VES') {
    message += `(Calculado a Tasa BCV: Bs. ${bcvRate.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})\n`;
  }
  
  message += `\n¿Podrían indicarme los pasos para el pago y envío? ¡Gracias!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
