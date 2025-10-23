import React from "react";

const CardMasVendidos = ({ producto }) => {
  return (
    <div className="group w-full bg-white border border-gray-200 rounded-md overflow-hidden transition-all duration-500 flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-6 h-auto pb-10 md:h-[260px]">
      {/* Imagen */}
      <div className="flex-shrink-0 w-full md:w-[230px] h-[300px] md:h-[200px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Información */}
      <div className="flex flex-col justify-between text-black w-full md:w-[calc(100%-230px)] h-auto md:h-[200px]">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl md:text-2xl font-semibold">
            {producto.nombre}
          </h4>
          ⭐⭐⭐⭐⭐
          <p className="text-sm">
            Stock:{" "}
            <span
              className={`${
                producto.stock === "disponible"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {producto.stock}
            </span>
          </p>
          <span className="text-xl md:text-2xl text-blue-500 font-medium">
            ${producto.precio}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardMasVendidos;
