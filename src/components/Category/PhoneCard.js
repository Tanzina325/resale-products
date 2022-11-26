import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PhoneItem from './PhoneItem';

const PhoneCard = () => {
  const phones =useLoaderData();
  const phone = phones.product;
  console.log(phone)
//   console.log(phones)
    return (
        <div>
            <div className=' m-10'>
            {
                phone.map((eachProduct,i)=><PhoneItem key ={i} eachProduct={eachProduct}></PhoneItem>)
            }
        </div>
        </div>
    );
};

export default PhoneCard;