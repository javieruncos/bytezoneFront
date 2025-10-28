import React from "react";

const CardProduct = ({ product}) => {
  return (
    <div className="group h-[530px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      {/* Contenedor de imágenes */}
      <div className="relative h-[300px] w-full overflow-hidden">
        {/* Imagen principal */}
        <img
          src={product.images[0]}
          alt="producto principal"
          className="absolute  w-full h-full object-cover opacity-100 transition-opacity duration-700 ease-in-out "
        />
        
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col justify-between h-[230px]">
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-500 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Este es un ejemplo de una card moderna con cambio de imagen al pasar
            el cursor.
          </p>
          <p className="text-blue-500 pt-3 font-medium">  Precio: ${product.price?.toLocaleString("es-AR") || "N/A"}</p>
        </div>

        <button className="mt-4 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-all duration-300 self-start">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
