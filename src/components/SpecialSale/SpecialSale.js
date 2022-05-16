import React from 'react';
import image from '../../images/deal/Pic.png'
import './SpecialSale.css'

const SpecialSale = () => {
    return (
        <div className='special-content'>
            <div>
                <img  src={image} alt="" />
            </div>
            <div className='content-text'>
                <h1><span className='up-text'>GOLD INTENSE </span><br /> FOR WOMEN</h1>
                <p>Perfume must not be linked just to fashion because that <br /> means that one day it will go out of style.</p>
                <h2>BEST PRICE: $500</h2>
                <h3>DEAL OF THE DAY</h3>

                
            </div>
        </div>
    );
};

export default SpecialSale;