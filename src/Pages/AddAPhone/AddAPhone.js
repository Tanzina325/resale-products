// import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const AddAPhone = () => {

  const postTime =new Date();
    const[product,setProduct]=useState({})
    const{user}=useContext(AuthContext)
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
      const sellerName =`${user?.displayName}`
        fetch('https://b612-used-products-resale-server-side-inky.vercel.app/products',{
        method: 'POST',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify({...product,sellerName,postTime})
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
          <h1 className="text-5xl text-center font-bold">Add a Phone!</h1>
         <div className="hero w-full bg-base-200">
  <div className="hero-content w-full ">
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add a Phone!</h1> */}
      
    {/* </div> */}
    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleAddPhone}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Title of phone</span>
          </label>
          <input onBlur={handleInputBlur} type="text"name='name'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='picture' className="input input-bordered" required />
          
        </div> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Details of phone</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='details' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input onBlur={handleInputBlur} type="text" name='location' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Original Price  </span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='original-price' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Resale Price  </span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='resale-price' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Years of use  </span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='years-of-use' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Years of purchage  </span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='years-of-purchage' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Mobile number  </span>
          </label>
          <input  onBlur={handleInputBlur} type="text" name='mobile number' className="input input-bordered" required />
          
        </div>
        <div className="form-control ">
<label className="label">
            <span className="label-text">Choose category</span>
          </label>
<input onBlur={handleInputBlur} type="text" name="category" list="roleList"  className="input input-bordered" required />
    <datalist id="roleList">
        <option value="SAMSUNG GALAXY" />
        <option value="VIVO" />
        <option value="OPPO" />
        
    </datalist>
    
</div>
<div className="form-control ">
<label className="label">
            <span className="label-text">Choose condition type</span>
          </label>
<input onBlur={handleInputBlur} type="text" name="condition-type" list="rolesList"  className="input input-bordered" required />
    <datalist id="rolesList">
        <option value="excellent" />
        <option value="good" />
        <option value="fair" />
        
    </datalist>
    
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