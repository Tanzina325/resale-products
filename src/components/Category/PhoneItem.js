import React, { useEffect, useState }  from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";

const PhoneItem = ({product,setPhone}) => {
  // const {status}=currentuser

    const{name,picture,details,location,resale_price,original_price,years_of_use,postTime,sellerName,email}=product
    const[currentUser,setCurrentUser]=useState({});

    useEffect(()=>{
              fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/users/${email}`)
              .then(res=>res.json())
              .then(data=>setCurrentUser(data))
              },[email]);
              console.log(currentUser)
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
      <div className='flex justify-between'>
      <h1>{currentUser.status} seller :{sellerName}</h1>
      <h1>{
         currentUser.status==='verified'&&<BsFillCheckCircleFill style={{width:'200px',height:'30px'}}className='text-info mr-20 lg:mr-96'></BsFillCheckCircleFill>
      }</h1>
      </div>
    </ul>
    <div className="card-actions justify-end">
    <label onClick={()=>setPhone(product)} htmlFor="booking-modal" className="btn">Book Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default PhoneItem;