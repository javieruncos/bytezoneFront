import React from "react";

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Contáctanos</h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Ponte en contacto con nosotros para consultas, soporte o cualquier
          información sobre nuestros productos.
        </p>
      </div>

      {/* Información de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <div className="p-4 bg-violet-600 h-16 w-16 rounded-2xl mx-auto mb-4 flex justify-center items-center text-white">
              <i className="bi bi-envelope text-3xl"></i>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Contáctanos
          </h2>
          <p className="text-gray-300 mb-2 text-center">
            <a href="mailto:nxbusiness@gmail.com" className="text-violet-400 hover:underline">
              nxbusiness@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mb-2 text-center">
            <a href="mailto:nxelectronicZ@gmail.com" className="text-violet-400 hover:underline">
              nxelectronicZ@gmail.com
            </a>
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <div className="p-4 bg-violet-600 h-16 w-16 rounded-2xl mx-auto mb-4 flex justify-center items-center text-white">
              <i className="bi bi-geo-alt text-3xl"></i>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Visítanos</h2>
          <p className="text-gray-300 mb-2 text-center">
            Rivadavia 1000 San Miguel de Tucuman, Tucuman, Argentina
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg p-6">
          <div className="text-center">
            <div className="p-4 bg-violet-600 h-16 w-16 rounded-2xl mx-auto mb-4 flex justify-center items-center text-white">
              <i className="bi bi-telephone text-3xl"></i>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Soporte</h2>
          <p className="text-gray-300 mb-2 text-center">(415) 555‑0XX2</p>
          <p className="text-gray-300 mb-2 text-center">(800) 555‑0XX5</p>
        </div>
      </div>

      {/* Formulario */}
      <div className="p-4 md:p-8 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <span className="font-medium text-violet-400">Contactanos</span>

          <h2 className="text-4xl font-bold mb-6 text-white">Comunícate hoy mismo</h2>
          <p className="text-gray-300 leading-relaxed">
            Explora tecnología de alto rendimiento diseñada para gamers y
            profesionales. Conecta con nosotros y potencia tu espacio al máximo
            nivel.
          </p>
          <div className="flex justify-center items-center flex-col md:items-start ">
            <div className="h-[100px] w-[300px] bg-white/5 mt-5 px-5 border border-white/10 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-violet-600 rounded-md">
                <i className="bi bi-envelope text-3xl text-white"></i>
              </div>
              <div>
                <span className="text-violet-400">Email</span>
                <p className="text-white">bzbusiness@gmail</p>
              </div>
            </div>
            <div className="h-[100px] w-[300px] bg-white/5 mt-5 px-5 border border-white/10 rounded-2xl flex items-center gap-4">
              <div className=" p-3 bg-violet-600 rounded-md">
                <i className="bi bi-telephone text-3xl text-white"></i>
              </div>
              <div>
                <span className="text-violet-400">Telefono</span>
                <p className="text-white">(414) 687 - 5892</p>
              </div>
            </div>
          </div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="text"
            placeholder="Teléfono"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="text"
            placeholder="Asunto"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 md:col-span-2 h-40 resize-none"
          />
          <div>
            <button
              type="submit"
              className="bg-violet-600 text-white font-semibold py-3 px-16 rounded-lg hover:bg-violet-700 transition-colors col-span-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
