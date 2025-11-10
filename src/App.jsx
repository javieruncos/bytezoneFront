import "./App.css";
import Menu from "./components/common/Menu";
import Contacto from "./pages/Contacto";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import Categorias from "./pages/Categorias";
import DetalleProducto from "./pages/DetalleProducto";
import Admin from "./pages/Admin";
import EditProduct from "./pages/EditProduct";
import CrearProducto from "./pages/CrearProducto";
import Registro from "./pages/Registro";
import UserContext from "./context/UserContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import CarritoContext from "./context/CarritoContext";

function App() {
  return (
    <>
      <UserContext>
        <CarritoContext>
          <ProductContext>
            <BrowserRouter>
              <div className="App">
                <Menu></Menu>
                <Routes>
                  <Route path="/" element={<Home></Home>} />
                  <Route path="/contacto" element={<Contacto></Contacto>} />
                  <Route path="/nosotros" element={<Nosotros></Nosotros>} />
                  <Route
                    path="/admin"
                    element={
                      <PrivateRoute requiredRole={"admin"}>
                        <Admin></Admin>
                      </PrivateRoute>
                    }
                  />
                  <Route path="/registro" element={<Registro></Registro>} />
                  <Route
                    path="/edit/:id"
                    element={
                      <PrivateRoute requiredRole={"admin"}>
                        <EditProduct></EditProduct>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/create"
                    element={
                      <PrivateRoute requiredRole={"admin"}>
                        <CrearProducto></CrearProducto>
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/detalle/:id"
                    element={<DetalleProducto></DetalleProducto>}
                  />
                  <Route
                    path="/categorias/:categoria?"
                    element={<Categorias></Categorias>}
                  />
                </Routes>
              </div>
            </BrowserRouter>
          </ProductContext>
        </CarritoContext>
      </UserContext>
    </>
  );
}

export default App;
