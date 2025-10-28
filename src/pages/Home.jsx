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
      <section className="container pt-10 mx-auto">
        <SectionProducts productos={product}></SectionProducts>
      </section>
      <section className="pt-10">
        <Destacados productos={product}></Destacados>
      </section>
      <section className="pt-10">
        <MasVendidos productos={product}></MasVendidos>
      </section>
      <section className="pt-10">
        <ProductosPrincipales productos={product}></ProductosPrincipales>
      </section>
      <section className="py-6">
        <Banner></Banner>
      </section>
      <section className="py-6">
        <Comentarios></Comentarios>
      </section>
    </div>
  );
};

export default Home;
