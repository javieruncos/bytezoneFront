import { motion } from "framer-motion";

const Teclado = () => {
  return (
    <>
      <div className="w-full h-full ">
        <div className="flex flex-col md:grid md:grid-cols-2 w-full h-full md:mx-5 text-center md:text-left overflow-hidden">
          <motion.div
            className="pt-20 px-10 flex flex-col gap-5 order-1"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold">
              ByteZone innovación en tecnología
            </h1>
            <div className="mt-20 flex flex-col gap-5">
              <p className="text-4xl font-bold">Joystick Blancos</p>
              <div className="flex gap-6 mt-5 justify-center md:justify-start">
                <button className="bg-white text-black rounded-sm px-6 py-2">
                  Ver Producto
                </button>
                <button className="bg-blue-500 text-white rounded-sm px-6 py-2">
                  Comprar Ahora
                </button>
              </div>
            </div>
          </motion.div>
          <div className=" flex justify-center items-center md:w-[500px] h-full relative overflow-hidden mx-auto order-2 md:order-2 mt-10 md:mt-0">
            <motion.div
              className="w-full h-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdnx.jumpseller.com/cibertech/image/58107633/g502x-plus-gallery-1-white.png?1733617661"
                alt="Joystick Blanco"
                className="w-[650px] h-[300px]  relative object-cover top-0 left-0 md:top-0 md:left-0 md:w-full md:h-full md:absolute"
              />
              <motion.div
                initial={{ x: 100, opacity: 0 }} // empieza a la derecha
                animate={{ x: 0, opacity: 1 }} // termina en su posición
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-20 left-10 w-[150px]"
              >
                <span className="text-white py-2 px-10 text-2xl bg-blue-500 rounded-sm">
                  $150.000
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teclado;
