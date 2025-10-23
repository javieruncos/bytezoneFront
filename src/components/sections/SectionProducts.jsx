import React from "react";
import CardProduct from "../ui/CardProduct";

const SectionProducts = () => {
  return (
    // <div className="h-auto container mx-auto px-0">
    //   <div className="flex justify-between items-center py-5">
    //     <div>
    //       <h2 className="text-4xl font-bold">
    //         Ultimas <span className="text-blue-500">Novedades</span>
    //       </h2>
    //     </div>
    //     <div>
    //       <button
    //         className="py-3 px-10 bg-blue-500 text-white border
    //                  rounded-md hover:bg-white hover:text-blue-500 hover:border
    //                   hover:border-blue-500"
    //       >
    //         Ver Todo
    //       </button>
    //     </div>
    //   </div>
    //   <hr className="text-blue-500" />
    //   <div className="grid grid-cols-3 gap-5 h-auto py-15">
    //     <CardProduct></CardProduct>
    //     <CardProduct></CardProduct>
    //     <CardProduct></CardProduct>
    //   </div>
    // </div>
    <div className="h-auto container mx-auto px-4 sm:px-6 lg:px-0">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
          Últimas <span className="text-blue-500">Novedades</span>
        </h2>
        <button
          className="py-2 px-6 sm:py-3 sm:px-10 bg-blue-500 text-white border rounded-md 
                 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500
                 transition-all duration-300"
        >
          Ver Todo
        </button>
      </div>

      <hr className="border-blue-500" />

      {/* Grid responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};

export default SectionProducts;
