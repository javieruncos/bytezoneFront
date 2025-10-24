import React from "react";

const Contacto = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contáctanos</h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
          Ponte en contacto con nosotros para consultas, soporte o cualquier
          información sobre nuestros productos.
        </p>
      </div>

      {/* Información de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-center">
            <div className="p-8 bg-blue-500 h-[50px] w-[50px] rounded-2xl mx-auto mb-4 flex justify-center items-center text-white">
              <i class="bi bi-envelope text-4xl"></i>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Contáctanos
          </h2>
          <p className="text-gray-700 mb-2 text-center">
            <a href="mailto:nxbusiness@gmail.com" className="text-blue-500">
              nxbusiness@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-2 text-center">
            <a href="mailto:nxelectronicZ@gmail.com" className="text-blue-500">
              nxelectronicZ@gmail.com
            </a>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-center">
            <div className="p-8 bg-blue-500 h-[50px] w-[50px] rounded-2xl mx-auto mb-4 flex justify-center items-center text-white">
              <i className="bi bi-geo-alt text-4xl"></i>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Visítanos</h2>
          <p className="text-gray-700 mb-2 text-center">
            Rivadavia 1000 San Miguel de Tucuman, Tucuman, Argentina
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-center">
            <div className="p-8 bg-blue-500 h-[50px] w-[50px] rounded-2xl mx-auto mb-4 flex justify-center items-center text-white">
              <i className="bi bi-telephone text-4xl"></i>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Soporte</h2>
          <p className="text-gray-700 mb-2 text-center">(415) 555‑0XX2</p>
          <p className="text-gray-700 mb-2 text-center">(800) 555‑0XX5</p>
        </div>
      </div>

      {/* Formulario */}
      <div className="  p-8 mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          <span className="font-medium text-blue-500">Contactanos</span>

          <h2 className="text-4xl font-bold mb-6">Comunícate hoy mismo</h2>
          <p>
            Explora tecnología de alto rendimiento diseñada para gamers y
            profesionales. Conecta con nosotros y potencia tu espacio al máximo
            nivel.
          </p>
          <div className="flex justify-center items-center flex-col md:items-start ">
            <div className="h-[100px] w-[300px] bg-white mt-5 px-5 border border-gray-300 rounded-2xl flex items-center gap-3">
              <div className="p-3 bg-blue-500 rounded-md">
                <i className="bi bi-envelope text-4xl text-white"></i>
              </div>
              <div>
                <span className="text-blue-500">Email</span>
                <p>bzbusiness@gmail</p>
              </div>
            </div>
            <div className="h-[100px] w-[300px] bg-white mt-5 px-5 border border-gray-300 rounded-2xl flex items-center gap-3">
              <div className=" p-3 bg-blue-500 rounded-md">
                <i className="bi bi-telephone text-4xl text-white"></i>
              </div>
              <div>
                <span className="text-blue-500">Telefono</span>
                <p>(414) 687 - 5892</p>
              </div>
            </div>
          </div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 shadow-md w-6500px]">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <input
            type="text"
            placeholder="Teléfono"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <input
            type="text"
            placeholder="Asunto"
            className="border border-gray-300 rounded-lg p-3 w-full"
          />
          <textarea
            placeholder="Mensaje"
            className="border border-gray-300 rounded-lg p-3 w-full md:col-span-2 h-40"
          />
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-16 rounded-lg hover:bg-blue-600 transition-all col-span-2"
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
