import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Comentarios = () => {
  const usuarios = [
    {
      id: 1,
      nombre: "Lucía",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      comentario:
        "Como jugadora profesional, exijo lo mejor de mi equipo. ByteZone siempre me ha proporcionado periféricos de primer nivel que mejoran mi rendimiento. Sus ratones son precisos y sus teclados, receptivos.",
    },
    {
      id: 2,
      nombre: "Martín",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      comentario:
        "ByteZone se ha convertido en mi tienda de referencia para todo lo tecnológico. Su web es fácil de usar, el envío es rápido y los productos son siempre de primera. ¡Nunca decepcionan!",
    },
    {
      id: 3,
      nombre: "Camila",
      foto: "https://randomuser.me/api/portraits/women/65.jpg",
      comentario:
        "La experiencia de compra en ByteZone fue excelente. El personal me asesoró de maravilla para armar mi PC gamer. ¡El rendimiento es increíble y la estética, espectacular! Totalmente recomendados.",
    },
    {
      id: 4,
      nombre: "Julián",
      foto: "https://randomuser.me/api/portraits/men/76.jpg",
      comentario:
        "ByteZone ha revolucionado mi experiencia tecnológica. Desde sus auriculares premium hasta sus teclados ergonómicos, cada producto ha superado mis expectativas. La calidad y el rendimiento son inigualables.",
    },
    {
      id: 5,
      nombre: "Valentina",
      foto: "https://randomuser.me/api/portraits/women/22.jpg",
      comentario:
        "Como nómada digital, necesito equipos fiables y portátiles. En ByteZone encontré la laptop perfecta que combina potencia y ligereza. Su servicio al cliente es de primera. ¡Estoy orgullosa de ser una clienta fiel!",
    },
    {
      id: 6,
      nombre: "Mateo",
      foto: "https://randomuser.me/api/portraits/men/46.jpg",
      comentario:
        "El monitor que compré en ByteZone transformó por completo mi espacio de trabajo. La calidad de imagen es asombrosa y el diseño es muy elegante. El proceso de compra fue rápido y sin complicaciones.",
    },
    {
      id: 7,
      nombre: "Sofía",
      foto: "https://randomuser.me/api/portraits/women/33.jpg",
      comentario:
        "¡El teclado mecánico que adquirí es una maravilla! La sensación al teclear es muy satisfactoria y la iluminación RGB le da un toque único a mi escritorio. Sin duda, una de mis mejores compras en ByteZone.",
    },
    {
      id: 8,
      nombre: "Lucas",
      foto: "https://randomuser.me/api/portraits/men/55.jpg",
      comentario:
        "Compré un joystick para mi consola y la diferencia es notable. La precisión y la respuesta son de otro nivel. ByteZone ofrece productos de calidad que realmente marcan la diferencia en el juego.",
    },
    {
      id: 9,
      nombre: "Isabella",
      foto: "https://randomuser.me/api/portraits/women/88.jpg",
      comentario:
        "El servicio postventa de ByteZone es excepcional. Tuve una consulta sobre mi producto y me respondieron de inmediato, solucionando mi problema con mucha amabilidad. ¡Un 10 para el equipo de soporte!",
    },
  ];

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const handleScroll = (direction) => {
    // Moverse en bloques de 'cardsPerPage'
    const newIndex = currentIndex + direction * cardsPerPage;

    // Asegurarse de que el nuevo índice esté dentro de los límites (0 y el número total de páginas)
    const numPages = Math.ceil(usuarios.length / cardsPerPage);
    const newPage = Math.floor(newIndex / cardsPerPage);
    const clampedPage = Math.max(0, Math.min(newPage, numPages - 1));
    const clampedIndex = clampedPage * cardsPerPage;

    if (sliderRef.current) {
      // Usamos el ancho del elemento padre (la "ventana" visible) para el cálculo
      const scrollAmount = sliderRef.current.parentElement.offsetWidth * clampedPage;
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setCurrentIndex(clampedIndex);
    }
  };

  return (
    <>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `}
      </style>

    <div className="container mx-auto px-4 my-12 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Reseñas de clientes
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          Descubre lo que nuestros clientes opinan sobre su experiencia con
          ByteZone: desde amantes de la tecnología hasta profesionales y
          nómadas digitales.
        </p>
      </div>

      {/* Contenedor del Slider para controlar el ancho visible */}
      <div className="w-full max-w-6xl mx-auto overflow-hidden">
        {/* Slider de Comentarios */}
        <div
          ref={sliderRef}
          className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc(50%-0.75rem)] lg:auto-cols-[calc(33.3333%-1rem)] gap-6 py-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        >
          {usuarios.map((user, index) => (
            <motion.div
              key={user.id}
              className="snap-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={user.foto}
                      alt={user.nombre}
                      className="w-16 h-16 rounded-full object-cover border-2 border-violet-500 mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-white">{user.nombre}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed flex-grow">
                    "{user.comentario}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Controles del Slider */}
    <div className="flex justify-center items-center gap-4 mt-4">
      <button
        onClick={() => handleScroll(-1)}
        disabled={currentIndex < cardsPerPage}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex gap-2">
        {Array.from({ length: Math.ceil(usuarios.length / cardsPerPage) }).map((_, index) => (
          <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / cardsPerPage) === index ? 'bg-violet-500' : 'bg-gray-500'}`}></div>
        ))}
      </div>
      <button
        onClick={() => handleScroll(1)}
        disabled={currentIndex >= usuarios.length - cardsPerPage}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    </>
  );
};

export default Comentarios;
