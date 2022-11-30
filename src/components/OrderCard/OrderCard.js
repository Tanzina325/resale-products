import React from 'react';

const OrderCard = ({booking}) => {
    const{product,price,picture}=booking
    return (
        <div>
          <div className="card  w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{product}</h2>
    <p>price: {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Pay</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default OrderCard;