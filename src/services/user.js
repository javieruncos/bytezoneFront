import axios from "axios";

const urlUser = import.meta.env.VITE_API_USUARIOS;

const apiUser = axios.create({
  baseURL: urlUser,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (user) => {
  try {
    const response = await apiUser.post("/", user);
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
    const response = await apiUser.get("/");
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



export const getUserById = async (id) => {
  try {
    const response = await apiUser.get(`/${id}`);
    return response.data;
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || null,
      data: error.response?.data || null,
      message: error.message,
    };
  }
}


export const editarUser = async (id, data) => {
  try {
    const response = await apiUser.put(`/${id}`, data);
    return {
      status: response.status, // ✅ agregamos el status
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || null,
      data: error.response?.data || null,
      message: error.message,
    };
  }
}

export const eliminarUser = async (id) => {
  try {
    const response = await apiUser.delete(`/${id}`);
    return {
      status: response.status, // ✅ agregamos el status
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || null,
      data: error.response?.data || null,
      message: error.message,
    };
  }
}


export const login = async ({ email, password }) => {
  try {
    const response = await apiUser.get("/"); // traemos TODOS los usuarios

    const usuarioEncontrado = response.data.find(
      (user) => user.email === email && user.password === password
    );

    if (usuarioEncontrado) {
      return { status: 200, data: usuarioEncontrado };
    } else {
      return { status: 401, message: "Usuario o contraseña incorrectos" };
    }
  } catch (error) {
    return { status: 500, message: error.message || "Error desconocido" };
  }
};