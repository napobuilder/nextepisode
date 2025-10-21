export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  imageUrl: string;
  description: string;
  variants?: string[];
  series: string;
  isBundle?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 'tshirt-001',
    name: 'Camiseta Bordada "NERV"',
    category: 'Ropa',
    type: 'Camiseta Negra',
    price: 20.00,
    imageUrl: '/10400630_hi.webp',
    description: 'Logo NERV bordado en alta densidad. Calidad premium.',
    variants: ['S', 'M', 'L', 'XL'],
    series: 'Evangelion',
  },
  {
    id: 'poster-001',
    name: 'Póster "Atardecer en Namek"',
    category: 'Posters',
    type: 'Póster',
    price: 4.00,
    imageUrl: '/fposter,small,wall_texture,product,750x1000.webp',
    description: 'Impresión giclée de alta calidad. Colores vibrantes.',
    series: 'Dragon Ball Z',
  },
  {
    id: 'poster-002',
    name: 'Póster "El Bosque de Totoro"',
    category: 'Posters',
    type: 'Póster',
    price: 4.00,
    imageUrl: '/tableau-35x50-affiche-japonaise-totoro.webp',
    description: 'Estilo acuarela, perfecto para enmarcar.',
    series: 'Ghibli',
  },
  {
    id: 'figure-001',
    name: 'Figura "Gojo Satoru - Expansión Territorial"',
    category: 'Figuras',
    type: 'Figura Coleccionable',
    price: 120.00,
    imageUrl: '/x_fryu95269.webp',
    description: 'Escala 1/7. Detalles increíbles del "Vacío Infinito".',
    series: 'Jujutsu Kaisen',
  },
  {
    id: 'bundle-001',
    name: 'Combo Pósters Ghibli (3x)',
    category: 'Combos',
    type: 'Bundle',
    price: 5.00,
    isBundle: true,
    description: 'Elige 3 pósters de la colección Ghibli por un precio especial.',
    series: 'Ghibli',
  },
];
