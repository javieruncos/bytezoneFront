import React, { createContext, useEffect,useState } from "react";
import { getUser } from "../services/user";

export const ContextUser = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //obtener todos los usuarios
    getUser().then((res) => {
      setUser(res.data);
      console.log(res.data);
    },[]);

    //obtener usuario logueado mediante localStorage
    const usuarioLocal = localStorage.getItem("usuarioByte");

    //si hay un usuario logueado en localStorage lo setea en el estado
    if (usuarioLocal) {
      setCurrentUser(JSON.parse(usuarioLocal));
    }
  }, []);

  return (
    <ContextUser.Provider value={{ user, setUser,currentUser,setCurrentUser }}>
      {children}
    </ContextUser.Provider>
  );
};

export default UserContext;
