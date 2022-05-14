import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const ManageInventory = () => {
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
                products.map(product => <Product
                key = {product._id}
                product = {product}
                ></Product>)
            }
            </div>
        </div>
    );
};

export default ManageInventory;