import { motion } from "framer-motion";

const Teclado = () => {
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
            <p className="text-4xl font-bold">Mouse Blanco</p>
            <div className="flex gap-6 mt-5">
              <button className="bg-white text-black rounded-sm px-16 py-5 border hover:bg-black
               hover:text-white
               hover:border-x-amber-50
                transition duration-700
               cursor-pointer
               ">
                Ver Producto
              </button>
              <button className="bg-blue-500 text-white border  rounded-sm px-16 py-5 hover:bg-black
               hover:text-white
               hover:border-blue-500 
               transition duration-700
               cursor-pointer">
                Comprar Ahora
              </button>
            </div>
          </div>
        </motion.div>

        {/* Imagen animada */}
        <motion.div
          className="flex justify-center items-center h-full w-full overflow-hidden relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://cdnx.jumpseller.com/cibertech/image/58107633/g502x-plus-gallery-1-white.png?1733617661"
            alt="Mouse Blanco"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }} // empieza a la derecha
            animate={{ x: 0, opacity: 1 }} // termina en su posición
            transition={{ duration: 0.6 ,delay: 1}}
            className=" absolute top-20 left-10 "
          >
            <span className="text-white py-2 px-10 text-2xl bg-blue-500 rounded-sm">
              $80.000
            </span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Teclado;
