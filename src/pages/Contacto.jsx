import React from "react";
import { useForm } from "react-hook-form";
import { contactEmail } from "../services/contacto";
import Swal from "sweetalert2";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await contactEmail(data);

      if (res.status === 200) {
        Swal.fire({
          title: "¡Mensaje Enviado!",
          text: "Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.",
          icon: "success",
          confirmButtonText: "Aceptar",
          background: "#111827", // Coincide con el fondo oscuro
          color: "#e5e7eb", // Texto claro
          iconColor: "#8b5cf6", // Color violeta del ícono
          confirmButtonColor: "#7c3aed", // Color violeta del botón
        });
        reset();
      } else {
        // Manejo de error del backend
        Swal.fire({
          title: "Error al Enviar",
          text: res.message || "No se pudo enviar el mensaje. Por favor, inténtalo de nuevo.",
          icon: "error",
          confirmButtonText: "Cerrar",
          background: "#111827",
          color: "#e5e7eb",
          confirmButtonColor: "#7c3aed",
        });
      }
    } catch (error) {
      // Error inesperado
      Swal.fire({
        title: "Error Inesperado",
        text: "Tuvimos un problema al procesar tu solicitud. Intenta más tarde.",
        icon: "error",
        confirmButtonText: "Cerrar",
        background: "#111827",
        color: "#e5e7eb",
        confirmButtonColor: "#7c3aed",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Contáctanos
        </h1>
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
            <a
              href="mailto:nxbusiness@gmail.com"
              className="text-violet-400 hover:underline"
            >
              nxbusiness@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mb-2 text-center">
            <a
              href="mailto:nxelectronicZ@gmail.com"
              className="text-violet-400 hover:underline"
            >
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
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Visítanos
          </h2>
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
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">
            Soporte
          </h2>
          <p className="text-gray-300 mb-2 text-center">(415) 555‑0XX2</p>
          <p className="text-gray-300 mb-2 text-center">(800) 555‑0XX5</p>
        </div>
      </div>

      {/* Formulario */}
      <div className="p-4 md:p-8 mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 text-center md:text-left">
        <div>
          <span className="font-medium text-violet-400">Contactanos</span>

          <h2 className="text-4xl font-bold mb-6 text-white">
            Comunícate hoy mismo
          </h2>
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
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Nombre */}
          <div className="h-20">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
              })}
            />
            <span className="text-red-500 text-sm">
              {errors.nombre?.message}
            </span>
          </div>
          {/* Correo */}
          <div className="h-20">
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "El correo no es valido",
                },
              })}
            />
            <span className="text-red-500 text-sm">
              {errors.email?.message}
            </span>
          </div>
          {/* Telefono */}
          <div className="h-20">
            <input
              type="text"
              placeholder="Teléfono"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              {...register("telefono", {
                minLength: {
                  value: 10,
                  message: "El telefono debe tener al menos 10 caracteres",
                },
              })}
            />
            <span className="text-red-500 text-sm">
              {errors.telefono?.message}
            </span>
          </div>
          {/* Asunto */}
          <div className="h-20">
            <input
              type="text"
              placeholder="Asunto"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              {...register("asunto", {
                required: "El asunto es obligatorio",
              })}
            />
            <span className="text-red-500 text-sm">
              {errors.asunto?.message}
            </span>
          </div>
          {/* Mensaje */}
          <textarea
            placeholder="Mensaje"
            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 md:col-span-2 h-32 resize-none"
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
            })}
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-violet-600 text-white font-semibold py-3 px-16 rounded-lg hover:bg-violet-700 transition-colors col-span-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <style>
        {`
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #1f2937 inset !important; /* Color de fondo oscuro */
            -webkit-text-fill-color: #fff !important; /* Color del texto */
            caret-color: #fff !important;
          }
        `}
      </style>
    </div>
  );
};

export default Contacto;
