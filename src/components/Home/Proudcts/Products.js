import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2 className='product-title'>All Products {products.length} </h2>
            <div className='products-container'>
            
            {
                products.slice(0, 6).map(product => <Product
                key = {product._id}
                product = {product}
                ></Product>)
            }
            </div>
           <button  className='mng-inv-btn'>
               
                <Link to="/manageinventory">Manage Inventory</Link></button>

        </div>
    );
};

export default Products;


