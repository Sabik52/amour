import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const {productId} = useParams();
    

    
    return (
        <div className='details-container'>
            <h2>Name: {productId}</h2>

            <Link  to ="/order"><button className='order-btn'>Order Now</button></Link>
        </div>
    );
};

export default ProductDetails;