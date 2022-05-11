import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Products from '../Proudcts/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;