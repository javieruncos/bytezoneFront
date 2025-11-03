import axios from "axios";

const urlUser = import.meta.env.VITE_URL_USUARIOS;

const apiUser = axios.create({
  baseURL: urlUser,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (user) => {
  try {
    const response = await apiUser.post("/usuarios", user);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response?.status || 500,
      message: error.message || "Error desconocido",
    };
  }
};


export const getUser = async () =>{
  try {
    const response = await apiUser.get("/usuarios");
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return {
      status: error.response?.status || 500,
      message: error.message || "Error desconocido",
    };
  }
}