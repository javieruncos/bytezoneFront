import { motion } from "framer-motion";
import { useState } from "react";
import Auricular from "../ui/Auricular";
import Joystick from "../ui/Joystick";
import Teclado from "../ui/Teclado";
import fondotec from "../../assets/images/fondo-pantalla-perspectiva.avif";

const Portada = () => {
  const [active, setActive] = useState(0);

  const componentes = [<Joystick />, <Auricular />, <Teclado />];

  return (
    <div className="h-[1000px] md:h-[550px]   text-white rounded-2xl container mx-auto px-0 mt-5 py-5 flex flex-col justify-center relative overflow-hidden">
      <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="" className="h-full w-full rounded-2xl object-cover" />
      <div className="absolute top-0 left-0 pt-10 w-full h-full bg-black/70">
        <div className="flex flex-col items-center ">
          {/* Render dinámico del componente */}
          <div className="flex-1 w-full">{componentes[active]}</div>
        </div>
        <div className="flex  sm:flex-row  items-center justify-center gap-4 mt-5 py-5">
          {componentes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActive(index)}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`h-5 flex items-center justify-center ${
                active === index
                  ? "bg-violet-500 w-20 rounded-full"
                  : "bg-white w-5 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portada;
