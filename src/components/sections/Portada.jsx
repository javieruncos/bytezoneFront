import { motion } from "framer-motion";
import { useState } from "react";
import Auricular from "../ui/Auricular";
import Joystick from "../ui/Joystick";
import Teclado from "../ui/Teclado";
const Portada = () => {
  const [active, setActive] = useState(0);

  const componentes = [<Joystick />, <Auricular />, <Teclado />];

  return (
    <div className="h-[550px] bg-black text-white rounded-2xl container mx-auto px-5 mt-5 py-5 flex flex-col justify-center">
      {/* Render dinámico del componente */}
      <div className="flex-1">{componentes[active]}</div>

      {/* Botones circulares */}
      <div className="flex gap-4 justify-center mt-5 py-5">
        {componentes.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`h-5 flex items-center justify-center ${
              active === index
                ? "bg-blue-500 w-20 rounded-full"
                : "bg-white w-5 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Portada;
