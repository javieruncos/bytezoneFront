

const FormLogin = () => {
  

  return (
    <form className="space-y-5">
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
