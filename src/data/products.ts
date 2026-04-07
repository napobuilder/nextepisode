export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  imageUrl: string;
  description: string;
  variants?: string[];
  gallery?: string[];
  series: string;
  isBundle?: boolean;
  isSoldOut?: boolean;
}

export const products: Product[] = [
  {
    id: 'cam-totoro-white-01',
    name: 'Oversize Tee "Totoro Classic" (Blanca)',
    category: 'Ropa',
    type: 'Heavy Cotton Tee',
    price: 10.00,
    imageUrl: '/Totoro-White-Frente-01.png',
    description: 'Camiseta de algodón grueso premium de 240g. Estampado duradero de excelente calidad.',
    variants: ['ONE SIZE / FIT OVERSIZE'],
    gallery: ['/Totoro-White-Frente-01.png', '/Totoro-White-Diseño-01.png'],
    series: 'Studio Ghibli',
  },
  {
    id: 'cam-kuromi-white-01',
    name: 'Oversize Tee "Kuromi Punk" (Blanca)',
    category: 'Ropa',
    type: 'Heavy Cotton Tee',
    price: 10.00,
    imageUrl: '/Kuromi-White-Frente-01.png',
    description: 'Estilo contrastante e irreverente. Corte streetwear holgado y ultra cómodo.',
    variants: ['ONE SIZE / FIT OVERSIZE'],
    gallery: ['/Kuromi-White-Frente-01.png', '/Kuromi-White-Diseño-01.png'],
    series: 'Sanrio',
  },
  {
    id: 'cam-nerv-01',
    name: 'Camiseta Bordada "NERV"',
    category: 'Ropa',
    type: 'Camiseta Negra',
    price: 10.00,
    imageUrl: '/10400630_hi.webp',
    description: 'Logo NERV bordado en alta densidad. Calidad premium y 100% algodón.',
    variants: ['ONE SIZE / FIT OVERSIZE'],
    series: 'Evangelion',
    isSoldOut: true,
  },
  {
    id: 'cam-oversize-01',
    name: 'Camiseta Oversize Minimalista',
    category: 'Ropa',
    type: 'Oversize Tee',
    price: 10.00,
    imageUrl: '/ssrco,oversize_tee,mens,000000_44f0b734a5,front,close_portrait,x1000.webp',
    description: 'Corte oversize moderno para máxima comodidad.',
    variants: ['ONE SIZE / FIT OVERSIZE'],
    series: 'Originals',
    isSoldOut: true,
  }
];
