import React from "react";
import { Link } from "react-router-dom";

const MasVendidos = ({ productos }) => {
  const masVendidos = productos.filter((item) => item.rating > 4.8);

  return (
    <div className="h-auto container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-4 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Accesorios más <span className="text-violet-500">Vendidos</span>
        </h2>
        <Link
          to="/categorias"
          className="py-2 sm:py-3 px-6 sm:px-10 bg-violet-600 text-white border rounded-md hover:bg-black hover:text-white-600 hover:border hover:border-violet-500 transition-all"
        >
          <span>Ver Todo</span>
        </Link>
      </div>

      <hr className="border-violet-600" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {/* CARD */}
        {masVendidos?.slice(0, 4).map((item) => (
          <div key={item._id || item.id} className="group relative h-auto lg:min-h-[350px] w-full bg-white/4 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* capa de brillo */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/30 opacity-40 pointer-events-none -z-10"></div>
            <div className="flex-shrink-0 h-[250px] lg:h-full w-full lg:w-1/2 flex justify-center items-center bg-violet-800 rounded-2xl overflow-hidden relative">
              <img
                src="https://img.freepik.com/vector-gratis/margen-abstracto-neon-sobre-fondo-purpura-oscuro_53876-99055.jpg"
                alt=""
                className="object-cover h-full w-full"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/80">
                <img
                  // Usar la primera imagen si existe, si no, un placeholder o nada.
                  src={
                    Array.isArray(item.images) && item.images.length > 0
                      ? item.images[0]
                      : "https://via.placeholder.com/300"
                  }
                  alt={item.name}
                  className="object-contain h-full w-full p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                {item.name}
              </h4>
              <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3 lg:line-clamp-2">
                {item.shortDescription}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
                $ {item.price?.toLocaleString("es-AR") || "N/A"}
              </p>
              <Link
                to={`detalle/${item._id || item.id}`}
                className="px-4 sm:px-5 py-2 bg-violet-500 hover:bg-black text-white rounded-lg transition-all duration-300 md:w-auto sm:w-auto text-center sm:text-left border border-violet-500 hover:border-violet-600 md:text-center"
              >
                <span>Ver producto</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasVendidos;
