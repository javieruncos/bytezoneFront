import React from "react";

const Especificacion = ({ product }) => {
  return (
    <div className="px-4 sm:px-6 md:px-10 mt-10">
      <ul className="text-gray-300 list-none text-base md:text-lg space-y-2">
        {Object.entries(product.specs).map(([key, value]) => (
          <li key={key}>
            <strong className="text-violet-400 font-semibold">{key.toUpperCase()}:</strong>{" "}
            {typeof value === "boolean" ? (value ? "Sí" : "No") : String(value)}
          </li>
        ))}
      </ul>
      <div className=" mt-10 flex flex-col gap-5">
        <h5 className="text-xl md:text-2xl font-bold text-white">
          Descubre Innovacion: Explora byteZone Collection!
        </h5>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          ByteZone se consolida como tu principal destino para todo lo
          relacionado con la electrónica. Con un firme compromiso con la
          calidad, la innovación y la satisfacción del cliente, nos esforzamos
          por ofrecerte lo más reciente y destacado en tecnología,
          cuidadosamente seleccionada para adaptarse a tus diversas necesidades
          y mejorar tu experiencia digital. Ya sea que busques auriculares de
          última generación, teclados ergonómicos, monitores de alto rendimiento
          u otros accesorios electrónicos, ByteZone tiene todo lo que
          necesitas. Únete a nosotros en este viaje de exploración y
          crecimiento, mientras seguimos ampliando los límites de lo que es
          posible en el mundo de la tecnología. ¡Compra en ByteZone hoy y da el
          paso hacia un futuro lleno de innovación y emoción sin límites!
        </p>
      </div>
    </div>
  );
};

export default Especificacion;
