import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = () => {
  const [open, setOpen] = useState(false);
  // Estado para controlar el modal de registro
  let [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // scroll suave
        block: "start", // se alinea al inicio del elemento
      });
    }
  };

  return (
    <>
      <div className="bg-blue-600 text-white text-center py-2 h-[100px] flex items-center justify-between px-12">
        <div className="">
          <span className="text-2xl font-bold">ByteZone</span>
        </div>
        <div class="relative w-[600px]">
          <input
            type="search"
            placeholder="Buscar..."
            class="w-full bg-black text-white py-3 pl-4 pr-12 rounded-lg outline-none"
          />
          <button class="absolute right-3 top-1/2 -translate-y-1/2 text-black rounded-md bg-amber-50 p-2 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </div>
        <div>
          <span className="text-2xl font-bold">Contactanos</span>
        </div>
      </div>

      <nav className="text-gray-200 sticky top-0 w-full z-30  menu bg-white md:bg-white">
        <div className="container mx-auto flex gap-8 items-center p-4">
          <div className="flex-1 flex items-center gap-8">
            {/* Logo */}
            <button
              onClick={() => handleScroll("servicios")}
              className="text-xl pb-1 font-bold text-amber-600"
            >
              MOTOMECANICA
            </button>
            {/* Menú desktop */}
            <ul className="hidden md:flex ms-auto gap-6">
              <li>
                <a href="/" className="hover:text-amber-600">
                  Inicio
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("servicios")}
                  className="hover:text-amber-600"
                >
                  servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contacto")}
                  className="hover:text-amber-600"
                >
                  contacto
                </button>
              </li>
            </ul>
          </div>
          {/* Botón hamburguesa */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              // Icono cerrar (X)
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icono hamburguesa
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 
                            18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menú mobile con animación */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full md:hidden flex flex-col gap-4 bg-[#191919] p-4  
                        shadow-lg"
            >
              <li>
                <a href="#" className="hover:text-gray-400">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-gray-400">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contacto
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Menu;
