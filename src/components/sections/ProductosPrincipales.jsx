import React, { useEffect } from "react";
import { useState } from "react";
import CardMasVendidos from "../ui/CardMasVendidos";
import { motion } from "framer-motion";
import computer from "../../assets/icons/computer.png";
import auricular from "../../assets/icons/auriculares.png";
import joystick from "../../assets/icons/joystick.png";
import laptop from "../../assets/icons/laptop.png";
import mouse from "../../assets/icons/mouse.png";
import monitor from "../../assets/icons/monitor.png";

const ProductosPrincipales = ({ productos,categoria}) => {
  const [btnActive, setBtnActive] = useState(categoria || "");

   useEffect(() => {
    setBtnActive(categoria || "");
  }, [categoria]);

  const items = [
    {
      id: 1,
      nombre: "Auriculares",
      icon: auricular,
    },
    {
      id: 1,
      nombre: "Joystick",
      icon: joystick,
    },
    {
      id: 1,
      nombre: "Teclado",
      icon: computer,
    },
    {
      id: 1,
      nombre: "Laptop",
      icon: laptop,
    },
    {
      id: 1,
      nombre: "Mouse",
      icon: mouse,
    },
    {
      id: 1,
      nombre: "Monitor",
      icon: monitor,
    },
  ];

  // filtramos productos deacuerdo a la categoria seleccionada
  const productosFiltrados = btnActive
    ? productos.filter((item) => {
        return item.type === btnActive;
      })
    : productos;

  return (
    <div className="container mx-auto my-8 ">
      {/* Título y botón */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-5 gap-4 md:px-10 lg:px-0">
        <h2 className="text-4xl font-bold text-center md:text-left">
          Categorias
        </h2>
      </div>

      <hr className="text-violet-600" />

      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* Sidebar categorías */}
        <div className="w-full lg:w-[200px] flex-shrink-0 px-4 md:px-10 lg:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:flex lg:flex-col">
            {items.map((item) => (
              <button
                key={item.nombre}
                onClick={() => setBtnActive(item.nombre)}
                className={`flex flex-col items-center justify-center py-4 px-4 border rounded-lg hover:border-violet-500 gap-2 transition-colors duration-300 w-full ${
                  btnActive === item.nombre
                    ? "bg-white text-black border-violet-500"
                    : "bg-violet-600 text-white border-white/20"
                }`}
              >
                <img src={item.icon} alt={`Icono de ${item.nombre}`} className="w-[50px] h-[50px]" />
                <span className="text-center text-sm md:text-base font-medium">
                  {item.nombre}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Productos */}
        <motion.div
          key={btnActive} // cambia cuando cambia la categoría
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full px-4 md:px-10 lg:px-0"
        >
          {productosFiltrados?.slice(0, 6).map((p) => (
            <CardMasVendidos key={p.id} producto={p} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductosPrincipales;
