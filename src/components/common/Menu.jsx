import { useContext, useState } from "react";
import "../../styles/Menu.css";
import { motion, AnimatePresence } from "framer-motion";
import auricular from "../../assets/icons/auricularIcon.png";
import userIcon from "../../assets/icons/userIcon.webp";
import carritoIcon from "../../assets/icons/carritoIcon.webp";
import { ContextUser } from "../../context/UserContext";
import ModalCarrito from "../ui/ModalCarrito"; 
import { Link, useNavigate } from "react-router-dom";
import { ContextProduct } from "../../context/ProductContext";

const Menu = () => {
  const { currentUser, setCurrentUser, loading } = useContext(ContextUser);
  const { setFilterSearch } = useContext(ContextProduct);
  const [open, setOpen] = useState(false);
  // Estado para controlar el modal de registro
  let [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Borra token
    localStorage.removeItem("usuarioByte"); // Borra datos del usuario
    setCurrentUser(null);
  };

  const handleFilter =(e)=>{
    e.preventDefault()
    if (searchValue.trim() !== "") {
      setFilterSearch(searchValue); // Opcional: mantener el contexto actualizado
      navigate(`/busqueda?q=${searchValue}`);
    }
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
      <div className=" text-white text-center  h-[100px] flex items-center justify-between  bg-violet-900 relative">
        <img src="https://img.freepik.com/vector-gratis/diseno-abstracto-fondo-futurista_23-2148459427.jpg"
        className="w-full h-full object-cover"
        alt="" />
        <div className="absolute top-0 left-0 h-full w-full bg-black/56  flex items-center justify-between px-4 md:px-12">
          <div className="w-1/2 flex items-center">
            <Link to={"/"} className="text-2xl font-bold">BYTEZONE</Link>
          </div>
          <form onSubmit={handleFilter} className="relative w-1/2 hidden md:block">
            <input
              type="search"
              placeholder="Buscar..."
              className="w-full bg-white text-black py-3 pl-4 pr-12 rounded-lg outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-black rounded-md bg-white p-2 hover:bg-violet-500 hover:text-white">
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
          </form>
          <div className="flex items-center justify-end gap-5 w-1/2 ">
            <div className="hidden md:block">
              <i className="bi bi-headset text-4xl"></i>
            </div>
            <div className="text-start text-sm hidden md:block">
              <p className=" font-bold">Necesitas Ayuda?</p>
              <p className=" font-bold">4335343</p>
            </div>
            <div className="flex  items-center gap-4">
              <Link to="/registro" className=" cursor-pointer">
              <i className="bi bi-person text-4xl"></i>
              </Link>
              {/* Solo muestra el botón de logout si la carga ha terminado y hay un usuario */}
              {!loading && currentUser && (
                  <button onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right text-4xl text-violet-500 hover:cursor-pointer"></i>
                  </button>
              )}

              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <i className="bi bi-cart2 text-3xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="text-white sticky top-0 w-full z-30  menu  border-b-2  border-l-none border-r-none border-t-none border-violet-600 bg-[#191919]">
        <div className="container mx-auto flex gap-8 items-center p-4">
          <div className="flex-1 flex items-center gap-8">
            {/* Logo */}
            <span
              className="text-xl pb-1 font-bold text-violet-500"
            >
              ZONA GAMER
            </span>
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
