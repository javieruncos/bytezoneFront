import "./App.css";
import Menu from "./components/common/Menu";
import Contacto from "./pages/Contacto";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductContext from "./context/ProductContext";

function App() {
  return (
    <>
      <ProductContext>
        <BrowserRouter>
          <div className="App">
            <Menu></Menu>
            <Routes>
              <Route path="/" element={<Home></Home>} />
            </Routes>
            <Routes>
              <Route path="/contacto" element={<Contacto></Contacto>} />
            </Routes>
            <Routes>
              <Route path="/nosotros" element={<Nosotros></Nosotros>} />
            </Routes>
          </div>
        </BrowserRouter>
      </ProductContext>
    </>
  );
}

export default App;
