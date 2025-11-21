import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormRegister from "../components/Registro/FormRegister";
import FormLogin from "../components/Registro/FormLogin";

const Registro = () => {
  const [activeTab, setActiveTab] = useState("register");

  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:min-h-screen bg-[#111111] text-white">
      {/* Lado imagen y texto */}
      <div className="relative hidden lg:block">
        <img
          src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
          alt="gamer setup"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent h-full flex flex-col justify-center items-center p-16 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tighter">BYTEZONE</h1>
          <p className="text-xl text-gray-300 max-w-md leading-relaxed">
            Desbloquea el siguiente nivel. Únete a la comunidad y accede a equipamiento exclusivo.
          </p>
        </div>
      </div>

      {/* Lado formulario */}
      <div className="flex flex-col h-[700px] md:h-screen justify-center items-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="flex border-b border-white/10 mb-8">
            <button
              onClick={() => setActiveTab("register")}
              className={`w-1/2 py-3 text-center font-semibold transition-colors duration-300 ${activeTab === 'register' ? 'text-violet-400 border-b-2 border-violet-400' : 'text-gray-400 hover:text-white'}`}
            >
              Crear Cuenta
            </button>
            <button
              onClick={() => setActiveTab("login")}
              className={`w-1/2 py-3 text-center font-semibold transition-colors duration-300 ${activeTab === 'login' ? 'text-violet-400 border-b-2 border-violet-400' : 'text-gray-400 hover:text-white'}`}
            >
              Iniciar Sesión
            </button>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="min-h-[400px]"
            >
              {activeTab === "register" ? <FormRegister /> : <FormLogin />}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative my-6 w-full max-w-sm">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center px-2 text-sm text-gray-500 bg-[#111111]">
            O continuar con
          </div>
        </div>

        <div className="flex justify-center w-full max-w-sm space-x-4">
          {/* Google */}
          <button
            className="rounded-full border h-[50px] w-[50px] flex items-center justify-center border-white/20 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
            aria-label="Continuar con Google"
          >
            <i className="bi bi-google text-2xl"></i>
          </button>

          {/* Facebook */}
          <button
            className="rounded-full border h-[50px] w-[50px] flex items-center justify-center border-white/20 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
            aria-label="Continuar con Facebook"
          >
            <i className="bi bi-facebook text-2xl"></i>
          </button>

          {/* Apple */}
          <button
            className="rounded-full h-[50px] w-[50px] border flex items-center justify-center border-white/20 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
            aria-label="Continuar con Apple"
          >
            <i className="bi bi-apple text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
