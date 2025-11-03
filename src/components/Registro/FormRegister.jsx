import React, { useContext } from "react";
import { ContextUser } from "../../context/UserContext";

const FormRegister = () => {
  const { user } = useContext(ContextUser);

  const { listaUsuarios } = useUsuarios();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmitRegister = (data) => {
    data.perfil = "usuario";
    const usuarioBuscado = listaUsuarios.find(
      (item) => item.email === data.email
    );
    if (usuarioBuscado) {
      Swal.fire("Error", "el usuario ya existe", "error");
      return;
    }

    crearUsuarios(data).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Usuario creado",
          "el usuario se creo correctamente",
          "success"
        );
        localStorage.setItem("usuarioFood", JSON.stringify(data));
        setUsuarioLogueado({ ...data, perfil: "usuario" });
        reset();
        navigate("/");
      } else {
        Swal.fire("error inesperado", "intentalo nuevamente en breve", "error");
      }
    });

    console.log(data);
  };

  return (
    <form className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Confirmar contraseña
        </label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-400 transition-colors"
      >
        Registrarse
      </button>
    </form>
  );
};

export default FormRegister;
