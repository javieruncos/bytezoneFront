import { useContext, useState } from "react";
import "../../styles/Menu.css";
import { motion, AnimatePresence } from "framer-motion";
import auricular from "../../assets/icons/auricularIcon.png";
import userIcon from "../../assets/icons/userIcon.webp";
import carritoIcon from "../../assets/icons/carritoIcon.webp";
import { ContextUser } from "../../context/UserContext";
import ModalCarrito from "../ui/ModalCarrito";
import { Link } from "react-router-dom";

const Menu = () => {
  const { currentUser, setCurrentUser } = useContext(ContextUser);
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

  const Logout = () => {
    localStorage.removeItem("token"); // Borra token
    localStorage.removeItem("usuarioByte"); // Borra datos del usuario
    setCurrentUser(null);
  };

  return (
    <>
      <div className="overflow-hidden h-[50px] bg-black text-white flex items-center">
        <div className="flex will-change-transform [transform:translateZ(0)] ticker-scroller">
          <div className="flex items-center whitespace-nowrap ticker-item">
            Grandes Ofertas • Envíos Gratis • Descuentos Especiales • Solo por
            Hoy •
          </div>
          <div className="flex items-center whitespace-nowrap ticker-item">
            Grandes Ofertas • Envíos Gratis • Descuentos Especiales • Solo por
            Hoy •
          </div>
          <div className="flex items-center whitespace-nowrap ticker-item">
            Grandes Ofertas • Envíos Gratis • Descuentos Especiales • Solo por
            Hoy •
          </div>
          <div className="flex items-center whitespace-nowrap ticker-item">
            Grandes Ofertas • Envíos Gratis • Descuentos Especiales • Solo por
            Hoy •
          </div>
        </div>
      </div>
      <div className=" text-black text-center py-2 h-[100px] flex items-center justify-between px-4 md:px-12 ">
        <div className="w-1/2 flex items-center">
          <span className="text-2xl font-bold">BYTEZONE</span>
        </div>
        <div className="relative w-1/2 hidden md:block">
          <input
            type="search"
            placeholder="Buscar..."
            className="w-full bg-black text-white py-3 pl-4 pr-12 rounded-lg outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-black rounded-md bg-white p-2 hover:bg-blue-500 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-end gap-5 w-1/2 ">
          <div className="hidden md:block">
            <img src={auricular} alt="" className="h-[50px]" />
          </div>
          <div className="text-start text-sm hidden md:block">
            <p className=" font-bold">Necesitas Ayuda?</p>
            <p className=" font-bold">4335343</p>
          </div>
          <div className="flex  items-center gap-4">
            <a href="/registro" className=" cursor-pointer">
              <img src={userIcon} alt="" className="h-[30px]" />
            </a>
            {currentUser ? (
              <button onClick={() => Logout()}>
                <i className="bi bi-box-arrow-right text-4xl text-blue-500 hover:cursor-pointer"></i>
              </button>
            ) : null}
            <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <img src={carritoIcon} alt="" className="h-[30px]" />
            </button>
          </div>
        </div>
      </div>

      <nav className="text-black sticky top-0 w-full z-30  menu border border-gray-300 bg-[#f5f5f5]">
        <div className="container mx-auto flex gap-8 items-center p-4">
          <div className="flex-1 flex items-center gap-8">
            {/* Logo */}
            <button
              onClick={() => handleScroll("servicios")}
              className="text-xl pb-1 font-bold text-black hover:text-blue-500"
            >
              Ofertas en curso
            </button>
            {/* Menú desktop */}
            <ul className="hidden md:flex ms-auto gap-6">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-blue-600">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-blue-600">
                  contacto
                </Link>
              </li>
              {currentUser?.perfil?.toLowerCase() === "admin" && (
                <li>
                  <Link
                    to="/admin"
                    className="hover:text-blue-600 font-semibold text-blue-600"
                  >
                    Administrador
                  </Link>
                </li>
              )}
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
              className="absolute top-full left-0 w-full md:hidden flex flex-col gap-4 bg-black p-4  
                        shadow-lg"
            >
              <li>
                <a href="#" className="text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contacto
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
      <ModalCarrito isOpen={isOpen} setIsOpen={setIsOpen}></ModalCarrito>
    </>
  );
};

export default Menu;
