import React from "react";

const MasVendidos = () => {
  return (
    <div className="h-auto container mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-center py-5 gap-4 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Accesorios más <span className="text-blue-500">Vendidos</span>
        </h2>
        <button className="py-2 sm:py-3 px-6 sm:px-10 bg-blue-500 text-white border rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all">
          <span>Ver Todo</span>
        </button>
      </div>

      <hr className="border-blue-500" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {/* CARD */}
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className="group h-auto sm:h-[400px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 p-6"
          >
            <div className="flex-shrink-0 h-[220px] sm:h-[300px] w-full sm:w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
              <img
                src={
                  index === 3
                    ? "https://diamondsystemar.vtexassets.com/arquivos/ids/163846-800-450?v=638881982714900000&width=800&height=450&aspect=true"
                    : "https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
                }
                alt="Auriculares"
                className="object-contain md:h-[250px] h-[150px]  w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center text-black text-center sm:text-left">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-2">
                Auriculares Premium
              </h4>
              <p className="text-gray-300 text-base sm:text-lg mb-4">
                Sonido envolvente y diseño ergonómico para una experiencia de
                audio superior.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">
                $150.00 USD
              </p>
              <button className="px-4 sm:px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 w-full sm:w-auto">
                Ver producto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasVendidos;
