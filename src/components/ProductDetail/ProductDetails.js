import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const {productId} = useParams();
    const [product,setProduct] = useState({});
    // const [quantity, setQuantity] =useState;


    useEffect(()=> {
        const url = `https://thawing-basin-93769.herokuapp.com/product/${productId}`;

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
                <h3>Quantity: {product.quantity}</h3>
               
                <Link  to ="/order"><button  className='order-btn'>Derlivered</button></Link>
                </div>

           
        </div>
    );
};

export default ProductDetails;