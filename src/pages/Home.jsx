import React from 'react';
import Portada from '../components/sections/Portada';
import MenuProduct from '../components/sections/MenuProduct';

const Home = () => {
    return (
        <div className='Main'>
            <Portada></Portada>
            <MenuProduct></MenuProduct>
        </div>
    );
};

export default Home;