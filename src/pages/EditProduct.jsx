import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editarProductos, getProductById } from "../services/productos";
import Swal from "sweetalert2";
import { ContextProduct } from "../context/ProductContext";

const EditProduct = () => {
  const { setProduct, product } = useContext(ContextProduct);
  const [existingImages, setExistingImages] = useState(product.images || []);
  const [deletedImages, setDeletedImages] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    getProductById(id).then((respuesta) => {
      // La respuesta de la API es el objeto del producto directamente.
      const productData = respuesta;

      // Verificamos que tengamos un objeto válido con un _id (de MongoDB) o id.
      if (productData && (productData._id || productData.id)) {
        setValue("name", productData.name);
        setValue("price", productData.price);
        setValue("type", productData.type);
        setValue("discount", productData.discount);
        setValue("rating", productData.rating);
        setValue("description", productData.description);

        // Convertir arrays/objetos a JSON para el textarea
        if (productData.specs) {
          Object.entries(productData.specs).forEach(([key, value]) => {
            setValue(`specs.${key}`, value);
          });
        }
        setExistingImages(productData.images || []);
        setValue("color", productData.color);
        // No establecemos valor para 'images' ya que es un input de tipo file
      }
    });
  }, [id, setValue]);

  const onSubmit = (formData) => {
    // Convertir los valores booleanos de las specs
    const parsedSpecs = Object.fromEntries(
      Object.entries(formData.specs || {}).map(([key, value]) => [
        key,
        value === "true" ? true : value === "false" ? false : value,
      ])
    );

    const dataToUpdate = new FormData();
    dataToUpdate.append("name", formData.name);
    dataToUpdate.append("price", formData.price);
    dataToUpdate.append("type", formData.type);
    if (formData.discount) dataToUpdate.append("discount", formData.discount);
    if (formData.rating) dataToUpdate.append("rating", formData.rating);
    if (formData.color) dataToUpdate.append("color", formData.color);
    if (formData.description)
      dataToUpdate.append("description", formData.description);
    dataToUpdate.append("specs", JSON.stringify(parsedSpecs));

    // Adjuntar nuevas imágenes solo si se seleccionaron
    if (newImages.length > 0) {
      newImages.forEach((file) => {
        dataToUpdate.append("images", file);
      });
    }

    if (deletedImages.length > 0) {
      deletedImages.forEach((public_id) => {
        dataToUpdate.append("deletedImages", public_id);
      });
    }

    editarProductos(id, dataToUpdate).then((res) => {
      if (res.status === 200) {
        setProduct((prevProducts) =>
          // Usamos '==' para comparar de forma flexible (string vs objectId)
          // y nos aseguramos de que ambos existan.
          prevProducts.map((p) => (p._id && p._id == id ? res.data : p))
        );

        Swal.fire(
          "producto editado",
          "el producto fue editado correctmente",
          "success"
        );
        navigate("/admin");
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
            ✏️ Editar Producto
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
              <input
                type="text"
                {...register("type", { required: "El tipo es obligatorio" })}
                placeholder="Ej. Auriculares"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition ${
                  errors.type ? "border-red-500" : "border-white/20"
                }`}
              />
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
                {...register("discount", { valueAsNumber: true })}
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
                {...register("rating", { valueAsNumber: true })}
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
                placeholder="Describe el producto..."
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition resize-none"
              ></textarea>
            </div>

            {/* Images (File Upload) */}
            <div className="md:col-span-2">
              <label className="block text-gray-300 font-medium mb-2">
                Añadir/Reemplazar Imágenes
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  setNewImages(files); // ← guardás los archivos en estado
                }}
                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-500/20 file:text-violet-300 hover:file:bg-violet-500/30"
              />
              <div className="flex gap-2 flex-wrap mt-4">
                {newImages.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Nueva imagen ${index + 1}`}
                      className="w-24 h-24 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setNewImages((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
                      title="Eliminar imagen"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              {existingImages.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img.url}
                    alt={`Imagen ${index + 1}`}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setDeletedImages((prev) => [...prev, img.public_id]);
                      setExistingImages((prev) =>
                        prev.filter((_, i) => i !== index)
                      );
                    }}
                    className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
                    title="Eliminar imagen"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Specs (JSON) */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {specsFields[watch("type")]?.map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-300 font-medium mb-2">
                    {field.label}
                  </label>

                  {field.type === "boolean" ? (
                    <select
                      {...register(`specs.${field.name}`)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-violet-500 transition appearance-none"
                    >
                      <option value="true" className="bg-[#191919] text-white">
                        Sí
                      </option>
                      <option value="false" className="bg-[#191919] text-white">
                        No
                      </option>
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
              )) || (
                <p className="text-gray-500">
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
                Guardar Cambios
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default EditProduct;
