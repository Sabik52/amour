import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import './Orders.css'

const Order = () => {
    return (
        <div className='orders'>
            <h2>Please Pay For the Item</h2>
            <Link to='/addproduct'>Add Product</Link>
        </div>
       
    );
};

export default Order;