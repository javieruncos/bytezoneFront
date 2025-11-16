import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSections = ({ children }) => {
  //obtenemos la referencia del elemento
  const ref = useRef(null);
  //usamos el hook useInView para obtener si el elemento esta en la vista
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSections;
