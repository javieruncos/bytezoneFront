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
      return images;
    }
    if (typeof images === 'string' && images.trim() !== '') {
      return [images];
    }
    return [];
  };

  useEffect(() => {
    getProductById(id).then((res) => {
      setproductId(res);
      const images = getImagesAsArray(res?.images);
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
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg   "
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
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
              <span className="ml-1 text-sm font-medium text-blue-500 md:ml-2 dark:text-blue-500">
                detalle
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-2 gap-3 pt-5">
        <div>
          <div className="h-[400px] w-full bg-white border rounded-md overflow-hidden">
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
                images.map((img, index) => (
                <div
                  key={index}
                  className={`h-[200px] w-full border transition-all duration-300 rounded-md hover:cursor-pointer ${
                    imagenSeleccionada === img
                      ? "border-blue-500"
                      : "border-gray-300"
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
        <div className=" h-auto w-full border border-gray-300 rounded-md p-6">
          <h3 className="text-3xl font-bold">{productId.name}</h3>
          <p className="text-4xl mt-5 font-bold text-blue-500">${productId.price?.toLocaleString("es-AR") || "N/A"}</p>
          <hr className="bg-gray-300 mt-4" />
          <div className="mt-4">
            <p>
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
              className="border rounded-sm border-gray-300 h-[40px] w-[100px] p-1"
              placeholder="1"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
              onClick={handleAddToCart}>
              Agregar al Carrito
            </button>
          </div>
          <hr className="bg-gray-300 mt-7" />
          <div>
            <h3 className="text-2xl mt-4">
              Siguenos para obtener mas Información
            </h3>
            <div className="flex gap-4 mt-4">
              <a href="">
                <i className="bi bi-facebook text-2xl text-gray-400"></i>
              </a>
              <a href="">
                <i className="bi bi-whatsapp text-2xl text-gray-400"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram text-2xl text-gray-400"></i>
              </a>
            </div>
          </div>
          <hr className="bg-gray-300 mt-7" />
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
      <div className="border border-gray-300 mt-20 rounded-md py-5">
        <div className="flex justify-center items-center gap-5 mt-5 py-3">
          <button
            className="py-3 px-10 bg-blue-500 border text-white rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
            onClick={() => {
              setActiveSection("descripcion");
            }}
          >
            Descripcion
          </button>
          <button
            className="py-3 px-10 bg-blue-500 text-white rounded-md border hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
            onClick={() => {
              setActiveSection("especificacion");
            }}
          >
            Especificacion
          </button>
          <button
            className="py-3 px-10 bg-blue-500 border text-white rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
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
