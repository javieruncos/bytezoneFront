import React from "react";
import Swal from "sweetalert2";
import { eliminarProductos } from "../../services/productos";
import { Link } from "react-router-dom";

const ItemAdmin = ({ product, setProduct }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8b5cf6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductos(id).then((respuesta) => {
          if (respuesta.status === 200) {
            setProduct(prev => prev.filter(p => p._id !== id));
            Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'success');
          } else {
            Swal.fire('Error', 'No se pudo eliminar el producto.', 'error');
          }
        });
      }
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-y-2 items-center border-b border-white/10 md:border-none">
      {/* En móvil, los labels se muestran con `before:` */}
      <div className="col-span-2 md:col-span-1 flex items-center gap-3">
        <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-contain rounded-md bg-white/10 p-1" />
        <span className="font-medium">{product.name}</span>
      </div>
      <div className="text-gray-400 md:text-white"><span className="font-medium text-gray-400 md:hidden">Categoría: </span>{product.type}</div>
      <div className="text-gray-400 md:text-white"><span className="font-medium text-gray-400 md:hidden">Precio: </span>${product.price?.toLocaleString('es-AR')}</div>
      <div className="col-span-2 md:col-span-1 flex justify-start md:justify-start gap-3 mt-2 md:mt-0">
        <Link to={`/edit/${product._id}`} className="text-blue-400 hover:text-blue-300 transition-colors">Editar</Link>
        <button onClick={() => handleDelete(product._id)} className="text-red-400 hover:text-red-300 transition-colors">Eliminar</button>
      </div>
    </div>
  );
};

export default ItemAdmin;
