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
  message: error.message
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
      message: error.message
    }
  }
}