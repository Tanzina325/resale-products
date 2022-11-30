import React from 'react';

const MyProductCard = ({product,handleDelete,handleAdvertise}) => {
    const{name,picture,resale_price,_id,status}=product
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img style={{width:'200px'}} src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>price:{resale_price}</p>
    <div className="card-actions justify-between">
    {
      status ? <button onClick={()=>handleAdvertise(_id)} className="btn btn-primary">  Advertised</button> :
      <button onClick={()=>handleAdvertise(_id)} className="btn btn-primary"> Make Advertise</button>
    }
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default MyProductCard;