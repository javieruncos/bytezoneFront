import axios from "axios";

const urlUser = import.meta.env.VITE_API_USUARIOS;

const apiUser = axios.create({
  baseURL: urlUser,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir el token de autorización a todas las peticiones
apiUser.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createUser = async (user) => {
  try {
    const response = await apiUser.post("/register", user);
    // Guardamos el token y el usuario en localStorage, igual que en login.
    const { token, user: createdUser } = response.data;

    // ¡Verificación clave! Si no hay un usuario en la respuesta, no continuamos.
    if (!createdUser) {
      throw new Error("La respuesta de registro no incluyó datos del usuario.");
    }

    localStorage.setItem("token", token);
    localStorage.setItem("usuarioByte", JSON.stringify(createdUser));

    return {
      status: response.status,
      // Devolvemos una estructura consistente con la función login
      data: { user: createdUser, token },
    };
  } catch (error) {
    // Si el error viene de la verificación anterior o de la API
    if (error.response?.data?.message) {
      return { status: error.response.status, message: error.response.data.message };
    }
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

export const login = async ({ email, password }) => {
  try {
    // --- Primer paso: Autenticación y obtención del token ---
    const response = await apiUser.post("/login", { email, password });
    const token = response.data.token;
    localStorage.setItem("token", token);
  } catch (error) {
    // Este catch solo se activa si el login (email/password) falla.
    if (error.response?.status === 401) {
      return { status: 401, message: "Usuario o contraseña incorrectos" };
    }
    // Devolvemos un mensaje más descriptivo para otros errores de login.
    return { status: error.response?.status || 500, message: error.response?.data?.message || "Error en el servidor durante el login." };
  }

  try {
    // --- Segundo paso: Usar getProfile para obtener los datos del usuario ---
    // getProfile ya maneja la llamada a /profile y la estructura de la respuesta.
    const profileData = await getProfile();
    const user = profileData.data; // getProfile devuelve { status, data }
    localStorage.setItem("usuarioByte", JSON.stringify(user));

    return { status: 200, data: user };
  } catch (error) {
    // Este catch se activa si falla la obtención del perfil.
    // getProfile relanza el error de Axios, por lo que podemos inspeccionar error.response
    return { status: error.response?.status || 500, message: error.response?.data?.message || "Error al obtener el perfil del usuario." };
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
    const response = await apiUser.get("/profile");

    return {
      status: response.status,
      data: response.data, // La API devuelve el objeto de usuario directamente
    };
  } catch (error) {
    throw error; // Re-lanzamos el error para que el llamador (UserContext) lo maneje.
  }
};