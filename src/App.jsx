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
import FooterMenu from "./components/sections/FooterMenu";
import SearchProduct from "./pages/SearchProduct";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <>
      <UserContext>
        <CarritoContext>
          <ProductContext>
            <BrowserRouter>
              <ScrollToTop />
              <div className="App">
                <Menu></Menu>
                <Routes>
                  <Route path="/" element={<Home></Home>} />
                  <Route path="/contacto" element={<Contacto></Contacto>} />
                  <Route path="/nosotros" element={<Nosotros></Nosotros>} />
                  <Route path="/registro" element={<Registro></Registro>} />
                  <Route path="/busqueda" element={<SearchProduct></SearchProduct>} />
                  

                  {/* Rutas Protegidas para Administradores */}
                  <Route element={<PrivateRoute requiredRole={"admin"} />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/edit/:id" element={<EditProduct />} />
                    <Route path="/create" element={<CrearProducto />} />
                  </Route>

                  {/* Rutas Públicas */}
                  <Route
                    path="/detalle/:id"
                    element={<DetalleProducto></DetalleProducto>}
                  />
                  <Route
                    path="/categorias/:categoria?"
                    element={<Categorias></Categorias>}
                  />
                </Routes>
                <FooterMenu></FooterMenu>
              </div>
            </BrowserRouter>
          </ProductContext>
        </CarritoContext>
      </UserContext>
    </>
  );
}

export default App;
