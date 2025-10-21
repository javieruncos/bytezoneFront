import React from "react";
import Portada from "../components/sections/Portada";
import MenuProduct from "../components/sections/MenuProduct";
import SectionProducts from "../components/sections/SectionProducts";
import Destacados from "../components/sections/Destacados";
import MasVendidos from "../components/sections/MasVendidos";
import ProductosPrincipales from "../components/sections/ProductosPrincipales";
import Banner from "../components/ui/Banner";
import Comentarios from "../components/sections/Comentarios";

const Home = () => {

  return (
    <div className="Main">
      <Portada></Portada>
      <MenuProduct></MenuProduct>
      <SectionProducts></SectionProducts>
      <Destacados></Destacados>
      <MasVendidos></MasVendidos>
      <ProductosPrincipales></ProductosPrincipales>
      <Banner></Banner>
      <Comentarios></Comentarios>
    </div>
  );
};

export default Home;
