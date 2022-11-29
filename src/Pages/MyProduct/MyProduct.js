// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyProduct = () => {
const {user}=useContext(AuthContext);
    

    const[products,setProducts]=useState([])

    useEffect(()=>{
      fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/product?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
      },[user?.email]);
      
    console.log(products)
    return (
        <div>
            {products.length}
            {products.map(product=><h1 key={product._id}>{product.name}</h1>)}
        </div>
    );
};

export default MyProduct;