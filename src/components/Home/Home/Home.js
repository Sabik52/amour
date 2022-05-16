import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Products from '../Proudcts/Products';
import RelatedProduct from '../../RelatedProduct/RelatedProduct';
import SpecialSale from '../../SpecialSale/SpecialSale';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <RelatedProduct></RelatedProduct>
            <SpecialSale></SpecialSale>
            
            
        </div>
    );
};

export default Home;