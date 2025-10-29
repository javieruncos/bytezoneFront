import { image } from "framer-motion/client";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import { ContextProduct } from "../../context/ProductContext";

const Destacados = ({ productos }) => {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState("Negro");

  // Filtrar auriculares por tipo y color
  const auricularesActuales = productos.filter(
    (item) => item.type === "Auriculares" && item.color === color
  );

  // Evita errores si no hay auriculares del color seleccionado
  if (!auricularesActuales.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No hay auriculares de color {color}
      </div>
    );
  }

  const productoActivo = auricularesActuales[active];

  return (
    // <div className="h-auto container mx-auto px-4">
    //   <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
    //     <div className="col-span-1 lg:col-span-2 py-5">
    //       <div className="h-auto w-full bg-black text-white py-6 rounded-2xl">
    //         <div className="flex flex-col items-center py-9 gap-4 text-center">
    //           <span className="bg-blue-500 py-2 px-3 rounded-sm text-sm sm:text-base">
    //             Productos Destacados
    //           </span>
    //           <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
    //             Nuevos Auriculares
    //           </h3>
    //         </div>
    //         <div className="h-[250px] sm:h-[300px] md:h-[350px]">
    //           <img
    //             src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
    //             alt="Auriculares"
    //             className="w-full h-full object-contain"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col-span-1 lg:col-span-3">
    //       <AnimatePresence mode="wait">
    //         <motion.div
    //           key={opcionComponente}
    //           initial={{ opacity: 0, y: 50 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           exit={{ opacity: 0, y: -50 }}
    //           transition={{ duration: 0.6 }}
    //           className="w-full mt-5 flex flex-col md:flex-row gap-4 border border-gray-300 px-4 sm:px-5 py-5 rounded-2xl"
    //         >
    //           <div className="flex md:flex-col justify-center md:justify-around items-center gap-3 md:gap-4 md:w-[200px]">
    //             {auricularesActuales.map((item, index) => (
    //               <div
    //                 key={index}
    //                 className={`h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] rounded-2xl p-2 border transition-all duration-300 cursor-pointer ${
    //                   active === index
    //                     ? "border-blue-500 scale-105"
    //                     : "border-gray-300 hover:border-blue-500"
    //                 }`}
    //                 onClick={() => setActive(index)}
    //               >
    //                 <img
    //                   src={item.image}
    //                   alt="Auriculares"
    //                   className="w-full h-full object-contain"
    //                 />
    //               </div>
    //             ))}
    //           </div>

    //           <div className="w-full">
    //             <div className="h-[250px] sm:h-[300px] bg-black py-5 rounded-2xl flex justify-center items-center">
    //               <img
    //                src={auricularesActuales[active].images}
    //                 alt="Auriculares"
    //                 className="w-full h-full object-contain"
    //               />
    //             </div>

    //             <div className="p-4 text-center md:text-left">
    //               <h3 className="text-2xl sm:text-3xl font-medium">
    //                 Auriculares Blancos
    //               </h3>
    //               <p className="text-sm sm:text-base mt-2">
    //                 Este es un ejemplo de una card moderna con cambio de imagen
    //                 al pasar el cursor.
    //               </p>
    //               <p className="text-2xl text-blue-500 font-medium py-3">
    //                 Precio: $19.99
    //               </p>
    //               <button className="px-5 py-3 rounded-sm bg-blue-500 text-white w-full sm:w-auto">
    //                 Ver Producto
    //               </button>
    //             </div>
    //           </div>
    //         </motion.div>
    //       </AnimatePresence>
    //     </div>
    //   </div>

    //   <div className="flex gap-3 justify-center mt-6 pb-10 flex-wrap">
    //     {componentOpcion.map((_, index) => (
    //       <motion.button
    //         key={index}
    //         onClick={() => setOpcionComponente(index)}
    //         layout
    //         transition={{
    //           type: "spring",
    //           stiffness: 300,
    //           damping: 20,
    //           duration: 0.5,
    //         }}
    //         className={`h-4 flex items-center justify-center ${
    //           opcionComponente === index
    //             ? "bg-blue-500 w-16 rounded-full"
    //             : "bg-gray-300 w-4 rounded-full"
    //         }`}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="h-auto container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Panel izquierdo */}
        <div className="col-span-1 lg:col-span-2 py-5">
          <div className="h-auto w-full bg-black text-white py-6 rounded-2xl">
            <div className="flex flex-col items-center py-9 gap-4 text-center">
              <span className="bg-blue-500 py-2 px-3 rounded-sm text-sm sm:text-base">
                Productos Destacados
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
                Nuevos Auriculares
              </h3>
            </div>
            <div className="h-[250px] sm:h-[300px] md:h-[350px] flex justify-center items-center">
              <img
                src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
                alt={productoActivo.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Panel derecho */}
        <div className="col-span-1 lg:col-span-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full mt-5 flex flex-col md:flex-row gap-4 border border-gray-300 px-4 sm:px-5 py-5 rounded-2xl"
            >
              {/* Thumbnails */}
              <div className="flex md:flex-col justify-center md:justify-around items-center gap-3 md:gap-4 md:w-[200px]">
                {auricularesActuales?.slice(0, 4).map((item, index) => (
                  <div
                    key={item.id}
                    className={`h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] rounded-2xl p-2 border transition-all duration-300 cursor-pointer ${
                      active === index
                        ? "border-blue-500 scale-105"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                    onClick={() => setActive(index)}
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Imagen principal y detalles */}
              <div className="w-full">
                <div className="h-[250px] sm:h-[300px] bg-black py-5 rounded-2xl flex justify-center items-center">
                  <img
                    src={productoActivo.images[0]}
                    alt={productoActivo.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-4 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-medium">
                    {productoActivo.name}
                  </h3>
                  <p className="text-sm sm:text-base mt-2">
                    {productoActivo.shortDescription}
                  </p>
                  <p className="text-2xl text-blue-500 font-medium py-3">
                    ${productoActivo.price.toLocaleString()}
                  </p>
                  <button className="px-5 py-3 rounded-sm bg-blue-500 text-white w-full sm:w-auto">
                    Ver Producto
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Selector de color */}
      <div className="flex gap-3 justify-center mt-6 pb-10 flex-wrap">
        {["blanco", "Negro"].map((c) => (
          <motion.button
            key={c}
            onClick={() => {
              setColor(c);
              setActive(0); // resetea al primer producto disponible
            }}
            layout
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.5,
            }}
            className={`h-4 flex items-center justify-center ${
              color === c
                ? "bg-blue-500 w-16 rounded-full"
                : "bg-gray-300 w-4 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Destacados;
