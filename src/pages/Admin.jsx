import React, { useContext } from "react";
import { ContextProduct } from "../context/ProductContext";

const Admin = () => {
  const { product } = useContext(ContextProduct);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
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
                Orders
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Customers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center w-full md:w-1/2 bg-white border border-gray-300 rounded-lg px-3 py-2">
            <span className="mr-2 text-gray-500">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none bg-transparent"
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="cursor-pointer text-gray-600 text-lg">🔔</span>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-300 cursor-pointer">
              <span>👤</span>
              <span className="text-sm font-medium">Admin</span>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Total Products</h3>
            <p className="text-2xl font-bold mt-2">{product.length}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Orders Today</h3>
            <p className="text-2xl font-bold mt-2">{product.length}</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <p className="text-2xl font-bold mt-2">$12,430</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm">Customers</h3>
            <p className="text-2xl font-bold mt-2">856</p>
          </div>
        </section>

        {/* Recent Products Table */}
        <section>
          <h2 className="text-2xl font-bold mb-5">Recent Products</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-left">
                    Product
                  </th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-left">
                    Category
                  </th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-left">
                    Price
                  </th>
                  <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm text-left">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {product.map((item, index) => (
                  <tr>
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="py-3 px-4">${item.price.toLocaleString("es-AR") || "N/A"}</td>
                    <td className="py-3 px-4 flex gap-3">
                        <button className="px-2 py-2 bg-amber-300 rounded-md hover:cursor-pointer">Editar</button>
                        <button className="px-2 py-2 bg-red-500 text-amber-50 rounded-md hover:cursor-pointer">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
