import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/UseProducts';
import './Product.css'

const Product = ({product}) => {
    const { _id, name, img, description, price, quantity, supplier} = product;
    const navigate = useNavigate();
    const showProductDetail = id => {
        navigate(`/product/${_id}`)
    }

    return (
      
            <div className='cards'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h2>Price: ${price}</h2>
                <h4>Supplier: {supplier}</h4>
                <h5>Quantity: {quantity}</h5>
                <p>{description}</p>
                <button onClick={() =>showProductDetail(_id)} className='card-btn'>Details</button>
                </div>
               

        
            
      
    );
};

export default Product;