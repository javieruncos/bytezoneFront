import React from 'react';
import Portada from '../components/sections/Portada';
import MenuProduct from '../components/sections/MenuProduct';
import SectionProducts from '../components/sections/SectionProducts';
import Destacados from '../components/sections/Destacados';
import MasVendidos from '../components/sections/MasVendidos';
import ProductosPrincipales from '../components/sections/ProductosPrincipales';
import Banner from '../components/ui/Banner';


const Home = () => {
    return (
        <div className='Main'>
            <Portada></Portada>
            <MenuProduct></MenuProduct>
             <SectionProducts></SectionProducts>
             <Destacados></Destacados>
             <MasVendidos></MasVendidos>
             <Banner></Banner>
             <ProductosPrincipales></ProductosPrincipales>
        </div>
    );
};

export default Home;