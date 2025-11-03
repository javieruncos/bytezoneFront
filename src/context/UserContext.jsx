import React, { createContext, useEffect } from "react";
import { getUser } from "../services/user";

export const ContextUser = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data);
    });

    const usuarioLocal = localStorage.getItem("usuarioByte");
    if (usuarioLocal) {
      setCurrentUser(JSON.parse(usuarioLocal));
    }
  }, []);

  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  );
};

export default UserContext;
