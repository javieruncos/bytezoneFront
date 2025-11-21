import axios from "axios";

const apiProduct = import.meta.env.VITE_API_PRODUCTOS;

const api = axios.create({
  baseURL: apiProduct,
});

// Interceptor para añadir el token de autorización a todas las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const getProduct = async () => {
  try {
    const response = await api.get("/");
    return response;
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || null,
      data: error.response?.data || null,
      message: error.message,
    };
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || null,
      data: error.response?.data || null,
      message: error.message,
    };
  }
};

export const editarProductos = async (id, data) => {
  try {
    const response = await api.put(`/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
};

export const eliminarProductos = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
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

export const createProduct = async (data) => {
  try {
    const token = localStorage.getItem("token"); // o de donde guardes el JWT

    const response = await api.post("/", data, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: error.response?.status || null,
      data: error.response?.data || null,
      message: error.message,
    };
  }
};