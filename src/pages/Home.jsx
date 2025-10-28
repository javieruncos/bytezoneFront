import React, { useContext } from "react";
import Portada from "../components/sections/Portada";
import MenuProduct from "../components/sections/MenuProduct";
import SectionProducts from "../components/sections/SectionProducts";
import Destacados from "../components/sections/Destacados";
import MasVendidos from "../components/sections/MasVendidos";
import ProductosPrincipales from "../components/sections/ProductosPrincipales";
import Banner from "../components/ui/Banner";
import Comentarios from "../components/sections/Comentarios";
import Menu from "../components/common/Menu";
import { ContextProduct } from "../context/ProductContext";

const Home = () => {
  const {product} = useContext(ContextProduct);


  return (
    <div className="Main">
      <section className="mt-10 mx-3">
        <Portada></Portada>
      </section>
      <MenuProduct></MenuProduct>
      <section className="container mt-5  mx-auto">
        <SectionProducts productos={product}></SectionProducts>
      </section>
      <section>
        <Destacados productos={product}></Destacados>
      </section>
      <section>
        <MasVendidos></MasVendidos>
      </section>
      <section>
        <ProductosPrincipales></ProductosPrincipales>
      </section>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Comentarios></Comentarios>
      </section>
    </div>
  );
};

export default Home;
