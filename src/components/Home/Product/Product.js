import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const { _id, name, img, description, price, supplier} = product;
    const navigate = useNavigate();
    const showProductDetail = id=> {
        navigate(`/product/${_id}`)
    }

    return (
      
            <div className='cards'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h2>Price: ${price}</h2>
                <h4>Supplier: {supplier}</h4>
                <p>{description}</p>
                <button onClick={() =>showProductDetail(_id)} className='card-btn'>Stock Update</button>
                </div>

        
            
      
    );
};

export default Product;