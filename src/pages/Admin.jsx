import React, { useContext, useEffect, useState } from "react";
import { ContextProduct } from "../context/ProductContext";
import { getProduct } from "../services/productos";
import { Link } from "react-router-dom";
import ItemAdmin from "../components/ui/ItemAdmin";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { product,setProduct } = useContext(ContextProduct);

  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res.data);
    });
  },[]);

  return (
    <div className="flex min-h-screen bg-[#111111] text-white">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#191919] p-5 border-r border-white/10 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
        <button onClick={() => setIsSidebarOpen(false)} className="absolute top-3 right-3 md:hidden p-1 rounded-full hover:bg-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-2xl font-bold mb-6">BYTEZONE</h2>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-violet-600/50"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-violet-600/50"
              >
                Ordenes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-violet-600/50"
              >
                usuarios
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button onClick={() => setIsSidebarOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center w-full md:w-auto bg-white/5 border border-white/20 rounded-lg px-3 py-2">
              <span className="mr-2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a href="/create" className="w-full text-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-md transition">
            + Añadir Nuevo Producto
          </a>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">Total Products</h3>
            <p className="text-2xl font-bold mt-2">{product.length}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">Orders Today</h3>
            <p className="text-2xl font-bold mt-2">{product.length}</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">Total Revenue</h3>
            <p className="text-2xl font-bold mt-2">$12,430</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-lg shadow-lg">
            <h3 className="text-gray-400 text-sm">Customers</h3>
            <p className="text-2xl font-bold mt-2">856</p>
          </div>
        </section>

        {/* Recent Products Table */}
        <section>
          <h2 className="text-2xl font-bold mb-5">Productos Recientes</h2>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg overflow-x-auto">
            {/* Encabezado de la tabla (visible en md y superior) */}
            <div className="hidden md:grid md:grid-cols-4 bg-white/10 text-white uppercase text-sm font-semibold">
              <div className="py-3 px-4 text-left">
                    Product
              </div>
              <div className="py-3 px-4 text-left">
                    Category
              </div>
              <div className="py-3 px-4 text-left">
                    Price
              </div>
              <div className="py-3 px-4 text-left">
                    Acciones
              </div>
            </div>

            {/* Cuerpo de la tabla */}
            <div className="divide-y divide-white/10 md:divide-y-0">
                {product.map((item, index) => (
                  <ItemAdmin key={index} product={item} setProduct={setProduct} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
