import { useState } from "react";

const Comentarios = () => {
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  const usuarios = [
    {
      id: 1,
      nombre: "Lucía",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      comentario:
        "As a professional gamer, I demand the best from my gear. ElectronicZ has consistently delivered top-notch gaming peripherals that enhance my performance on the virtual battlefield. Their mice are precise, their keyboards responsive, and their monitors deliver stunning visuals. Thanks to ElectronicZ, I've gained a competitive edge.",
    },
    {
      id: 2,
      nombre: "Martín",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      comentario:
        "ElectronicZ has become my one-stop shop for all my tech needs. Whether it's upgrading my office setup with their monitors and keyboards or finding the perfect gift for a fellow tech enthusiast, ElectronicZ never disappoints. Their website is user-friendly, their shipping is fast, and their products are always top-notch.",
    },
    {
      id: 3,
      nombre: "Camila",
      foto: "https://randomuser.me/api/portraits/women/65.jpg",
      comentario:
        "As a professional gamer, I demand the best from my gear. ElectronicZ has consistently delivered top-notch gaming peripherals that enhance my performance on the virtual battlefield. Their mice are precise, their keyboards responsive, and their monitors deliver stunning visuals. Thanks to ElectronicZ, I've gained a competitive edge.",
    },
    {
      id: 4,
      nombre: "Julián",
      foto: "https://randomuser.me/api/portraits/men/76.jpg",
      comentario:
        "ElectronicZ has truly revolutionized my tech experience. From their premium headphones to their ergonomic keyboards, each product has exceeded my expectations. The quality and performance are unmatched, and their customer service is second to none. I'm proud to be a loyal customer!",
    },
    {
      id: 5,
      nombre: "Valentina",
      foto: "https://randomuser.me/api/portraits/women/22.jpg",
      comentario:
        "ElectronicZ has truly revolutionized my tech experience. From their premium headphones to their ergonomic keyboards, each product has exceeded my expectations. The quality and performance are unmatched, and their customer service is second to none. I'm proud to be a loyal customer!",
    },
  ];

  return (
    <div className="container mx-auto my-20 px-4">
      <div className="flex justify-center items-center flex-col my-10">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Reseñas de clientes
        </h2>
        <div className="w-[700px] text-center">
          <p>
            “Descubre lo que nuestros clientes opinan sobre su experiencia con
            ElectronicZ: desde amantes de la tecnología hasta profesionales y
            nómadas digitales.”
          </p>
        </div>
      </div>

      {/* Imágenes desalineadas */}
      <div className="flex justify-center gap-6 flex-wrap">
        {usuarios.map((user, index) => (
          <div
            key={user.id}
            className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
              index % 2 === 0 ? "mt-0" : "mt-10"
            }`}
            onClick={() => setUsuarioActivo(user)}
          >
            <img
              src={user.foto}
              alt={user.nombre}
              className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Comentario dinámico */}
      {usuarioActivo && (
        <div className="mt-15 text-center w-full mx-auto p-6 h-[500px] flex justify-center items-center">
          <div className="w-[950px] h-[450px] bg-white px-20 py-10 rounded-xl shadow-md overflow-y-auto">
            <h4 className="text-4xl font-semibold mb-4">
              {usuarioActivo.nombre}
            </h4>
            <p className="text-gray-700 text-2xl leading-relaxed">
              {usuarioActivo.comentario}
            </p>
            {/* Estrellas */}
            <div className="flex justify-center mb-4 mt-10">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-4xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comentarios;
