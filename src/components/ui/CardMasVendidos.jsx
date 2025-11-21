import React from "react";
import { Link } from "react-router-dom";

const CardMasVendidos = ({ producto }) => {
  // Normaliza la propiedad 'images' para que siempre sea un array
  const getImagesAsArray = (images) => {
    if (Array.isArray(images)) return images;
    if (typeof images === 'string' && images.trim() !== '') return [images];
    return [];
  };

  const images = getImagesAsArray(producto.images);
  const imageUrl = images.length > 0 ? images[0].url : "/img/placeholder.jpg"; // Usar una imagen de respaldo

  return (
    <>
      <Link to={`/detalle/${producto._id}`}>
        <div className="group w-full rounded-3xl overflow-hidden transition-all duration-500 flex flex-col lg:flex-row items-center lg:items-start gap-6 p-4 lg:p-6 h-auto pb-10 lg:h-[260px] relative backdrop-blur-xl bg-white/4 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/30 opacity-40 pointer-events-none -z-10"></div>
          {/* Imagen */}
          <div className="relative flex-shrink-0 w-full lg:w-[230px] h-[300px] lg:h-[200px] flex justify-center items-center rounded-2xl overflow-hidden">
            <img src="https://img.freepik.com/vector-gratis/margen-abstracto-neon-sobre-fondo-purpura-oscuro_53876-99055.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 h-full w-full bg-black/70">
              <img
                src={imageUrl}
                alt={producto.name}
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col justify-between text-white w-full lg:w-[calc(100%-230px)] h-auto lg:h-[200px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-xl lg:text-2xl font-semibold">
                {producto.name}
              </h4>
              ⭐⭐⭐⭐⭐
              <p className="text-sm">
                valoracion:{" "}
                <span
                  className={`${
                    producto.rating >= 4.7 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {producto.rating}
                </span>
              </p>
              <span className="text-xl lg:text-2xl text-violet-500 font-medium">
                ${producto.price?.toLocaleString("es-AR") || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardMasVendidos;
