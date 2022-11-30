import React from 'react';

const PhoneItem = ({product}) => {
  
    const{name,picture,details,location,resale_price,original_price,years_of_use,postTime,sellerName}=product
    return (
        <div>
            <div className="card lg:card-side bg-base-100 my-10 shadow-xl">
  <figure><img src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name} {details}</h2>
    <ul >
      <li >location :{location}</li>
      <li>resale price :{resale_price}</li>
      <li>original price :{original_price}</li>
      <li>years of use :{years_of_use} years</li>
      <li>time of post :{postTime}</li>
      <li>seller :{sellerName}</li>
    </ul>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PhoneItem;