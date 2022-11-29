import React from 'react';

const PhoneItem = ({product}) => {
    const{name,picture,details}=product
    return (
        <div>
            <div className="card lg:card-side bg-base-100 my-10 shadow-xl">
  <figure><img src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name} {details}</h2>
    
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default PhoneItem;