import { useState } from "react";
import master from "../assets/icons/masterCard.webp";
import paypal from "../assets/icons/paypal.webp";
import stripe from "../assets/icons/stripe.webp";
import visa from "../assets/icons/visa.webp";
import Especificacion from "../components/ui/Especificacion";
import ComentariosProduct from "../components/ui/ComentariosProduct";
import DescripcionProduct from "../components/ui/DescripcionProduct";
import { a } from "framer-motion/client";

const DetalleProducto = () => {
  const imagenes = [
    "https://www.infiniarc.com/web/image/product.template/5748/image_1024?unique=2e7293c",
    "https://www.infiniarc.com/web/image/product.template/5749/image_1024?unique=2e7293c",
    "https://logg.api.cygnus.market/static/logg/Global/Teclado%20Mecanico%20Corsair%20K70%20MK2%20LP%20Cherry%20MX%20Speed%20RGB%20/9e4b8820ba874499aca826cbd4585941.png",
  ];

  const [imagenSeleccionada, setImagenSeleccionada] = useState(imagenes[0]);
  const [activeSection, setActiveSection] = useState("descripcion")

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="h-[400px] w-full bg-[#191919] border rounded-md overflow-hidden">
            <img
              src={imagenSeleccionada}
              className="h-full w-full object-contain"
              alt=""
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-5 pb-5">
            {imagenes.map((img, index) => (
              <div
                className={`h-[200px] w-full  border transition-all duration-300 rounded-md hover:cursor-pointer ${
                  imagenSeleccionada === img
                    ? "border border-blue-500 "
                    : "border-gray-300 "
                }`}
                onClick={() => setImagenSeleccionada(img)}
                key={index}
              >
                <img
                  src={img}
                  className="h-full w-full object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className=" h-auto w-full border border-gray-300 rounded-md p-6">
          <h3 className="text-3xl font-bold">DetalleProducto</h3>
          <p className="text-4xl mt-5 font-bold text-blue-500">$150.000</p>
          <hr className="bg-gray-300 mt-4" />
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              minima maxime similique est officia illum nostrum odio quibusdam
              explicabo nesciunt.
            </p>
          </div>
          <div className="flex gap-4 mt-10">
            <input
              type="number"
              className="border rounded-sm border-gray-300 h-[40px] w-[100px] p-1"
              placeholder="1"
            />
            <button className="bg-blue-500 text-white px-4 py-2  rounded-md cursor-pointer hover:bg-blue-600">
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
                <i class="bi bi-facebook text-2xl text-blue-500"></i>
              </a>
              <a href="">
                <i class="bi bi-whatsapp text-2xl text-green-500"></i>
              </a>
              <a href="">
                <i class="bi bi-instagram text-2xl text-pink-500"></i>
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
          <button className="py-3 px-10 bg-blue-500 border text-white rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
          onClick={()=>{setActiveSection("descripcion")}}
          >
            Descripcion
          </button>
          <button className="py-3 px-10 bg-blue-500 text-white rounded-md border hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
          onClick={()=>{setActiveSection("especificacion")}}>
            Especificacion
          </button>
          <button className="py-3 px-10 bg-blue-500 border text-white rounded-md hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 transition-all duration-300"
          onClick={()=>{setActiveSection("comentarios")}}
          >
            Comentarios
          </button>
        </div>
        {
          activeSection === "descripcion" ? (
            <DescripcionProduct></DescripcionProduct>
          ) : activeSection === "especificacion" ? (
            <Especificacion></Especificacion>
          ) : activeSection === "comentarios" && (
            <ComentariosProduct></ComentariosProduct>
          )
        }
      </div>
    </div>
  );
};

export default DetalleProducto;
