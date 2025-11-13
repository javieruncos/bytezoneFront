import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 py-12 mt-10 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Marca y Redes Sociales */}
          <div className="flex flex-col items-center md:items-start px-4 md:px-0">
            <h3 className="text-2xl font-bold text-white mb-4">BYTEZONE</h3>
            <p className="text-sm mb-6">
              Tu destino final para los mejores periféricos y accesorios gamer del mercado.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-gray-300 hover:text-violet-500 transition-colors duration-300">
                <i className="bi bi-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-500 transition-colors duration-300">
                <i className="bi bi-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-500 transition-colors duration-300">
                <i className="bi bi-twitter-x text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-500 transition-colors duration-300">
                <i className="bi bi-youtube text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-violet-500 transition-colors duration-300">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-violet-500 transition-colors duration-300">Sobre Nosotros</Link></li>
              <li><Link to="/categorias" className="hover:text-violet-500 transition-colors duration-300">Categorías</Link></li>
              <li><Link to="/contacto" className="hover:text-violet-500 transition-colors duration-300">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Categorías */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><Link to="/categorias/Auriculares" className="hover:text-violet-500 transition-colors duration-300">Auriculares</Link></li>
              <li><Link to="/categorias/Teclado" className="hover:text-violet-500 transition-colors duration-300">Teclados</Link></li>
              <li><Link to="/categorias/Mouse" className="hover:text-violet-500 transition-colors duration-300">Mouse</Link></li>
              <li><Link to="/categorias/Monitor" className="hover:text-violet-500 transition-colors duration-300">Monitores</Link></li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div className='px-4 md:px-0'>
            <h4 className="text-lg font-semibold text-white mb-4">Suscríbete</h4>
            <p className="text-sm mb-4">Recibe las últimas ofertas y novedades directamente en tu correo.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button 
                type="submit" 
                className="px-5 py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors duration-300"
              >
                Enviar
              </button>
            </form>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BYTEZONE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;