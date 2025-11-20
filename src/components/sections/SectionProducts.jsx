import React from "react";
import CardProduct from "../ui/CardProduct";
import { motion } from "framer-motion";

const SectionProducts = ({productos}) => {
  
  return (
    <div className="h-auto container mx-auto px-4 sm:px-6 lg:px-0">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
          Últimas <span className="text-violet-600">Novedades</span>
        </h2>
        <a
          href="/categorias"
          className="py-2 px-6 sm:py-3 sm:px-10 bg-violet-600 text-white border rounded-md 
                hover:bg-black hover:text-white hover:border hover:border-violet-500
                transition-all duration-300"
        >
          Ver Todo
        </a>
      </div>

      <hr className="border-violet-600" />

      {/* Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {
          productos?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardProduct product={item}/>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default SectionProducts;
