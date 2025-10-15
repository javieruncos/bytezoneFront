import { useState } from "react";
import { motion } from "framer-motion";

const Auricular = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full mx-5">
        {/* Texto animado */}
        <motion.div
          className="pt-20 px-10 flex flex-col gap-5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold">
            ByteZone innovación en tecnología
          </h1>
          <div className="mt-20 flex flex-col gap-5">
            <p className="text-4xl font-bold">Auriculares Blancos</p>
            <div className="flex gap-6 mt-5">
              <button className="bg-white text-black rounded-sm px-6 py-2">
                Ver Producto
              </button>
              <button className="bg-blue-500 text-white rounded-sm px-6 py-2">
                Comprar Ahora
              </button>
            </div>
          </div>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          className="flex justify-center items-center h-full w-full relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
            alt="Auriculares"
            className="w-full h-full object-contain absolute top-0 left-0"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Auricular;
