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
import FadeInSections from "../components/animaciones/FadeInSections";

const Home = () => {
  const { product } = useContext(ContextProduct);

  return (
    <div className="Main">
      <FadeInSections>
        <section className="mt-10 mx-3 ">
          <Portada></Portada>
        </section>
      </FadeInSections>

      <FadeInSections>
        <MenuProduct></MenuProduct>
      </FadeInSections>

      <FadeInSections>
        <section className="container pt-10 mx-auto">
          <SectionProducts productos={product}></SectionProducts>
        </section>
      </FadeInSections>
      <FadeInSections>
        <section className="pt-10">
          <Destacados productos={product}></Destacados>
        </section>
      </FadeInSections>
      <FadeInSections>
        <section className="pt-10">
          <MasVendidos productos={product}></MasVendidos>
        </section>
      </FadeInSections>
      <FadeInSections>
        <section className="pt-10">
          <ProductosPrincipales productos={product}></ProductosPrincipales>
        </section>
      </FadeInSections>
      <FadeInSections>
        <section className="py-6">
          <Banner></Banner>
        </section>
      </FadeInSections>
      <FadeInSections>
        <section className="py-6">
          <Comentarios></Comentarios>
        </section>
      </FadeInSections>
    </div>
  );
};

export default Home;
