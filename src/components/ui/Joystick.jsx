import { motion } from "framer-motion";

const Joystick = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full mx-5">
        {/* Texto animado */}
        <motion.div
          className="pt-20 px-10 flex flex-col gap-5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold">
            ByteZone innovación en tecnología
          </h1>
          <div className="mt-20 flex flex-col gap-5">
            <p className="text-4xl font-bold">Joystick Blancos</p>
            <div className="flex gap-6 mt-5">
              <button className="bg-white text-black rounded-sm px-6 py-2">
                Ver Producto
              </button>
              <button className="bg-blue-500 text-white rounded-sm px-6 py-2">
                Comprar Ahora
              </button>
            </div>
          </div>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          className="flex justify-center items-center w-full h-full relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-edge-listing-thumb-01-en-23aug22?$facebook$"
            alt="Joystick Blanco"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Joystick;
