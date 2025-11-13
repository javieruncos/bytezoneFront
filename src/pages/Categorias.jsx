import React, { useContext } from "react";
import ProductosPrincipales from "../components/sections/ProductosPrincipales";
import { ContextProduct } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const Categorias = () => {
  const {product} = useContext(ContextProduct);
  const {categoria} = useParams();

  return (
    <div className="container mx-auto mt-5">
      <nav className="flex px-5 py-3 text-gray-300 border border-white/20 rounded-lg" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="/" className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-violet-500">
              <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 text-sm font-medium text-violet-500 md:ml-2">{categoria || "Categorias"}</span>
            </div>
          </li>
        </ol>
      </nav>
     <ProductosPrincipales productos={product} categoria={categoria}></ProductosPrincipales>
    </div>
  );
};

export default Categorias;
