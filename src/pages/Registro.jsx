import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormRegister from "../components/Registro/FormRegister";
import FormLogin from "../components/Registro/FormLogin";

const Registro = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  const formVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Lado imagen y texto */}
      <div className="relative h-screen bg-amber-200">
        <img
          src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
          alt="gamer setup"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="relative z-10 bg-black/70 h-full flex flex-col justify-start py-20 px-10 md:px-16 text-white">
          <h1 className="text-5xl font-extrabold mb-4">Bytezone</h1>
          <p className="text-sm md:text-base max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            suscipit molestias, eius in autem officia omnis aut cupiditate eaque
            et.
          </p>

          <div className="flex gap-3 mt-10">
            <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full">
              <i className="bi bi-envelope-at text-black text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <p className="text-sm">nxbusiness@gmail</p>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full">
              <i className="bi bi-telephone text-black text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Telefono</h2>
              <p className="text-sm">+123456789</p>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full">
              <i className="bi bi-geo-alt text-black text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Direccion</h2>
              <p className="text-sm">Calle 123, Ciudad</p>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <div className="h-[60px] w-[60px] bg-white flex items-center justify-center rounded-full">
              <i className="bi bi-facebook text-black text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Redes sociales</h2>
              <p className="text-sm">facebook.com/bytezone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lado formulario */}
      <div className="flex flex-col h-screen justify-center items-center bg-white px-8 py-12">
        <h2 className="text-xl mb-8 text-gray-700 pt-10">
          {isRegistering ? "Crea tu cuenta" : "Inicia sesión"}
        </h2>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isRegistering ? "register" : "login"}
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            {isRegistering ? <FormRegister /> : <FormLogin />}
          </motion.div>
        </AnimatePresence>

        <p className="mt-6 text-sm text-gray-600">
          {isRegistering ? (
            <>
              ¿Ya tienes una cuenta?{" "}
              <button
                type="button"
                onClick={() => setIsRegistering(false)}
                className="font-semibold text-blue-500 hover:text-blue-400 underline"
              >
                Inicia sesión
              </button>
            </>
          ) : (
            <>
              ¿No tienes una cuenta?{" "}
              <button
                type="button"
                onClick={() => setIsRegistering(true)}
                className="font-semibold text-blue-500 hover:text-blue-400 underline"
              >
                Regístrate
              </button>
            </>
          )}
        </p>

        <div className="relative my-6 w-full max-w-sm">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center bg-white px-2 text-sm text-gray-500">
            O {isRegistering ? "regístrate" : "inicia sesión"} con
          </div>
        </div>

        <div className="flex justify-center w-full max-w-sm space-x-4">
          {/* Google */}
          <button
            className="rounded-full border h-[50px] w-[50px]  flex items-center justify-center border-gray-300 bg-white p-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            aria-label="Continuar con Google"
          >
            <i className="bi bi-google text-2xl"></i>
          </button>

          {/* Facebook */}
          <button
            className="rounded-full border h-[50px] w-[50px]  flex items-center justify-center border-gray-300 bg-white p-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            aria-label="Continuar con Facebook"
          >
            <i className="bi bi-facebook text-2xl"></i>
          </button>

          {/* Email */}
          <button
            className="rounded-full h-[50px] w-[50px] border flex items-center justify-center border-gray-300 bg-white p-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            aria-label="Continuar con Email"
          >
            <i className="bi bi-envelope-fill text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
