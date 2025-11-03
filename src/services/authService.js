// import axios from "axios";

// const urlAuth = import.meta.env.VITE_API_AUTH;

// const apiaAuth = axios.create({
//   baseURL: urlAuth,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const login = async (user) => {
//   try {
//     const response = await apiaAuth.post("/login", user);
//     return {
//       status: response.status,
//       data: response.data,
//     };
//   } catch (error) {
//     return {
//       status: error.response?.status || 500,
//       message: error.message || "Error desconocido",
//     };
//   }
// };
