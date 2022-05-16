import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Products from '../Proudcts/Products';
import RelatedProduct from '../../RelatedProduct/RelatedProduct';
import SpecialSale from '../../SpecialSale/SpecialSale';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <RelatedProduct></RelatedProduct>
            <SpecialSale></SpecialSale>
            <Footer></Footer>
        </div>
    );
};

export default Home;