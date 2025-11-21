import React, { useContext } from "react";
import { ContextCarrito } from "../../context/CarritoContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import fondoTec from "../../assets/images/fondo-pantalla-perspectiva.avif";

const CardProduct = ({ product }) => {
  const { addToCart } = useContext(ContextCarrito);

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  // Normaliza la propiedad 'images' para que siempre sea un array
  const getImagesAsArray = (images) => (Array.isArray(images) ? images : []);

  const images = getImagesAsArray(product.images);

  const imageUrl =
    images.length > 0 && images[0].url
      ? `${images[0].url}?v=${new Date(product.updatedAt).getTime()}`
      : "/img/placeholder.jpg";

  return (
    <div className="group h-[530px] w-full  border  rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02]">
      {/* Contenedor de imágenes */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src="https://img.freepik.com/vector-gratis/margen-abstracto-neon-sobre-fondo-purpura-oscuro_53876-99055.jpg"
          alt=""
          className="h-full"
        />
        <div className="absolute top-0 left-0 h-full w-full  bg-black/70">
          <img
            src={product.images?.[0]?.url}
            alt="producto principal"
            className="absolute  w-full h-full object-contain opacity-100 transition-opacity duration-700 ease-in-out "
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col justify-between h-[230px] backdrop-blur-xl bg-white/4 border border-white/20 rounded-b-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] relative overflow-hidden">
        {/* capa de brillo */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/30 opacity-20 pointer-events-none"></div>

        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed">
            {product.description?.substring(0, 80) ||
              "Descubre más sobre este increíble producto."}
            ...
          </p>
          <p className="text-violet-400 pt-3 font-medium">
            Precio:{" "}
            <span className="text-white font-semibold">
              ${product.price?.toLocaleString("es-AR") || "N/A"}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <Link
            to={`detalle/${product._id}`}
            className="mt-4 cursor-pointer bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition-all duration-300"
          >
            Ver más
          </Link>
          <button
            onClick={handleAddToCart}
            className="mt-4 cursor-pointer bg-violet-900 text-white py-2 px-4 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-300"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
