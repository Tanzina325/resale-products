import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const AddAPhone = () => {

  const {data:categories =[]} = useQuery({
    queryKey:['categories'],
    queryFn : ()=> fetch('https://b612-used-products-resale-server-side-inky.vercel.app/phones')
    .then(res=>res.json())
})
    const[product,setProduct]=useState({})
// const[phoneCategory,setPhoneCategory]=useState[{}]

//     useEffect(()=>{
//       fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/phones?category=${categories?.category}`)
//       .then(res=>res.json())
//       .then(data=>setPhoneCategory(data))
//       },[categories?.category,setPhoneCategory]);
//       console.log(phoneCategory)
    const handleAddPhone =event =>{
        event.preventDefault();
        console.log(product);

        fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/phones/${categories?.category}`,{
        method: 'PUT',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify([product])
        })
      .then(res=>res.json())
      .then(data=>console.log(data))
        }

const handleInputBlur = event =>{
    const field= event.target.name;
    const value =event.target.value;
    
    const newProduct={...product}
    newProduct[field] =value;
    setProduct(newProduct)
}

    return (
        <div>
         <div className="hero  bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add a Phone!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleAddPhone}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Title of phone</span>
          </label>
          <input onBlur={handleInputBlur} type="text"name='title' placeholder="title of service" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='picture'placeholder="photo URL" className="input input-bordered" />
          
        </div> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details of phone</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='details'placeholder="Details " className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='location'placeholder="location" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Original Price  </span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='original-price'placeholder="Original price" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> category  </span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='category' placeholder="category" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button type='submit'className="btn btn-primary">Add phone</button>
        </div>   
        </form> 
        </div>
        </div>
      
    </div>
  </div>
  
</div>
    );
};

export default AddAPhone;