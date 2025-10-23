import React from "react";
import Portada from "../components/sections/Portada";
import MenuProduct from "../components/sections/MenuProduct";
import SectionProducts from "../components/sections/SectionProducts";
import Destacados from "../components/sections/Destacados";
import MasVendidos from "../components/sections/MasVendidos";
import ProductosPrincipales from "../components/sections/ProductosPrincipales";
import Banner from "../components/ui/Banner";
import Comentarios from "../components/sections/Comentarios";
import Menu from "../components/common/Menu";

const Home = () => {
  return (
    <div className="Main">
      <Menu></Menu>
      <section className="mt-10 mx-3">
        <Portada></Portada>
      </section>
        <MenuProduct></MenuProduct>
      <section className="container mt-5  mx-auto">
        <SectionProducts></SectionProducts>
      </section>
      <Destacados></Destacados>
      <MasVendidos></MasVendidos>
      <ProductosPrincipales></ProductosPrincipales>
      <Banner></Banner>
      {/* <Comentarios></Comentarios> */}
    </div>
  );
};

export default Home;
