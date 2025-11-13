import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="relative radialBackground rounded-md p-6 sm:p-10 md:p-15 flex flex-col md:flex-row items-center md:items-start overflow-hidden">
        <div className="w-full md:w-1/2 text-center md:text-left pt-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Celebrate July with Discounts on All Phone Accessories!
          </h2>
          <div className="mt-10">
            <Link
              to="/categorias"
              className="mt-16 sm:mt-10 py-2 sm:py-3 px-6 sm:px-10 bg-violet-600 text-white border rounded-md hover:bg-black hover:text-white hover:border hover:border-violet-600 transition-all "
            >
              Ver Todo
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative flex justify-center md:justify-end">
          <img
            src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/66156bc23d283d4dae0ae8ea_wepik-export-202404081735405VzB.webp"
            alt="Promo"
            className="max-w-full mt-5 h-auto md:h-[350px] object-contain md:absolute md:-top-8 md:right-0 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
