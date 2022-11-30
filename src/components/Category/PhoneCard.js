import React, {  useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

import PhoneItem from './PhoneItem';

const PhoneCard = () => {
  const phones =useLoaderData();
  const{category}=phones
//   console.log(phone)
  console.log(phones)
  const[products,setProducts]=useState([]);
  const[phone,setPhone]=useState(null)


    useEffect(()=>{
      fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/products?category=${category}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
      },[category]);
      console.log(products)
      
   
    return (
        <div>
           <div>
           { products.map(product=> <PhoneItem
            key={product._id}
           product={product}
           setPhone={setPhone}
           
           ></PhoneItem>)}
           </div>
           {
            phone && <BookingModal phone={phone}
            setPhone={setPhone}
            ></BookingModal>
           }
        </div>
    );
};

export default PhoneCard;