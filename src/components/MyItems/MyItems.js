import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyItems = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
       
        const getNewItems = async() => {
            const url = `https://thawing-basin-93769.herokuapp.com/product`;
            const {data} = await axios.get(url);
            setProducts(data);
        }
        getNewItems();
    },[])
    
    return (
       
        <div>
            <h1>new: {products.length} </h1>
        </div>
    );
};

export default MyItems;