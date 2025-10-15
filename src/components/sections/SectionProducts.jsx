import React from "react";
import CardProduct from "../ui/CardProduct";

const SectionProducts = () => {
  return (
    <div className="h-auto container mx-auto px-15">
      <div className="flex justify-between items-center py-5">
        <div>
          <h2 className="text-4xl font-bold">
            Ultimas <span className="text-blue-500">Novedades</span>
          </h2>
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
      <hr className="text-blue-500" />
      <div className="grid grid-cols-3 gap-5 h-auto py-15">
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
      </div>
    </div>
  );
};

export default SectionProducts;
