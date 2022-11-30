import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import CategoryCard from '../../components/Category/CategoryCard';

import AdvertiseCard from '../../components/AdvertiseCard/AdvertiseCard';
const Home = () => {
const {data:categories =[]} = useQuery({
    queryKey:['categories'],
    queryFn : ()=> fetch('https://b612-used-products-resale-server-side-inky.vercel.app/category')
    .then(res=>res.json())
});
const[products,setProducts]=useState([]);
  


    useEffect(()=>{
      fetch('https://b612-used-products-resale-server-side-inky.vercel.app/produc')
      .then(res=>res.json())
      .then(data=>setProducts(data))
      },[]);
      console.log(products)


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-100825_iPhone14Pro-XL-e5b49e99-ad2e-4315-ba36-2d094cb14bbb.jpg")` }}>
  <div className="hero-overlay  bg-opacity-60"></div>
  <div className="hero-content  text-neutral-content">
    <div className=" max-w-md ">
      <h1 className="mb-5 text-5xl font-bold lg:ml-[-600px]">Hello there</h1>
      <p className="mb-5 lg:ml-[-600px] ">We sell reused mobile phones at the very lowest price.</p>
      <button className="btn btn-primary lg:ml-[-600px]">Get Started</button>
    </div>
  </div>
</div>
            <div className='grid lg:grid-cols-3 gap-20 m-10'>
            {
                categories.map(phoneCategory=><CategoryCard key ={phoneCategory._id} phoneCategory={phoneCategory}></CategoryCard>)
            }
        </div>
        <div className=''>
        { products.map(product=> <AdvertiseCard
            key={product._id}
           product={product}
           
           ></AdvertiseCard>)} 
        </div>
        <h1 className='font-bold text-center text-3xl my-10'>Why POSHMARK ?</h1>
        <div className='grid lg:grid-cols-3 g-5 m-10'>
        <div className="card w-96 bg-base-100 m-5 shadow-xl">
  <figure><img src="https://d2gjrq7hs8he14.cloudfront.net/webpack4/2x_Shipping-035c1f0171eef6760dd7755a7c0857c9.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Simple Shipping</h2>
    <p>Each label comes prepaid and pre-addressed. All you need to do is print it, package it, and get it to USPS</p>
    
  </div>
</div >
<div className="card w-96 bg-base-100 m-5 shadow-xl">
  <figure><img src="https://d2gjrq7hs8he14.cloudfront.net/webpack4/2x_QuickCash-c8ea181d8ecb771e074c472426ec8374.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Quick Cash</h2>
    <p>List an item in just a few clicks from any device.</p>
    
  </div>
</div>
<div className="card w-96 bg-base-100 m-5 shadow-xl">
  <figure><img src="https://d2gjrq7hs8he14.cloudfront.net/webpack4/2x_Community-c56d63b38f8dd34ea5209995183ab2d3.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Growing Community</h2>
    <p>Join our vibrant community of 80+ million Poshers who make shopping and selling simple, social, and sustainable!</p>
    
  </div>
</div>
        </div>

        </div>
    );
};

export default Home;
