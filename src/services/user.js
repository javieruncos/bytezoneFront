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
    const response = await apiUser.post("/register", user);
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

export const getUser = async () => {
  try {
    const response = await apiUser.get("/all");
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
};

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
};

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
};

// export const login = async ({ email, password }) => {
//   try {
//     const response = await apiUser.post("/login", { email, password });

//     const token = response.data.token; // <- lo guardamos
//     localStorage.setItem("token", token);

//     const profile = await apiUser.get("/profile", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     localStorage.setItem("usuarioByte", JSON.stringify(profile.data));

//     return console.log(response.data);
//   } catch (error) {
//     if (error.response?.status === 401) {
//       return { status: 401, message: "Usuario o contraseña incorrectos" };
//     }
//     return { status: 500, message: "Error en el servidor" };
//   }
// };

export const login = async ({ email, password }) => {
  try {
    const response = await apiUser.post("/login", { email, password });

    const token = response.data.token;
    localStorage.setItem("token", token);

    const profile = await apiUser.get("/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Guardar el usuario completo (el que mostraste arriba)
    localStorage.setItem("usuarioByte", JSON.stringify(profile.data));

    return {
      status: response.status,
      data: profile.data,
    };
  } catch (error) {
    if (error.response?.status === 401) {
      return { status: 401, message: "Usuario o contraseña incorrectos" };
    }
    return { status: 500, message: "Error en el servidor" };
  }
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    // Si no hay token, no podemos obtener el perfil.
    // Lanzamos un error para que el .catch() en UserContext lo maneje.
    throw new Error("No token found");
  }

  try {
    const response = await apiUser.get("/profile", {
      headers: {
        // Adjuntamos el token en la cabecera de autorización
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    throw error; // Re-lanzamos el error para que el llamador (UserContext) lo maneje.
  }
};