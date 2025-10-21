import React from "react";
import { useState } from "react";
import CardMasVendidos from "../ui/CardMasVendidos";
import { motion } from "framer-motion";

const ProductosPrincipales = () => {
  const [btnActive, setBtnActive] = useState("");

  const items = [
    "auriculares",
    "teclados",
    "monitores",
    "mouse",
    "parlantes",
    "cámaras",
    "micrófonos",
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
    <div className="container mx-auto my-17">
      <div className="flex justify-between items-center py-5">
        <div>
          <h2 className="text-4xl font-bold">
            Ultimas <span className="text-blue-500">Novedades</span>
          </h2>
        </div>
        <div>
          <button className="py-3 px-10 bg-blue-500 text-white border rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
            <span>VerTodo</span>
          </button>
        </div>
      </div>
      <hr className="text-blue-500" />
      <div className="mt-16 flex gap-3 h-auto border-gray-300 rounded-md  relative">
        <div className="w-[200px] h-[400px] flex-shrink-0 overflow-y-auto rounded-md  sticky top-5">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => setBtnActive(item)}
              className={`text-center py-4 border-b w-full border-gray-300 hover:border-blue-300  ${
                btnActive === item
                  ? "bg-blue-500 text-white rounded-md"
                  : "bg-white rounded-md text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <motion.div
          key={btnActive} // cambia cuando cambia la categoría
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="grid grid-cols-2 gap-3"
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
