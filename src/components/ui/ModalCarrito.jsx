import { useContext } from "react";
import { ContextCarrito } from "../../context/CarritoContext";
import { AnimatePresence, motion } from "framer-motion";

const ModalCarrito = ({ isOpen, setIsOpen }) => {
  // Acceder a los datos del carrito
  const { cartItems, removeFromCart, clearCart } = useContext(ContextCarrito);

  // El precio total ahora se calcula con el precio y la cantidad de cada item
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Fondo oscuro */}
            <motion.div
              className="absolute inset-0 bg-black/70"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            {/* Contenido del modal */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg w-11/12 max-w-md p-6 z-10 text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Tu Carrito de compras
              </h2>

              {cartItems.length === 0 ? (
                <p className="text-gray-400">Tu carrito está vacío.</p>
              ) : (
                <ul className="divide-y divide-white/10 mb-4 max-h-80 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <li
                      key={item._id} // Usar _id como key es correcto y crucial
                      className="flex items-center py-4 gap-4"
                    >
                      <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-contain rounded-md bg-white/10 p-1" />
                      <div className="flex-grow min-w-0">
                        <span className="font-medium text-white block truncate">{item.name}</span>
                        <span className="text-sm text-gray-400">Cantidad: {item.quantity}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-violet-400 font-semibold text-base w-24 text-right">
                          ${(item.price * item.quantity).toLocaleString("es-AR")}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item._id)} 
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                          aria-label="Eliminar producto"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m3.5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m3.5-.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06"/>
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="font-semibold text-lg">Total:</span>
                <span className="text-xl font-bold text-violet-400">
                  ${total?.toLocaleString("es-AR") || "N/A"}
                </span>
              </div>

              <div className="flex justify-end mt-6 gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Cerrar
                </button>
                <button 
                  onClick={clearCart}
                  className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Finalizar Compra
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalCarrito;
