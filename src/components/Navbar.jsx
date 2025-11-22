import React from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas React Router

const Navbar = () => {
  return (
    <nav>
      {/* Links de navegación principales */}
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>

      {/* Aquí puedes añadir más enlaces o la lógica de autenticación cuando estés listo */}
      <div>
        <Link to="/login">Login</Link>
        <Link to="/registro">Registro</Link>
      </div>
    </nav>
  );
};

export default Navbar;