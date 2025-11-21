import React, { createContext, useEffect, useState } from "react";
import { getProfile, getUser } from "../services/user";

export const ContextUser = createContext();

const UserContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // 1. Añadimos un estado para saber si estamos verificando la sesión
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getProfile()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("usuarioByte");
          setCurrentUser(null);
        })
        .finally(() => setLoading(false)); // 3. Cuando la verificación termina, dejamos de cargar
    } else {
      // 2. Si no hay token, no hay nada que verificar. Dejamos de cargar
      setLoading(false); 
    }
  }, []);

  return (
    <ContextUser.Provider
      value={{
        currentUser,
        setCurrentUser,
        loading, // Exponemos el estado de carga
      }}
    >
      {children}
    </ContextUser.Provider>
  );
};

export default UserContext;
