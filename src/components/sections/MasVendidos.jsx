import React from "react";

const MasVendidos = ({productos}) => {

  const masVendidos = productos.filter((item) =>  item.rating > 4.8);




  return (
    <div className="h-auto container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-4 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Accesorios más <span className="text-violet-500">Vendidos</span>
        </h2>
        <a href="/categorias" className="py-2 sm:py-3 px-6 sm:px-10 bg-violet-600 text-white border rounded-md hover:bg-black hover:text-white-600 hover:border hover:border-violet-500 transition-all">
          <span>Ver Todo</span>
        </a>
      </div>

      <hr className="border-blue-500" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 ">
        {/* CARD */}
        {masVendidos?.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="group h-auto sm:h-[400px] w-full bg-white/4 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 p-6"
          >
            <div className="flex-shrink-0 h-[220px] sm:h-[300px] w-full sm:w-[300px] flex justify-center items-center bg-violet-800 rounded-2xl overflow-hidden relative">
              <img src="https://img.freepik.com/vector-gratis/margen-abstracto-neon-sobre-fondo-purpura-oscuro_53876-99055.jpg" alt="" className="object-cover h-full" />
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/80">
              <img
                src={item.images[0]}
                alt="Auriculares"
                className="object-contain md:h-[250px] h-[150px]  w-full group-hover:scale-105 transition-transform duration-500"
              />

              </div>
            </div>
            <div className="flex flex-col justify-center  text-center sm:text-left">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-2">
                {item.name}
              </h4>
              <p className="text-gray-300 text-base sm:text-lg mb-4">
                {item.shortDescription}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white mb-4">
              $ {item.price?.toLocaleString("es-AR") || "N/A"}
              </p>
              <a href={`detalle/${item._id}`}className="px-4 sm:px-5 py-2 bg-violet-500 hover:bg-black text-white rounded-lg transition-all duration-300 md:w-50 sm:w-auto text-center sm:text-left border border-violet-500 hover:border-violet-600">
                Ver producto
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasVendidos;
