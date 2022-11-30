import React from 'react';

const MyProductCard = ({product,handleDelete}) => {
    const{name,picture,resale_price,_id}=product
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img style={{width:'200px'}} src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>price:{resale_price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default MyProductCard;