import React, { useContext, useMemo } from "react";
import { ContextProduct } from "../context/ProductContext";
import { Link, useSearchParams } from "react-router-dom";
import CardProduct from "../components/ui/CardProduct";

const SearchProduct = () => {
  const { product } = useContext(ContextProduct);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";

  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return [];
    }
    return product.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [product, searchTerm]);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
          Resultados de la Búsqueda
        </h1>
        {searchTerm && (
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Mostrando resultados para: "
            <span className="text-violet-400 font-semibold">
              {searchTerm}
            </span>
            "
          </p>
        )}
      </div>

      {/* Grid de resultados */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredProducts.map((item) => (
            <CardProduct key={item._id || item.id} product={item} />
          ))}
        </div>
      ) : (
        // Mensaje si no hay resultados
        <div className="text-center py-20">
          <p className="text-2xl text-gray-400 mb-4">
            No se encontraron productos.
          </p>
          <p className="text-gray-500">
            Intenta con otra palabra clave o explora nuestras categorías.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Volver al Inicio
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchProduct;