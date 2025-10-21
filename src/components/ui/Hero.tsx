import React from 'react';
import { ArrowRight } from 'lucide-react'; // Íconos limpios

// El Hero. Es el primer impacto visual.
export const Hero = () => (
  <div className="relative flex items-center justify-center w-full h-[60vh] overflow-hidden">
    {/* Fondo con gradiente animado (definido en tailwind.config.js) */}
    <div 
      className="absolute inset-0 bg-gradient-to-r from-sakura-light via-water-blue to-sakura-deep bg-200% animate-gradient-pan"
    />
    <div className="relative z-10 flex flex-col items-center text-center p-4">
      <h1 className="text-5xl md:text-7xl font-display font-black text-gray-night uppercase tracking-tighter">
        Tu Estilo. Tu Anime.
      </h1>
      <p className="mt-4 text-lg text-gray-night/80 max-w-lg">
        Merchandise seleccionado con la estética que amas. De Ghibli a Jujutsu Kaisen.
      </p>
      <button className="mt-8 px-6 py-3 bg-neon-magenta text-white-sakura font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 group">
        Ver Colección <ArrowRight className="inline w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
);
