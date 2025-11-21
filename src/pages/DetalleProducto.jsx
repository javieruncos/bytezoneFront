import { useContext, useEffect, useState } from "react";
import master from "../assets/icons/masterCard.webp";
import paypal from "../assets/icons/paypal.webp";
import stripe from "../assets/icons/stripe.webp";
import visa from "../assets/icons/visa.webp";
import Especificacion from "../components/ui/Especificacion";
import ComentariosProduct from "../components/ui/ComentariosProduct";
import DescripcionProduct from "../components/ui/DescripcionProduct";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productos";
import { ContextCarrito } from "../context/CarritoContext";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const { addToCart } = useContext(ContextCarrito);
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("descripcion");
  const [productId, setproductId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [imagenSeleccionada, setImagenSeleccionada] = useState("");

  // Función para normalizar las imágenes a un array
  const getImagesAsArray = (images) => {
    if (Array.isArray(images)) {
      return images.map((img) => (typeof img === "string" ? img : img.url));
    }
    if (typeof images === "string" && images.trim() !== "") return [images];
    return [];
  };

  useEffect(() => {
    getProductById(id).then((res) => {
      setproductId(res);
      const images = Array.isArray(res.images)
        ? res.images.map((img) => (typeof img === "string" ? img : img.url))
        : [];

      if (images.length > 0) {
        setImagenSeleccionada(images[0]);
      }
    });
  }, [id]);

  // Mientras cargan los datos
  if (!productId) {
    return (
      <div className="text-center py-20 text-gray-500">
        Cargando detalles del producto...
      </div>
    );
  }

  const handleAddToCart = () => {
    const quantityToAdd = parseInt(quantity, 10);
    if (isNaN(quantityToAdd) || quantityToAdd <= 0) {
      return; // No agregar si la cantidad no es válida
    }
    addToCart(productId, quantityToAdd);
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

  return (
    <div className="container mx-auto mt-10">
      <nav
        className="flex px-5 py-3 text-gray-300 border border-white/20 rounded-lg"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-violet-500"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-violet-500 md:ml-2">
                detalle
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-5">
        <div>
          <div className="h-[400px] w-full bg-white/5 backdrop-blur-lg border border-white/20 rounded-md overflow-hidden p-4">
            <img
              src={imagenSeleccionada}
              className="h-full w-full object-contain"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-5 pb-5">
            {(() => {
              const images = getImagesAsArray(productId.images);
              return images.length > 0 ? (
                images.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className={`h-[200px] w-full border transition-all duration-300 rounded-md hover:cursor-pointer p-2 bg-white/5 ${
                      imagenSeleccionada === img
                        ? "border-violet-500"
                        : "border-white/10"
                    }`}
                    onClick={() => setImagenSeleccionada(img)}
                  >
                    <img
                      src={img}
                      className="h-full w-full object-contain"
                      alt={productId.name}
                    />
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-5 col-span-3">
                  No hay imágenes disponibles
                </p>
              );
            })()}
          </div>
        </div>
        <div className="h-auto w-full bg-white/5 backdrop-blur-lg border border-white/20 rounded-md p-6 text-white">
          <h3 className="text-3xl font-bold">{productId.name}</h3>
          <p className="text-4xl mt-5 font-bold text-violet-500">
            ${productId.price?.toLocaleString("es-AR") || "N/A"}
          </p>
          <hr className="border-white/20 mt-4" />
          <div className="mt-4">
            <p className="text-gray-300">
              <span className="font-semibold">Descripción:</span>{" "}
              {productId.description}
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="border rounded-sm border-white/20 bg-transparent h-[40px] w-[100px] p-2 text-center"
              placeholder="1"
            />
            <button
              className="bg-violet-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-violet-700 transition-colors"
              onClick={handleAddToCart}
            >
              Agregar al Carrito
            </button>
          </div>
          <hr className="border-white/20 mt-7" />
          <div>
            <h3 className="text-2xl mt-4">
              Siguenos para obtener mas Información
            </h3>
            <div className="flex gap-4 mt-4">
              <a href="">
                <i className="bi bi-facebook text-2xl text-gray-400 hover:text-violet-500 transition-colors"></i>
              </a>
              <a href="">
                <i className="bi bi-whatsapp text-2xl text-gray-400 hover:text-violet-500 transition-colors"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram text-2xl text-gray-400 hover:text-violet-500 transition-colors"></i>
              </a>
            </div>
          </div>
          <hr className="border-white/20 mt-7" />
          <div>
            <h3 className="text-2xl mt-4">Recibimos tarjetas de crédito</h3>
            <div className="flex gap-4 mt-4">
              <a href="">
                <img src={master} alt="" className="h-[50px] w-[50px]" />
              </a>
              <a href="">
                <img src={visa} alt="" className="h-[50px] w-[50px]" />
              </a>
              <a href="">
                <img src={paypal} alt="" className="h-[50px] w-[70px]" />
              </a>
              <a href="">
                <img src={stripe} alt="" className="h-[50px] w-[70px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-white/20 mt-20 rounded-md py-5 bg-white/5 backdrop-blur-lg">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 mt-5 py-3 px-4">
          <button
            className={`w-full sm:w-auto py-3 px-6 sm:px-10 border rounded-md transition-all duration-300 ${
              activeSection === "descripcion"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-transparent text-gray-300 border-white/20 hover:bg-white/10"
            }`}
            onClick={() => {
              setActiveSection("descripcion");
            }}
          >
            Descripcion
          </button>
          <button
            className={`w-full sm:w-auto py-3 px-6 sm:px-10 border rounded-md transition-all duration-300 ${
              activeSection === "especificacion"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-transparent text-gray-300 border-white/20 hover:bg-white/10"
            }`}
            onClick={() => {
              setActiveSection("especificacion");
            }}
          >
            Especificacion
          </button>
          <button
            className={`w-full sm:w-auto py-3 px-6 sm:px-10 border rounded-md transition-all duration-300 ${
              activeSection === "comentarios"
                ? "bg-violet-600 text-white border-violet-600"
                : "bg-transparent text-gray-300 border-white/20 hover:bg-white/10"
            }`}
            onClick={() => {
              setActiveSection("comentarios");
            }}
          >
            Comentarios
          </button>
        </div>
        {activeSection === "descripcion" ? (
          <DescripcionProduct product={productId}></DescripcionProduct>
        ) : activeSection === "especificacion" ? (
          <Especificacion product={productId}></Especificacion>
        ) : (
          activeSection === "comentarios" && (
            <ComentariosProduct product={productId}></ComentariosProduct>
          )
        )}
      </div>
    </div>
  );
};

export default DetalleProducto;
