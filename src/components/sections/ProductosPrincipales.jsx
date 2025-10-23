import React from "react";
import { useState } from "react";
import CardMasVendidos from "../ui/CardMasVendidos";
import { motion } from "framer-motion";
import computer from "../../assets/icons/computer.png";
import auricular from "../../assets/icons/auriculares.png";
import joystick from "../../assets/icons/joystick.png";
import laptop from "../../assets/icons/laptop.png";
import mouse from "../../assets/icons/mouse.png";
import monitor from "../../assets/icons/monitor.png";

const ProductosPrincipales = () => {
  const [btnActive, setBtnActive] = useState("");

  // const items = [
  //   "auriculares",
  //   "teclados",
  //   "monitores",
  //   "mouse",
  //   "parlantes",
  //   "cámaras",
  //   "micrófonos",
  // ];

  const items = [
    {
      id: 1,
      nombre: "auriculares",
      icon: auricular,
    },
    {
      id: 1,
      nombre: "joystick",
      icon: joystick,
    },
    {
      id: 1,
      nombre: "teclados",
      icon: computer,
    },
    {
      id: 1,
      nombre: "laptops",
      icon: laptop,
    },
    {
      id: 1,
      nombre: "mouse",
      icon: mouse,
    },
    {
      id: 1,
      nombre: "monitores",
      icon: monitor,
    },
  ];

  const productos = [
    {
      id: 1,
      nombre: "Auriculares Premium",
      categoria: "auriculares",
      precio: 150,
      imagen: "https://...",
      descripcion: "Sonido envolvente y diseño ergonómico.",
      stock: "disponible",
    },
    {
      id: 2,
      nombre: "Laptop Gamer",
      categoria: "laptops",
      precio: 1200,
      imagen: "https://...",
      descripcion: "Alto rendimiento para gaming y trabajo.",
      stock: "disponible",
    },
    {
      id: 3,
      nombre: "Cámara HD",
      categoria: "cámaras",
      precio: 300,
      imagen: "https://...",
      descripcion: "Captura imágenes nítidas y video en alta definición.",
      stock: "agotado",
    },
    {
      id: 3,
      nombre: "Cámara HD",
      categoria: "micrófonos",
      precio: 300,
      imagen: "https://...",
      descripcion: "Captura imágenes nítidas y video en alta definición.",
      stock: "agotado",
    },
    {
      id: 3,
      nombre: "Cámara HD",
      categoria: "parlantes",
      precio: 300,
      imagen: "https://...",
      descripcion: "Captura imágenes nítidas y video en alta definición.",
      stock: "agotado",
    },
    {
      id: 3,
      nombre: "Cámara HD",
      categoria: "mouse",
      precio: 300,
      imagen: "https://...",
      descripcion: "Captura imágenes nítidas y video en alta definición.",
      stock: "agotado",
    },
    {
      id: 3,
      nombre: "Cámara HD",
      categoria: "monitores",
      precio: 300,
      imagen: "https://...",
      descripcion: "Captura imágenes nítidas y video en alta definición.",
      stock: "agotado",
    },
    {
      id: 3,
      nombre: "Cámara HD",
      categoria: "teclados",
      precio: 300,
      imagen: "https://...",
      descripcion: "Captura imágenes nítidas y video en alta definición.",
      stock: "agotado",
    },
    // más productos...
  ];

  // filtramos productos deacuerdo a la categoria seleccionada
  const productosFiltrados = btnActive
    ? productos.filter((item) => {
        return item.categoria === btnActive;
      })
    : productos;

  return (
    // <div className="container mx-auto my-17">
    //   <div className="flex justify-between items-center py-5">
    //     <div>
    //       <h2 className="text-4xl font-bold">
    //         Ultimas <span className="text-blue-500">Novedades</span>
    //       </h2>
    //     </div>
    //     <div>
    //       <button className="py-3 px-10 bg-blue-500 text-white border rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
    //         <span>VerTodo</span>
    //       </button>
    //     </div>
    //   </div>
    //   <hr className="text-blue-500" />
    //   <div className="mt-16 flex gap-3 h-auto border-gray-300 rounded-md  relative">
    //     <div className="w-[200px] h-full flex-shrink-0 overflow-y-auto rounded-md  sticky top-5">
    //       {items.map((item) => (
    //         <button
    //           key={item}
    //           onClick={() => setBtnActive(item.nombre)}
    //           className={`text-center py-4 px-4 border-b w-full border-gray-300 hover:border-blue-300 flex items-center  gap-2 ${
    //             btnActive === item.nombre
    //               ? "bg-blue-500 text-white rounded-md"
    //               : "bg-white rounded-md text-black"
    //           }`}
    //         >
    //          <img src={item.icon} alt="" className="w-[40px] h-[40px]" /> {item.nombre}
    //         </button>
    //       ))}
    //     </div>
    //     <motion.div
    //       key={btnActive} // cambia cuando cambia la categoría
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       transition={{ duration: 2 }}
    //       className="grid grid-cols-2 gap-3"
    //     >
    //       {productosFiltrados.map((p) => (
    //         <CardMasVendidos key={p.id} producto={p} />
    //       ))}
    //     </motion.div>
    //   </div>
    // </div>
    <div className="container mx-auto my-8 px-4">
      {/* Título y botón */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-5 gap-4">
        <h2 className="text-4xl font-bold text-center md:text-left">
          Ultimas <span className="text-blue-500">Novedades</span>
        </h2>
        <button className="py-3 px-10 bg-blue-500 text-white border rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
          Ver Todo
        </button>
      </div>

      <hr className="text-blue-500" />

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        {/* Sidebar categorías */}
        <div className="w-full md:w-[200px] flex-shrink-0">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
            {items.map((item) => (
              <button
                key={item.nombre}
                onClick={() => setBtnActive(item.nombre)}
                className={`flex flex-col items-center justify-center py-4 px-2 border rounded-md hover:border-blue-500 gap-2 ${
                  btnActive === item.nombre
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black"
                }`}
              >
                <img src={item.icon} alt="" className="w-[50px] h-[50px]" />
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
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full"
>
  {productosFiltrados.map((p) => (
    <CardMasVendidos key={p.id} producto={p} />
  ))}
</motion.div>
      </div>
    </div>
  );
};

export default ProductosPrincipales;
