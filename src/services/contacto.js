import { head } from "framer-motion/client";

const urlContact = import.meta.env.VITE_URL_CONTACT;

const apiContact = axios.create({
  baseURL: urlContact,
  headers: {
    "Content-Type": "application/json",
  },
});



export const contactEmail = async(data) => {
  try {
    const dataContact = await apiContact.post("/",data,{
        headers: {
        "Content-Type": "application/json",
    },
    })

    return ({
        status: dataContact.status,
        data: dataContact.data,
    })
    
  } catch (error) {
    return ({
    status:error.response?.status || null,
    message: error.message || "Error desconocido",
    });
  }
}