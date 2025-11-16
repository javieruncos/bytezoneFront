import { motion } from "framer-motion";
import Comentarios from "../components/sections/Comentarios";

const Nosotros = () => {
  const equipo = [
    {
      id: 1,
      nombre: "Lucía Fernández",
      cargo: "CEO & Fundadora",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      descripcion:
        "Apasionada por la tecnología y la innovación, lidera ElectronicZ con visión y compromiso, buscando siempre la mejor experiencia para nuestros clientes.",
    },
    {
      id: 2,
      nombre: "Martín Gómez",
      cargo: "CTO",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      descripcion:
        "Experto en hardware y software, Martín garantiza que nuestros productos cumplan con los más altos estándares de calidad y rendimiento.",
    },
    {
      id: 3,
      nombre: "Camila Ríos",
      cargo: "Marketing & Social Media",
      foto: "https://randomuser.me/api/portraits/women/65.jpg",
      descripcion:
        "Camila se encarga de que nuestros clientes conozcan nuestras novedades y disfruten de la mejor comunicación y presencia digital.",
    },
    {
      id: 4,
      nombre: "Julián Torres",
      cargo: "Atención al Cliente",
      foto: "https://randomuser.me/api/portraits/men/76.jpg",
      descripcion:
        "Su misión es brindar soporte rápido y eficiente, asegurando que cada experiencia con ElectronicZ sea excepcional.",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-12">
      {/* Título de sección */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Sobre <span className="text-violet-500">Nosotros</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          En ElectronicZ nos apasiona la tecnología y la innovación. Nuestro
          equipo trabaja con dedicación para ofrecer los mejores productos y la
          mejor experiencia a nuestros clientes.
        </p>
      </motion.div>
      {/* Historia / misión */}
      <motion.div
        className="flex flex-col md:flex-row gap-8 mb-16 mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.prod.website-files.com/66010b96fb3d1aa19847819d/661ce9798566d3604bcc4c33_16480-p-800.webp"
            alt="Nuestra historia"
            className="w-full h-[500px] rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Nuestra historia
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            ElectronicZ nació de la pasión por la tecnología y el deseo de
            ofrecer productos de alta calidad a los amantes de la electrónica.
            Desde nuestros inicios, nos hemos comprometido a seleccionar
            cuidadosamente cada artículo que ofrecemos, garantizando que cumpla
            con los más altos estándares de rendimiento y durabilidad. Cada
            decisión que tomamos busca mejorar la experiencia de nuestros
            clientes, proporcionando no solo productos innovadores, sino también
            un servicio excepcional que acompañe cada compra. Nuestro equipo
            trabaja constantemente para anticipar las necesidades de los
            usuarios, explorando nuevas tendencias y soluciones tecnológicas que
            marquen la diferencia.
          </p>
        </div>
      </motion.div>

      {/* Equipo */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
          Nuestro <span className="text-violet-500">Equipo</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {equipo.map((persona) => (
            <motion.div
              key={persona.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-md overflow-hidden p-6 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: persona.id * 0.1 }}
            >
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-violet-500"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-white">
                {persona.nombre}
              </h3>
              <p className="text-violet-500 font-medium mb-3">
                {persona.cargo}
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {persona.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <Comentarios></Comentarios>
    </div>
  );
};

export default Nosotros;
