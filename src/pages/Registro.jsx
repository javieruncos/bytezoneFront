import { useState } from "react";
import { motion ,AnimatePresence} from "framer-motion";

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
            <div className="h-[60px] w-[60px] bg-amber-50 flex items-center justify-center rounded-full">
              <i className="bi bi-envelope-at text-black text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Email</h2>
              <p className="text-sm">nxbusiness@gmail</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="h-[60px] w-[60px] bg-amber-50 flex items-center justify-center rounded-full">
              <i className="bi bi-telephone text-black text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Telefono</h2>
              <p className="text-sm">+123456789</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="h-[60px] w-[60px] bg-amber-50 flex items-center justify-center rounded-full">
              <i className="bi bi-geo-alt text-black text-2xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Direccion</h2>
              <p className="text-sm">Calle 123, Ciudad</p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <div className="h-[60px] w-[60px] bg-amber-50 flex items-center justify-center rounded-full">
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
        
        <h2 className="text-xl mb-8 text-gray-700 pt-5">
          {isRegistering ? "Crea tu cuenta" : "Inicia sesión"}
        </h2>

        <AnimatePresence mode="wait" initial={false}>
          <motion.form
            key={isRegistering ? "register" : "login"}
            className="w-full max-w-sm"
            aria-label={
              isRegistering
                ? "Formulario de registro"
                : "Formulario de inicio de sesión"
            }
            noValidate
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {isRegistering && (
              <div className="mb-5">
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  id="nombre"
                  type="text"
                  placeholder="Nombre de usuario"
                  required
                />
              </div>
            )}

            <div className="mb-5">
              <input
                className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                id="email"
                type="email"
                placeholder="Correo electrónico"
                required
              />
            </div>

            <div className="mb-7">
              <input
                className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                id="password"
                type="password"
                placeholder="Contraseña"
                required
              />
            </div>

            {isRegistering && (
              <div className="mb-7">
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  id="confirm-password"
                  type="password"
                  placeholder="Confirmar contraseña"
                  required
                />
              </div>
            )}

            <button
              className={`w-full rounded py-3 font-bold text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 transition
              ${
                isRegistering
                  ? "bg-blue-500 hover:bg-blue-400"
                  : "bg-blue-500 hover:bg-blue-400"
              }`}
              type="button"
            >
              {isRegistering ? "Registrarse" : "Iniciar sesión"}
            </button>
          </motion.form>
        </AnimatePresence>

        <p className="mt-6 text-sm text-gray-600">
          {isRegistering ? (
            <>
              ¿Ya tienes una cuenta?{" "}
              <button
                type="button"
                onClick={() => setIsRegistering(false)}
                className="font-semibold text-amber-500 hover:text-amber-600 underline"
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
                className="font-semibold text-amber-500 hover:text-amber-600 underline"
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
            className="rounded-full border border-gray-300 bg-white p-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            aria-label="Continuar con Google"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.285 6.857A8.947 8.947 0 0012 4.002a8.947 8.947 0 00-8.285 2.855A8.947 8.947 0 004.002 12a8.947 8.947 0 002.855 8.285A8.947 8.947 0 0012 20.998a8.947 8.947 0 008.285-2.855A8.947 8.947 0 0020.998 12a8.947 8.947 0 00-2.855-8.285z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4"
              />
            </svg>
          </button>

          {/* Facebook */}
          <button
            className="rounded-full border border-gray-300 bg-white p-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            aria-label="Continuar con Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-4.5h-2v-3h2V8.5c0-2.21 1.28-3.5 3.5-3.5h2.5v3H15c-.55 0-1 .45-1 1v2h2.5l-.5 3H14v4.5h-3z"
              />
            </svg>
          </button>

          {/* Email */}
          <button
            className="rounded-full border border-gray-300 bg-white p-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            aria-label="Continuar con Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
