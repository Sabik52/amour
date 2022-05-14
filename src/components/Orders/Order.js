import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import './Orders.css'

const Order = () => {
    return (
        <div className='orders'>
            <h2>Please Pay For the Item</h2>
            <AddProduct></AddProduct>
        </div>
       
    );
};

export default Order;