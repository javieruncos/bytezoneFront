import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto px-0 mt-50">
      <div className="h-[280px] bg-black rounded-md p-15 relative ">
        <div className="flex justify-between items-center">
          <div className="w-2/2">
            <h2 className="text-5xl font-bold text-white">
              Celebrate July with Discounts on All Phone Accessories!
            </h2>
            <button className="py-3 mt-10 px-10 bg-blue-500 text-white border rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500">
              Ver Todo
            </button>
          </div>
          <div className="overflow-hidden w-1/2 ">
            <div className=" ">
              <img
                src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/66156bc23d283d4dae0ae8ea_wepik-export-202404081735405VzB.webp"
                alt=""
                className=" h-[400px] absolute -top-30 right-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Banner;
