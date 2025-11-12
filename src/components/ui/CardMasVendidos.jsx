import React from "react";

const CardMasVendidos = ({ producto }) => {
  // Normaliza la propiedad 'images' para que siempre sea un array
  const getImagesAsArray = (images) => {
    if (Array.isArray(images)) return images;
    if (typeof images === 'string' && images.trim() !== '') return [images];
    return [];
  };

  const images = getImagesAsArray(producto.images);
  const imageUrl = images.length > 0 ? images[0] : "/img/placeholder.jpg"; // Usar una imagen de respaldo

  return (
    <>
      <a href={`/detalle/${producto._id}`}>
        <div className="group w-full bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-500 flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-6 h-auto pb-10 md:h-[260px]">
          {/* Imagen */}
          <div className="flex-shrink-0 w-full md:w-[230px] h-[300px] md:h-[200px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt={producto.name}
              className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Información */}
          <div className="flex flex-col justify-between text-black w-full md:w-[calc(100%-230px)] h-auto md:h-[200px]">
            <div className="flex flex-col gap-2">
              <h4 className="text-xl md:text-2xl font-semibold">
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
              <span className="text-xl md:text-2xl text-blue-500 font-medium">
                ${producto.price?.toLocaleString("es-AR") || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default CardMasVendidos;
