import React from "react";

const CardProduct = () => {
  return (
    <div className="group h-[530px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      {/* Contenedor de imágenes */}
      <div className="relative h-[300px] w-full overflow-hidden">
        {/* Imagen principal */}
        <img
          src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-listing-thumb-01-en-23aug22?$facebook$"
          alt="producto principal"
          className="absolute  w-full h-full object-cover opacity-100 transition-opacity duration-700 ease-in-out group-hover:opacity-0"
        />
        {/* Imagen alternativa (hover) */}
        <img
          src="https://i.ytimg.com/vi/SebzB8W3bVU/maxresdefault.jpg"
          alt="producto hover"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col justify-between h-[230px]">
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-500 transition-colors duration-300">
            Producto Destacado
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Este es un ejemplo de una card moderna con cambio de imagen al pasar
            el cursor.
          </p>
          <p className="text-blue-500 pt-3 font-medium">Precio: $19.99</p>
        </div>

        <button className="mt-4 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-all duration-300 self-start">
          Ver más
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
