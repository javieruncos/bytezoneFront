import React from "react";

const MasVendidos = () => {
  return (
    <div className="h-auto container mx-auto px-0">
      <div className="flex justify-between items-center">
        <div className="py-10">
          <h4 className="text-4xl font-bold">
            Accesorios más <span className="text-blue-500">vendidos</span>{" "}
          </h4>
        </div>
        <div>
          <button
            className="py-3 px-10 bg-blue-500 text-white border
                     rounded-md hover:bg-white hover:text-blue-500 hover:border
                      hover:border-blue-500"
          >
            Ver Todo
          </button>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 py-0 gap-3">
        <div className="group h-[400px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 flex items-center gap-6 p-6">
          <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
              alt="Auriculares"
              className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center text-black">
            <h4 className="text-3xl font-semibold mb-2">Auriculares Premium</h4>
            <p className="text-gray-300 text-lg mb-4">
              Sonido envolvente y diseño ergonómico para una experiencia de
              audio superior.
            </p>
            <p className="text-2xl font-bold text-blue-500 mb-4">$150.00 USD</p>
            <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
              Ver producto
            </button>
          </div>
        </div>
        <div className="group h-[400px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 flex items-center gap-6 p-6">
          <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
              alt="Auriculares"
              className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center text-black">
            <h4 className="text-3xl font-semibold mb-2">Auriculares Premium</h4>
            <p className="text-gray-300 text-lg mb-4">
              Sonido envolvente y diseño ergonómico para una experiencia de
              audio superior.
            </p>
            <p className="text-2xl font-bold text-blue-500 mb-4">$150.00 USD</p>
            <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
              Ver producto
            </button>
          </div>
        </div>
        <div className="group h-[400px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 flex items-center gap-6 p-6">
          <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-gradient-to-br bg-[#191919] rounded-2xl overflow-hidden">
            <img
              src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
              alt="Auriculares"
              className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center text-black">
            <h4 className="text-3xl font-semibold mb-2">Auriculares Premium</h4>
            <p className="text-gray-300 text-lg mb-4">
              Sonido envolvente y diseño ergonómico para una experiencia de
              audio superior.
            </p>
            <p className="text-2xl font-bold text-blue-500 mb-4">$150.00 USD</p>
            <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
              Ver producto
            </button>
          </div>
        </div>
        <div className="group h-[400px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 flex items-center gap-6 p-6">
          <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
            <img
              src="https://diamondsystemar.vtexassets.com/arquivos/ids/163846-800-450?v=638881982714900000&width=800&height=450&aspect=true"
              alt="Auriculares"
              className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col justify-center text-black">
            <h4 className="text-3xl font-semibold mb-2">Auriculares Premium</h4>
            <p className="text-gray-300 text-lg mb-4">
              Sonido envolvente y diseño ergonómico para una experiencia de
              audio superior.
            </p>
            <p className="text-2xl font-bold text-blue-500 mb-4">$150.00 USD</p>
            <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
              Ver producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasVendidos;
