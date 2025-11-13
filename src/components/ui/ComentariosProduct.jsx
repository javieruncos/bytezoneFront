import { motion } from "framer-motion";

const ComentariosProduct = () => {
  const comentarios = [
    {
      id: 1,
      nombre: "Carlos Sánchez",
      foto: "https://randomuser.me/api/portraits/men/34.jpg",
      texto: "¡Increíble! La calidad de construcción es sólida y el rendimiento supera con creces mis expectativas. Lo recomiendo al 100%.",
    },
    {
      id: 2,
      nombre: "Laura Martínez",
      foto: "https://randomuser.me/api/portraits/women/46.jpg",
      texto: "El producto llegó en perfectas condiciones y antes de lo esperado. Funciona de maravilla. Muy satisfecha con la compra.",
    },
    {
      id: 3,
      nombre: "Pedro Ramírez",
      foto: "https://randomuser.me/api/portraits/men/52.jpg",
      texto: "Tenía mis dudas al principio, pero este producto es simplemente genial. La relación calidad-precio es inmejorable.",
    },
  ];

  return (
    <div className="px-10 mt-10 flex flex-col gap-5">
      {comentarios.map((comentario, index) => (
        <motion.div
          key={comentario.id}
          className="max-w-lg bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
        >
          <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10">
            <div className="h-[50px] w-[50px] rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              <img src={comentario.foto} alt={comentario.nombre} className="w-full h-full object-cover" />
            </div>
            <div>
              <h5 className="text-white font-semibold text-lg tracking-tight">
                {comentario.nombre}
              </h5>
              <span className="text-sm text-violet-400">Cliente verificado</span>
            </div>
          </div>
          <div className="px-6 py-5">
            <p className="text-gray-300 leading-relaxed">
              “{comentario.texto}”
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ComentariosProduct;
