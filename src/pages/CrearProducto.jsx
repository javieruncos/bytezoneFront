import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createProduct } from "../services/productos"; // Nueva función
import Swal from "sweetalert2";
import { ContextProduct } from "../context/ProductContext";

const CrearProducto = () => {
  const { setProduct } = useContext(ContextProduct);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  // Definición de campos de especificaciones dinámicas, igual que en EditProduct
  const specsFields = {
    Auriculares: [
      { name: "type", label: "Tipo" },
      { name: "connection", label: "Conexión" },
      { name: "microphone", label: "Micrófono", type: "boolean" },
    ],
    Joystick: [
      { name: "compatibility", label: "Compatibilidad" },
      { name: "connection", label: "Conexión" },
      { name: "vibration", label: "Vibración", type: "boolean" },
    ],
    Teclado: [
      { name: "switchType", label: "Switch Type" },
      { name: "backlight", label: "Retroiluminación" },
      { name: "connection", label: "Conexión" },
    ],
    Mouse: [
      { name: "dpi", label: "DPI" },
      { name: "connection", label: "Conexión" },
      { name: "rgb", label: "RGB", type: "boolean" },
    ],
    Monitor: [
      { name: "size", label: "Tamaño" },
      { name: "resolution", label: "Resolución" },
      { name: "refreshRate", label: "Tasa de Refresco" },
      { name: "panel", label: "Tipo de Panel" },
    ],
    "Laptop Gamer": [
      { name: "cpu", label: "CPU" },
      { name: "gpu", label: "GPU" },
      { name: "ram", label: "RAM" },
      { name: "storage", label: "Almacenamiento" },
      { name: "display", label: "Pantalla" },
    ],
  };

  const onSubmit = (data) => {
    // Convertir los valores booleanos de las specs
    const parsedSpecs = Object.fromEntries(
      Object.entries(data.specs || {}).map(([key, value]) => [
        key,
        value === "true" ? true : value === "false" ? false : value,
      ])
    );

    // 1. Crear un objeto FormData para enviar archivos y texto
    const formData = new FormData();

    // 2. Adjuntar todos los campos del formulario al FormData
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("type", data.type);
    if (data.discount) formData.append("discount", data.discount);
    if (data.rating) formData.append("rating", data.rating);
    if (data.color) formData.append("color", data.color);
    if (data.description) formData.append("description", data.description); // Asegúrate que esta línea exista
    formData.append("specs", JSON.stringify(parsedSpecs)); // Los objetos se envían como string JSON

    // 3. Adjuntar cada archivo de imagen
    Array.from(data.images).forEach((file) => {
      formData.append("images", file);
    });

    createProduct(formData).then((res) => {
      if (res.status === 201) {
        setProduct((prevProducts) => [...prevProducts, res.data]);
        Swal.fire(
          "Producto creado",
          "El producto fue creado correctamente",
          "success"
        );
        reset(); // Limpiar el formulario
        navigate("/admin");
      } else {
        Swal.fire("Error", "Hubo un problema al crear el producto", "error");
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-[#111111] text-white">
      <style>
        {`
          input:-webkit-autofill,
          input:-webkit-autofill:hover, 
          input:-webkit-autofill:focus, 
          input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px #191919 inset !important;
            -webkit-text-fill-color: #fff !important;
            caret-color: #fff !important;
          }
        `}
      </style>

      <aside className="w-64 bg-[#191919] p-5 hidden md:block border-r border-white/10">
        <h2 className="text-2xl font-bold mb-6">BYTEZONE</h2>
        <nav>
          <ul>
            <li>
              <Link
                to="/admin"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-violet-600/50"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-violet-600/50"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <section className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-lg shadow-lg w-full mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            ➕ Crear Nuevo Producto
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Nombre */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Nombre del producto
              </label>
              <input
                type="text"
                {...register("name", { required: "El nombre es obligatorio" })}
                placeholder="Ej. Auriculares HyperX Cloud II"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition ${
                  errors.name ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Precio */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Precio
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "El precio es obligatorio",
                  valueAsNumber: true,
                  min: { value: 0, message: "El precio no puede ser negativo" },
                })}
                placeholder="Ej. 79999"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition ${
                  errors.price ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            {/* Tipo */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Tipo
              </label>
              <select
                {...register("type", { required: "El tipo es obligatorio" })}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition appearance-none ${
                  errors.type ? "border-red-500" : "border-white/20"
                }`}
              >
                <option value="" className="bg-[#191919] text-gray-400">Selecciona un tipo</option>
                {Object.keys(specsFields).map((type) => (
                  <option key={type} value={type} className="bg-[#191919] text-white">
                    {type}
                  </option>
                ))}
              </select>
              {errors.type && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.type.message}
                </p>
              )}
            </div>

            {/* Descuento */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Descuento (%)
              </label>
              <input
                type="number"
                {...register("discount", {
                  valueAsNumber: true,
                  min: 0,
                  max: 100,
                })}
                placeholder="Ej. 10"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Rating
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                {...register("rating", { valueAsNumber: true, min: 0, max: 5 })}
                placeholder="Ej. 4.7"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Color
              </label>
              <input
                type="text"
                {...register("color")}
                placeholder="Ej. Negro, Rojo, Azul"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            </div>

            {/* Descripción (2 columnas) */}
            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-2">
                Descripción
              </label>
              <textarea
                {...register("description")}
                placeholder="Describe brevemente el producto..."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition resize-none"
              ></textarea>
            </div>

            {/* Images (File Upload) */}
            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-2">
                Imágenes del producto
              </label>
              <input
                type="file"
                {...register("images", { required: "Al menos una imagen es obligatoria" })}
                accept="image/*"
                multiple
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-500/20 file:text-violet-300 hover:file:bg-violet-500/30"
              />
              {errors.images && (
                <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>
              )}
            </div>

            {/* Specs dinámicas */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {watch("type") && specsFields[watch("type")]?.length > 0 ? (
                specsFields[watch("type")].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-300 font-medium mb-2">
                      {field.label}
                    </label>
                    {field.type === "boolean" ? (
                      <select
                        {...register(`specs.${field.name}`)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 transition appearance-none"
                      >
                        <option value="true" className="bg-[#191919] text-white">Sí</option>
                        <option value="false" className="bg-[#191919] text-white">No</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        {...register(`specs.${field.name}`)}
                        placeholder={field.label}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 transition"
                      />
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 md:col-span-2">
                  Selecciona un tipo de producto para ver las especificaciones.
                </p>
              )}
            </div>

            {/* Botones */}
            <div className="md:col-span-2 flex justify-start gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-md transition"
              >
                Crear Producto
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default CrearProducto;
