// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import MyProductCard from '../../components/MyProductCard/MyProductCard';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyProduct = () => {
const {user}=useContext(AuthContext);
    

    const[products,setProducts]=useState([])
const[refresh,setrefresh]=useState(false)
    useEffect(()=>{
      fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/product?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data);
        setrefresh(!refresh);}
      )
      },[user?.email,refresh]);
      
    console.log(products);
    const handleAdvertise = id =>{
        console.log('verifying',id)
                 const proceed =window.confirm('want to verify') ;
                 if(proceed) {
                    fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/products/${id}`,{
                        method: 'PUT'})
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                      })}}
    const handleDelete = id =>{
        console.log('deleting',id)
                 const proceed =window.confirm('want to delete') ;
                 if(proceed) {
                    fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/products/${id}`,{
                        method: 'DELETE'})
                    .then(res=>res.json())
                    .then(data=>{
                        console.log(data);
                        if(data.deletedCount > 0){
                            alert('deleted successfully');
        const remaining= products.filter(pro=>pro._id !== id);
        setProducts(remaining)
        
        
    }})}}
    return (
        <div className='grid lg:grid-cols-2 gap-10'>
            
            {products.map(product=><MyProductCard key={product._id}
                product={product}
                handleDelete={handleDelete}
              handleAdvertise={handleAdvertise}
                ></MyProductCard>)}
        </div>
    );
};

export default MyProduct;