import React from "react";

const CardMasVendidos = ({producto}) => {
  return (
    <div className="group h-[400px] w-full bg-white border rounded-3xl overflow-hidden transition-all duration-500 flex items-center gap-6 p-6">
      <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col justify-center text-black">
        <h4 className="text-3xl font-semibold mb-2">{producto.nombre}</h4>
        <p className="text-black text-lg mb-4">{producto.descripcion}</p>
        <p className="text-sm mb-2">
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
        <p className="text-2xl font-bold text-blue-500 mb-4">
          ${producto.precio} USD
        </p>
        <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
          Ver producto
        </button>
      </div>
    </div>
  );
};

export default CardMasVendidos;
