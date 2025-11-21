import React, { useContext } from "react";
import { ContextUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { createUser } from "../../services/user";

const FormRegister = () => {
  const { user, currentUser, setCurrentUser } = useContext(ContextUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmitRegister = (data) => {
    //setear el perfil del usuario
    data.perfil = "usuario";
  
    //verificar si las contraseñas coinciden
    if (data.password !== data.confirmPassword) {
      Swal.fire("Error", "las contraseñas no coinciden", "error");
      return;
    }
    //si el usuario no existe crear el usuario
    createUser(data).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Usuario creado",
          "El usuario se creó correctamente",
          "success"
        );

        // Guardar token y usuario
        localStorage.setItem("token", respuesta.data.token);
        localStorage.setItem(
          "usuarioByte",
          JSON.stringify(respuesta.data.user)
        );

        setCurrentUser(respuesta.data.user);
        reset();
        navigate("/");
      } else {
        Swal.fire("Error inesperado", "Inténtalo nuevamente en breve", "error");
      }
    });

    console.log(data);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmitRegister)}>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          {...register("username", {
            required: true,
            minLength: {
              value: 3,
              message: "el nombre debe tener al menos 3 caracteres",
            },
          })}
        />
        <span className="text-red-500">{errors.nombre?.message}</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "el correo no es valido",
            },
          })}
        />
        <span className="text-red-500">{errors.email?.message}</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "la contraseña debe tener al menos 8 caracteres",
            },
          })}
        />
        <span className="text-red-500 text-sm">{errors.password?.message}</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Confirmar contraseña
        </label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          {...register("confirmPassword", {
            required: true,
            minLength: {
              value: 8,
              message: "la contraseña debe tener al menos 8 caracteres",
            },
          })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-violet-600 text-white font-semibold py-2.5 rounded-md hover:bg-violet-700 transition-colors"
      >
        Registrarse
      </button>
    </form>
  );
};

export default FormRegister;
