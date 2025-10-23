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
          <h2 className="text-2xl font-semibold mb-4 text-center">Contáctanos</h2>
          <p className="text-gray-700 mb-2 text-center">
            <span className="font-medium">Correo:</span>{" "}
            <a href="mailto:nxbusiness@gmail.com" className="text-blue-500">
              nxbusiness@gmail.com
            </a>
          </p>
          <p className="text-gray-700 mb-2 text-center">
            <span className="font-medium">Soporte:</span>{" "}
            <a href="mailto:nxelectronicZ@gmail.com" className="text-blue-500">
              nxelectronicZ@gmail.com
            </a>
          </p>
          
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Visítanos</h2>
          <p className="text-gray-700 mb-2 text-center">
           Rivadavia 1000  San Miguel de Tucuman, Tucuman, Argentina
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Soporte</h2>
          <p className="text-gray-700 mb-2 text-center">
          (415) 555‑0XX2
          </p>
          <p className="text-gray-700 mb-2 text-center">
           (800) 555‑0XX5
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Formulario de Contacto
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all col-span-2"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* CTA Final */}
      <div className="text-center">
        <p className="text-gray-700 mb-4">
          Gracias por ponerte en contacto con nosotros. Nos esforzamos por
          responder a todas las consultas lo más rápido posible.
        </p>
        <button className="py-3 px-10 bg-blue-500 text-white border rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all">
          Conócenos Más
        </button>
      </div>
    </div>
  );
};

export default Contacto;
