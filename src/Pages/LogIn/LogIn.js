import React from 'react';
import { useForm } from 'react-hook-form';

const LogIn = () => {
    const { register, handleSubmit } = useForm();
    const handleLogIn =data =>{
        console.log(data)
    }
    
    return (
        <div>
            <h1>LogIn</h1>
          <form onSubmit={handleSubmit(handleLogIn)}>
         
          <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
    
  </label>
  <input type="text" className="input input-bordered w-full max-w-xs" {...register("email")}  />
  <input  />
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
    
  </label>
  <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")}  />
  <input  />
</div>
<input type='submit' className='btn btn-primary' value='LogIn' />
            </form>
        </div>
    );
};

export default LogIn;