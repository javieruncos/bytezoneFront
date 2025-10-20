import { image } from "framer-motion/client";
import { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";

const Destacados = () => {
  const imagesWhite = [
    "https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp",
    "https://static.vecteezy.com/system/resources/previews/044/283/776/non_2x/white-headphone-on-transparent-background-image-png.png",
    "https://static.vecteezy.com/system/resources/previews/012/981/082/non_2x/wireless-headphones-side-view-white-icon-on-a-transparent-background-3d-rendering-png.png",
    "https://png.pngtree.com/png-vector/20241030/ourmid/pngtree-wireless-headphones-png-image_14187419.png",
  ];

  const imagesBlack = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMjz5i8jHRV_5LxQfDjHs8Yfku5vcVlqd-Q&s",
    "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-wireless-headphone-png-image_15830312.png",
    "https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp",
    "https://w7.pngwing.com/pngs/360/202/png-transparent-headphones-computer-file-black-headphones-electronics-black-hair-black-white.png",
  ];

  const componentOpcion = ["blanco", "negro"];

  const [active, setActive] = useState(0);
  const [opcionComponente, setOpcionComponente] = useState(0);

  const currentImages = opcionComponente === 0 ? imagesWhite : imagesBlack;

  return (
    <div className="h-auto  container mx-auto px-0">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-2 row-span-5 py-5">
          <div className="h-auto w-full bg-black text-white py-5 rounded-2xl">
            <div className="flex justify-center flex-col items-center py-9 gap-4">
              <span className="bg-blue-500 py-2 px-3 rounded-sm">
                Productos Destacados
              </span>
              <h3 className="text-4xl font-medium">Nuevos Auriculares</h3>
            </div>
            <div className="h-[350px]">
              <img
                src="https://cdn.prod.website-files.com/66010b96fb3d1aa198478236/6614f0cb0c96220c7026b096_wepik-export-20240408173119hqvi.webp"
                alt="Auriculares"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-5 col-start-3 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={opcionComponente}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="h-[555px]  w-full mt-5 flex gap-4 border border-blue-300 px-5 py-5 rounded-2xl"
            >
              <div className="h-full w-[200px]  flex flex-col justify-around items-center">
                {currentImages.map((image, index) => (
                  <div
                    key={index}
                    className={`h-[120px] w-full rounded-2xl py-4 border transition-all duration-300 cursor-pointer ${
                      active === index
                        ? "border-blue-500 scale-105"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                    onClick={() => setActive(index)}
                  >
                    <img
                      src={image}
                      alt="Auriculares"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="h-full w-full">
                <div className="h-[300px] bg-black py-5 rounded-2xl">
                  <img
                    src={currentImages[active]}
                    alt="Auriculares"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-3xl font-medium">Auriculares Blancos</h3>
                  <p>
                    Este es un ejemplo de una card moderna con cambio de imagen
                    al pasar el cursor.
                  </p>
                  <p className="text-2xl text-blue-500 font-medium py-3">
                    Precio: $19.99
                  </p>
                  <button className="px-3 py-3 rounded-sm bg-blue-500 text-white">
                    Ver Producto
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex gap-4 justify-center mt-2 pb-15">
        {componentOpcion.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setOpcionComponente(index)}
            layout
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.5,
            }}
            className={`h-5 flex items-center justify-center ${
              opcionComponente === index
                ? "bg-blue-500 w-20 rounded-full"
                : "bg-gray-300 w-5 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Destacados;
