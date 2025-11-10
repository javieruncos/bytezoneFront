import React, { createContext, useEffect,useState } from "react";
import { getProfile, getUser } from "../services/user";

export const ContextUser = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

  if (token) {
    getProfile()
      .then((res) => {
        setCurrentUser(res.data.user); // o res.data según tu backend
      })
      .catch(() => {
        // si el token está vencido o es inválido, lo eliminamos
        localStorage.removeItem("token");
      });
  }
 
  }, []);

  return (
    <ContextUser.Provider value={{ user, setUser,currentUser,setCurrentUser }}>
      {children}
    </ContextUser.Provider>
  );
};

export default UserContext;
