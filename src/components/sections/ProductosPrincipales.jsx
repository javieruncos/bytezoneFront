import React from "react";
import { useState } from "react";

const ProductosPrincipales = () => {
  const [btnActive, setBtnActive] = useState("");

  const items = [
    "auriculares",
    "teclados",
    "monitores",
    "mouse",
    "parlantes",
    "cámaras",
    "micrófonos",
  ];

  return (
    <div className="container mx-auto my-17">
      <div className="flex justify-between items-center py-5">
        <div>
          <h2 className="text-4xl font-bold">
            Ultimas <span className="text-blue-500">Novedades</span>
          </h2>
        </div>
        <div>
          <button className="py-3 px-10 bg-blue-500 text-white border rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
            <span>VerTodo</span>
          </button>
        </div>
      </div>
      <hr className="text-blue-500" />
      <div className="mt-16 flex gap-3 h-auto border-gray-300 rounded-md  relative">
        <div className="w-[200px] h-[400px] overflow-y-auto rounded-md  sticky top-5">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => setBtnActive(item)}
              className={`text-center py-4 border-b w-full border-gray-300 hover:border-blue-500  ${
                btnActive === item
                  ? "bg-blue-500 text-white rounded-md"
                  : "bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-full h-auto  grid grid-cols-2 gap-4">
          <div className="group h-[400px] w-full py-5 border border-white/10 rounded-3xl overflow-hidden bg-white transition-all duration-500 flex items-center gap-6 p-6">
            <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
              <img
                src="https://diamondsystemar.vtexassets.com/arquivos/ids/163846-800-450?v=638881982714900000&width=800&height=450&aspect=true"
                alt="Auriculares"
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center text-black">
              <h4 className="text-3xl font-semibold mb-2">
                Auriculares Premium
              </h4>
              <p className="text-gray-300 text-lg mb-4">
                Sonido envolvente y diseño ergonómico para una experiencia de
                audio superior.
              </p>
              <p className="text-2xl font-bold text-blue-500 mb-4">
                $150.00 USD
              </p>
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
                Ver producto
              </button>
            </div>
          </div>
          <div className="group h-[400px] w-full bg-white  backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 flex items-center gap-6 p-6">
            <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
              <img
                src="https://diamondsystemar.vtexassets.com/arquivos/ids/163846-800-450?v=638881982714900000&width=800&height=450&aspect=true"
                alt="Auriculares"
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center text-black">
              <h4 className="text-3xl font-semibold mb-2">
                Auriculares Premium
              </h4>
              <p className="text-gray-300 text-lg mb-4">
                Sonido envolvente y diseño ergonómico para una experiencia de
                audio superior.
              </p>
              <p className="text-2xl font-bold text-blue-500 mb-4">
                $150.00 USD
              </p>
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
                Ver producto
              </button>
            </div>
          </div>
          <div className="group h-[400px] w-full bg-white backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden  transition-all duration-500 flex items-center gap-6 p-6">
            <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
              <img
                src="https://diamondsystemar.vtexassets.com/arquivos/ids/163846-800-450?v=638881982714900000&width=800&height=450&aspect=true"
                alt="Auriculares"
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center text-black">
              <h4 className="text-3xl font-semibold mb-2">
                Auriculares Premium
              </h4>
              <p className="text-gray-300 text-lg mb-4">
                Stock:  <span className="text-green-300">disponible</span>
              </p>
              <p className="text-2xl font-bold text-blue-500 mb-4">
                $150.00 USD
              </p>
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
                Ver producto
              </button>
            </div>
          </div>
          <div className="group h-[400px] w-full bg-white backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden  transition-all duration-500 flex items-center gap-6 p-6">
            <div className="flex-shrink-0 h-[300px] w-[300px] flex justify-center items-center bg-[#191919] rounded-2xl overflow-hidden">
              <img
                src="https://diamondsystemar.vtexassets.com/arquivos/ids/163846-800-450?v=638881982714900000&width=800&height=450&aspect=true"
                alt="Auriculares"
                className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col justify-center text-black">
              <h4 className="text-3xl font-semibold mb-2">
                Auriculares Premium
              </h4>
              <p className="text-gray-300 text-lg mb-4">
                Sonido envolvente y diseño ergonómico para una experiencia de
                audio superior.
              </p>
              <p className="text-2xl font-bold text-blue-500 mb-4">
                $150.00 USD
              </p>
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300">
                Ver producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosPrincipales;
