import user from "../../assets/icons/usericon.webp";

const ComentariosProduct = () => {
  return (
    <div className="px-10 mt-10 flex flex-col gap-5">
      <div className="w-[500px] bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
        <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
          <div className="h-[50px] w-[50px] rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
            <img
              src={user}
              alt="Usuario"
            />
          </div>
          <div>
            <h5 className="text-gray-800 font-semibold text-lg tracking-tight">
              Nombre del Usuario
            </h5>
            <span className="text-sm text-gray-500">Cliente verificado</span>
          </div>
        </div>
        <div className="px-6 py-5">
          <p className="text-gray-700 leading-relaxed">
            “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, magnam! Este producto superó mis expectativas, lo
            recomiendo totalmente.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComentariosProduct;
