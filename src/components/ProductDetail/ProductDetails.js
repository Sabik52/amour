import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});


    useEffect(()=> {
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[])
    

    
    return (
        
            <div className='cards'>
                <div className='detail-container'>
                <img src={product.img} alt="" />
                <h3>{product.name}</h3>
                <h2>Price: ${product.price}</h2>
                <h4>Supplier: {product.supplier}</h4>
                <p>{product.description}</p>
                <Link  to ="/order"><button className='order-btn'>Derlivered</button></Link>
                </div>

           
        </div>
    );
};

export default ProductDetails;