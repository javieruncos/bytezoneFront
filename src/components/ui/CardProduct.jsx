import React, { useContext } from "react";
import { ContextCarrito } from "../../context/CarritoContext";
import Swal from "sweetalert2";

const CardProduct = ({ product}) => {
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
  const getImagesAsArray = (images) => {
    if (Array.isArray(images)) return images;
    if (typeof images === 'string' && images.trim() !== '') return [images];
    return [];
  };

  const images = getImagesAsArray(product.images);
 const imageUrl =
  images.length > 0
    ? `${images[0]}?v=${new Date(product.updatedAt).getTime()}`
    : "/img/placeholder.jpg";

  return (
    <div className="group h-[530px] w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:scale-[1.02]">
      {/* Contenedor de imágenes */}
      <div className="relative h-[300px] w-full overflow-hidden bg-white">
        {/* Imagen principal */}
        <img
          src={imageUrl}
          alt="producto principal"
          className="absolute  w-full h-full object-contain opacity-100 transition-opacity duration-700 ease-in-out "
        />
        
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col justify-between h-[230px]">
        <div>
          <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-500 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Este es un ejemplo de una card moderna con cambio de imagen al pasar
            el cursor.
          </p>
          <p className="text-blue-500 pt-3 font-medium">  Precio: ${product.price?.toLocaleString("es-AR") || "N/A"}</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={`detalle/${product._id}`} className="mt-4 cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-all duration-300 self-start">
            Ver más
          </a>
          <button 
            onClick={handleAddToCart}
            className="mt-4 cursor-pointer bg-emerald-600 text-white py-2 px-4 rounded-sm hover:bg-emerald-700 transition-all duration-300 self-start"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
