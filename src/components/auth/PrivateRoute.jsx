import React, { useContext } from "react";
import { ContextUser } from "../../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ requiredRole }) => {
  //obtener el usuario logueado desde el contexto
  const { currentUser, loading } = useContext(ContextUser);

  // 1. Si estamos en estado de carga, mostramos un mensaje o un spinner.
  // Esto evita la redirección prematura antes de que getProfile() termine.
  if (loading) {
    return <div>Cargando...</div>;
  }

  // 2. Si la carga terminó y NO hay usuario, lo redirigimos.
  if (!currentUser) {
    return <Navigate to="/registro" replace />;
  }

  // 3. Si la carga terminó, hay usuario, pero no tiene el rol requerido, lo redirigimos.
  if (requiredRole && currentUser.perfil?.toLowerCase() !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // 4. Si todas las verificaciones pasan, renderizamos la ruta hija (el componente protegido).
  return <Outlet />;
};

export default PrivateRoute;
