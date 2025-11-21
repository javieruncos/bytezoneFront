import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Teclado = () => {
  return (
    <>
      <div className="lg:w-full lg:h-full md:h-[1500px] md:w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 w-full h-full md:mx-5 text-center lg:text-left overflow-hidden">
          <motion.div
            className="pt-20 px-10 flex flex-col gap-5 order-1"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold">
              ByteZone innovación en tecnología
            </h1>
            <div className="lg:mt-20 md:mt-5 flex flex-col gap-5">
              <p className="text-4xl font-bold">Joystick Blancos</p>
              <div className="flex gap-6 mt-5 justify-center lg:justify-start">
                <Link
                  to={"/categorias/Joystick"}
                  className="bg-white text-black rounded-sm px-6 py-2"
                >
                  Ver Productos
                </Link>
                <button className="bg-violet-500 text-white rounded-sm px-6 py-2">
                  Categorias
                </button>
              </div>
            </div>
          </motion.div>
          <div className=" flex justify-center items-center md:w-[500px] lg:h-full md:h-[600px] relative overflow-hidden mx-auto order-2 md:order-2 mt-10 md:mt-0">
            <motion.div
              className="lg:w-full lg:h-full md:h-full md:w-[650px]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdnx.jumpseller.com/cibertech/image/58107633/g502x-plus-gallery-1-white.png?1733617661"
                alt="Joystick Blanco"
                className="lg:w-[650px] lg:h-[400px]  h-[250px] relative object-contain lg:absolute lg:left-0 lg:top-0 md:h-full md:w-[400px] md:left-20 md:bottom-30"
              />
              <motion.div
                initial={{ x: 100, opacity: 0 }} // empieza a la derecha
                animate={{ x: 0, opacity: 1 }} // termina en su posición
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-20 left-10 w-[150px]"
              >
                <span className="text-white py-2 px-10 text-2xl bg-violet-600  rounded-sm">
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
