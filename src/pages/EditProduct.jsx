import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../services/productos";

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(id).then((respuesta) => {
      console.log(respuesta);
      if (respuesta) {
        setValue("name", respuesta.name);
        setValue("price", respuesta.price);
        setValue("type", respuesta.type);
        setValue("discount", respuesta.discount);
        setValue("rating", respuesta.rating);
        setValue("shortDescription", respuesta.shortDescription);

        // Convertir arrays/objetos a JSON para el textarea
        setValue("images", JSON.stringify(respuesta.images, null, 2));
        setValue("specs", JSON.stringify(respuesta.specs, null, 2));

        setValue("color", respuesta.color);
      }
    });
  }, []);

  const onSubmit = (formData) => {
    console.log("Datos para guardar:", formData);
    // Aquí la lógica para enviar el form
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        <section className="bg-white p-8 rounded-lg shadow-md w-full mx-auto border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            ✏️ Editar Producto
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Nombre */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nombre del producto
              </label>
              <input
                type="text"
                {...register("name", { required: "El nombre es obligatorio" })}
                placeholder="Ej. Auriculares HyperX Cloud II"
                className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition ${
                  errors.name ? "border-red-500" : "border-gray-300"
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
              <label className="block text-gray-700 font-medium mb-2">
                Precio
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "El precio es obligatorio",
                  valueAsNumber: true,
                })}
                placeholder="Ej. 79999"
                className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition ${
                  errors.price ? "border-red-500" : "border-gray-300"
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
              <label className="block text-gray-700 font-medium mb-2">
                Tipo
              </label>
              <input
                type="text"
                {...register("type", { required: "El tipo es obligatorio" })}
                placeholder="Ej. Auriculares"
                className={`w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition ${
                  errors.type ? "border-red-500" : "border-gray-300"
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
              <label className="block text-gray-700 font-medium mb-2">
                Descuento (%)
              </label>
              <input
                type="number"
                {...register("discount", { valueAsNumber: true })}
                placeholder="Ej. 10"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Rating
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                {...register("rating", { valueAsNumber: true })}
                placeholder="Ej. 4.7"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              />
            </div>

            {/* Color */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Color
              </label>
              <input
                type="text"
                {...register("color")}
                placeholder="Ej. Negro, Rojo, Azul"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
              />
            </div>

            {/* Descripción (2 columnas) */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Descripción
              </label>
              <textarea
                {...register("shortDescription")}
                placeholder="Describe el producto..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition resize-none"
              ></textarea>
            </div>

            {/* Images (por ahora texto plano) */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Imágenes (JSON)
              </label>
              <textarea
                {...register("images")}
                placeholder='Ej. ["url1", "url2"]'
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition resize-none font-mono text-sm"
              />
            </div>

            {/* Specs (JSON) */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Specs (JSON)
              </label>
              <textarea
                {...register("specs")}
                placeholder='Ej. {"cpu": "Intel", "ram": "16GB"}'
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition resize-none font-mono text-sm"
              />
            </div>

            {/* Botones */}
            <div className="md:col-span-2 flex justify-start gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/admin")}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg shadow-md transition"
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
