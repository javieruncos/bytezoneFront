import { useState } from "react";

const ModalCarrito = ({ isOpen, setIsOpen }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Teclado mecánico RGB", price: 80 },
    { id: 2, name: "Mouse gamer Logitech", price: 50 },
    { id: 3, name: "Auriculares HyperX", price: 100 },
  ]);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="relative">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Fondo oscuro */}
          <div
            className="absolute inset-0 bg-black/70 bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Contenido del modal */}
          <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 z-10">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Tu carrito 🛍️
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Tu carrito está vacío</p>
            ) : (
              <ul className="divide-y divide-gray-200 mb-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center py-2"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-emerald-600 font-semibold">
                      ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex justify-between items-center border-t pt-3">
              <span className="font-semibold text-gray-700">Total:</span>
              <span className="text-lg font-bold text-emerald-700">
                ${total}
              </span>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Cerrar
              </button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCarrito;
