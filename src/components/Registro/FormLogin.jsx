import { useContext } from "react";
import { ContextUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { login } from "../../services/user";

const FormLogin = () => {
  const { setCurrentUser } = useContext(ContextUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const respuesta = await login(data);

    if (respuesta.status === 200) {
      // La función `login` en `user.js` ya guarda el token y el usuario en localStorage.
      // Aquí solo necesitamos actualizar el estado y navegar.
      // `respuesta.data` contiene directamente el objeto del usuario.
      Swal.fire("Bienvenido", respuesta.message, "success");
      setCurrentUser(respuesta.data);
      reset();
      navigate("/");
    } else {
      Swal.fire("Error", respuesta.message, "error");
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "el correo no es valido",
            },
          })}
        />
        <span className="text-red-500">{errors.email?.message}</span>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          })}
        />

        <span className="text-red-500">{errors.password?.message}</span>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 transition-colors"
      >
        Iniciar sesión
      </button>

      <div className="text-right">
        <a href="#" className="text-sm text-blue-500 hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </form>
  );
};

export default FormLogin;
