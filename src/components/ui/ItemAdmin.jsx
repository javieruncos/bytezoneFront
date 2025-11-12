import React from "react";
import Swal from "sweetalert2";
import { eliminarProductos, getProduct } from "../../services/productos";
import { Link } from "react-router-dom";

const ItemAdmin = ({ product, setProduct }) => {
  const handleDelete = (producto) => {
    Swal.fire({
      title: "Estas seguro que quieres eliminar el producto?",
      text: "No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#191919",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductos(producto).then((respuesta) => {
          if (respuesta.status === 200) {
            getProduct().then((respuesta) => {
              setProduct(respuesta.data);
            });
          } else {
            console.log("error al eliminar el producto");
          }
        });
        Swal.fire(
          "Eliminado!",
          "El producto se elimino correctamente.",
          "success"
        );
      }
    });
  };

  return (
    <>
      <tr>
        <td className="py-3 px-4">{product.name}</td>
        <td className="py-3 px-4">{product.type}</td>
        <td className="py-3 px-4">
          ${product.price.toLocaleString("es-AR") || "N/A"}
        </td>
        <td className="py-3 px-4 flex gap-3">
          <Link
            to={`/edit/${product._id}`}
            className="px-2 py-2 bg-amber-300 rounded-md hover:cursor-pointer"
          >
            Editar
          </Link>
          <button className="px-2 py-2 bg-red-500 text-amber-50 rounded-md hover:cursor-pointer"
          onClick={() => handleDelete(product._id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default ItemAdmin;
