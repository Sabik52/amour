import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
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
            <Link to="/manageinventory">Manage Inventory</Link>

        </div>
    );
};

export default Products;


