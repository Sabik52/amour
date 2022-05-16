import React from 'react';
import image1 from '../../images/relatedproduct/4.png';
import image2 from '../../images/relatedproduct/5.png';

import image3 from '../../images/relatedproduct/6.png';

const RelatedProduct = () => {
  return (
    <div>
      <h2 className='mt-5 text-white'>New Arrivals</h2>
      <p className='text-white'>Contrary to popular belief, Lorem Ipsum is not simply random text. <br /> It has roots in a piece of classical.</p>
      <div className="card-group w-75 mx-auto">
        <div className="card align-center">
          <img className="card-img-top w-100 h-100" src={image1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">CKXS L'Aphrod</h5>
            <p className="card-text text-danger font-weight-bold">$30</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top  w-100 h-100" src={image2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Mouag</h5>
            <p className="card-text text-danger font-weight-bold">$50</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top  w-100 h-100" src={image3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Nautica Voyage</h5>
            <p className="card-text text-danger font-weight-bold"> $39</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;