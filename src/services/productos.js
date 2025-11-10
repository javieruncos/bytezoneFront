import axios from "axios";

const apiProduct = import.meta.env.VITE_API_PRODUCTOS;
console.log("URL de la API:", apiProduct);

const api = axios.create({
  baseURL: apiProduct,
  headers: {
    "Content-Type": "application/json",
  },
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
    const response = await api.put(`/${id}`, data);
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
    const response = await api.post("/", data);
    return {
      status: response.status,
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