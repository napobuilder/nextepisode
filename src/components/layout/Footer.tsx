export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-night/10 bg-white-sakura overflow-hidden">
      {/* Ticker Band (Sutil) */}
      <div className="w-full bg-neon-magenta text-white-sakura py-3 shadow-md flex overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-8 font-bold text-sm tracking-widest opacity-90">
           {[...Array(20)].map((_, i) => (
             <span key={i}>★ OTK STREETWEAR ★ NEW MERCH DROP ★ NEXT EPISODE</span>
           ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="font-display font-black text-3xl tracking-tight text-gray-night mb-2">NEXT EPISODE</span>
            <p className="text-gray-night/60 font-medium max-w-sm mb-4">
              Vistiendo a los verdaderos fanáticos. Streetwear exclusivo y mercancía de culto de tus animes favoritos.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-sakura-light/50 text-neon-magenta flex items-center justify-center rounded-full hover:-translate-y-1 hover:bg-neon-magenta hover:text-white-sakura hover:shadow-lg transition-all font-bold" title="Instagram">IG</a>
               <a href="#" className="w-10 h-10 bg-sakura-light/50 text-neon-magenta flex items-center justify-center rounded-full hover:-translate-y-1 hover:bg-neon-magenta hover:text-white-sakura hover:shadow-lg transition-all font-bold" title="TikTok">TK</a>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-col gap-3 font-medium text-gray-night/80">
            <h4 className="text-xl font-display font-bold text-gray-night mb-2">Soporte</h4>
            <a href="#" className="hover:text-neon-magenta transition-colors w-fit">Envíos y Devoluciones</a>
            <a href="#" className="hover:text-neon-magenta transition-colors w-fit">Guía de Tallas</a>
            <a href="#" className="hover:text-neon-magenta transition-colors w-fit">Preguntas Frecuentes</a>
          </div>

          <div className="flex flex-col gap-3 font-medium text-gray-night/80">
             <h4 className="text-xl font-display font-bold text-gray-night mb-2">Políticas</h4>
             <a href="#" className="hover:text-neon-magenta transition-colors w-fit">Términos de Servicio</a>
             <a href="#" className="hover:text-neon-magenta transition-colors w-fit">Privacidad</a>
          </div>
        </div>
        
        {/* Indie Hacker Credit */}
        <div className="pt-8 border-t border-gray-night/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-medium text-sm text-gray-night/50">
            © {new Date().getFullYear()} Next Episode. Todos los derechos reservados.
          </p>
          
          {/* Crédito Desarrollador Premium Minimalista */}
          <div className="px-5 py-2.5 rounded-full bg-gray-night/5 hover:bg-sakura-light/30 transition-colors flex items-center group">
             <span className="font-medium text-xs text-gray-night/60 mr-2">Desarrollado con ❤️ por</span>
             <a 
               href="https://www.napbak.dev/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="font-bold text-sm text-gray-night group-hover:text-neon-magenta transition-colors"
             >
               NAPBAK.DEV
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
