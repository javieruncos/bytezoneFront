import { useState } from "react";

const Comentarios = () => {
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

  const [usuarioActivo, setUsuarioActivo] = useState(usuarios[0]);

  return (
    <div className="container mx-auto px-4 my-12">
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Reseñas de clientes
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl">
          Descubre lo que nuestros clientes opinan sobre su experiencia con
          ElectronicZ: desde amantes de la tecnología hasta profesionales y
          nómadas digitales.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {usuarios.map((user, index) => (
          <div
            key={user.id}
            className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
              index % 2 === 0 ? "mt-0" : "mt-4 sm:mt-6 md:mt-10"
            }`}
            onClick={() => setUsuarioActivo(user)}
          >
            <img
              src={user.foto}
              alt={user.nombre}
              className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover border-2 ${
                usuarioActivo.id === user.id
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
      {usuarioActivo && (
        <div className="flex justify-center">
          <div className="w-full sm:w-[90%] md:w-[950px] bg-white px-6 sm:px-10 md:px-20 py-6 sm:py-10 rounded-xl shadow-md overflow-y-auto">
            <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center ">
              {usuarioActivo.nombre}
            </h4>
            <p className="text-gray-700 text-center text-base sm:text-lg md:text-2xl leading-relaxed mb-6">
              {usuarioActivo.comentario}
            </p>
            <div className="flex justify-center md:justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-yellow-400 text-xl sm:text-2xl md:text-4xl"
                >
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
