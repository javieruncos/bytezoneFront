import { image } from "framer-motion/client";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import { Link } from "react-router-dom";

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

  const imageUrl =
    productos.images?.length > 0 ? productos.images[0] : "/placeholder.jpg";

  return (
    <div className="h-auto container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:px-10 lg:px-0 px-3">
        {/* Panel izquierdo */}
        <div className="col-span-1 lg:col-span-2 ">
          <div className="h-[600px] w-full text-white  rounded-2xl relative overflow-hidden">
            <img src="https://img.freepik.com/vector-gratis/margen-abstracto-neon-sobre-fondo-purpura-oscuro_53876-99055.jpg" alt="" className="h-full object-cover" />
            <div className="absolute top-0 left-0 h-full w-full bg-black/70">
              <div className="flex flex-col items-center py-9 gap-4 text-center">
                <span className="bg-violet-600 py-2 px-3 rounded-sm text-sm sm:text-base">
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
        </div>

        {/* Panel derecho */}
        <div className="col-span-1 lg:col-span-3 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="relative w-full mt-5 flex flex-col md:flex-row gap-4 border border-white/20 px-4 sm:px-5 py-5 rounded-2xl backdrop-blur-xl bg-white/4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Thumbnails */}
              {/* capa de brillo */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/30 opacity-40 pointer-events-none -z-10"></div>
              <div className="flex md:flex-col justify-center md:justify-around items-center gap-3 md:gap-4 md:w-[200px]">
                {auricularesActuales?.slice(0, 4).map((item, index) => (
                  <div
                    key={item.id}
                    className={`h-[90px] w-[100px] sm:h-[120px] sm:w-[120px] rounded-2xl p-2 border transition-all duration-300 cursor-pointer ${
                      active === index
                        ? "border-violet-600 scale-105"
                        : "border-gray-300 hover:border-violet-600"
                    }`}
                    onClick={() => setActive(index)}
                  >
                    <img
                      src={
                        item.images[0].length > 0
                          ? item.images[0]
                          : "/placeholder.jpg"
                      }
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Imagen principal y detalles */}
              <div className="w-full">
                <div className="h-[250px] sm:h-[300px] py-5 rounded-2xl flex justify-center items-center relative overflow-hidden">
                  <img src="https://img.freepik.com/vector-gratis/margen-abstracto-neon-sobre-fondo-purpura-oscuro_53876-99055.jpg" alt="" />
                  <div className="absolute top-0 left-0 h-full w-full bg-black/70">
                  <img
                    src={productoActivo.images[0]}
                    alt={productoActivo.name}
                    className="w-full h-full object-contain"
                  />
                  </div>
                </div>
                <a href={`detalle/${productoActivo.id}`}></a>
                <div className="p-4 text-center md:text-left">
                  <h3 className="text-2xl sm:text-3xl font-medium">
                    {productoActivo.name}
                  </h3>
                  <p className="text-sm sm:text-base mt-2">
                    {productoActivo.shortDescription}
                  </p>
                  <p className="text-2xl text-violet-600 font-medium py-3 mb-5">
                    ${productoActivo.price.toLocaleString()}
                  </p>
                  <Link
                    to={`detalle/${productoActivo._id}`}
                    className="px-5 py-3 rounded-sm  bg-violet-600 text-white w-full sm:w-auto hover:bg-black hover:border hover:border-violet-500 transition-all duration-300"
                  >
                    Ver Producto
                  </Link>
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
                ? "bg-violet-500 w-16 rounded-full"
                : "bg-gray-300 w-4 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Destacados;
