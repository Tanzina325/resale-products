import React, {  useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import { FaGoogle,FaGithub } from 'react-icons/fa'
import {  GoogleAuthProvider } from 'firebase/auth';



const SignUp = () => {
    const {createUser,providerLogin,updateUserProfile} =useContext(AuthContext);
    const navigate=useNavigate();
    const[error,setError]=useState('');
    const location =useLocation();
    const googleProvider = new GoogleAuthProvider()
    
    const from =location.state?.from?.pathname || '/';
    // const [verifyuser, setVerifyUser]= useState({});
    const handleSubmit =event =>{
        event.preventDefault();
        const form = event.target;
        const displayName =form.displayName.value;
        const photoURL =form.photoURL.value
        const email =form.email.value;
        const role =form.role.value;
        
        const password = form.password.value;
        console.log(email,password,role);
        
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            setError(error.message)
           
            const profile ={
              displayName:displayName,
              photoURL:photoURL
              
              
              
          }
          const status='unverified'
          updateUserProfile(profile)
          .then(()=>{
          saveUser(displayName,email,role,status)
          })
          .catch(error=>console.error(error))
             navigate('/')
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }


    const handleGoogleSignIn=()=>{
    
        providerLogin(googleProvider)
        .then(result=>{
          const user=result.user;
         
          const googleUser ={
            displayName:`${user.displayName}`,
            email:`${user.email}`,
            role:'buyer'
          }
          console.log(user.displayName,user.email);
          

          fetch('https://b612-used-products-resale-server-side-inky.vercel.app/users',{
        method: 'POST',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify(googleUser)
        })
      .then(res=>res.json())
      .then(data=>console.log(data))

          navigate(from,{replace:true})})
          .catch(error=>{
              console.error(error);
      });
    }
     const saveUser =(name,email,role,status)=>{
      const user ={name,email,role,status};
      fetch('https://b612-used-products-resale-server-side-inky.vercel.app/users',{
        method: 'POST',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify(user)
        })
      .then(res=>res.json())
      .then(data=>console.log(data))

     }
    return (
        <div>
           <div className="hero  bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text"name='displayName' placeholder="Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="text"name='photoURL' placeholder="photoURL" className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text"name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        
<div className="form-control ">
<label className="label">
            <span className="label-text">Choose option</span>
          </label>
<input type="text" name="role" list="roleList"  className="input input-bordered" required />
    <datalist id="roleList">
        <option value="buyer" />
        <option value="seller" />
        
    </datalist>
    
</div>
        <p>{error}</p>
        <Link to ='/register'><p>New to this website ?</p></Link>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
      <p>Try another method to login...</p>
          
          <div className='flex mx-auto'>
            <div className='p-2 text-red-600'><button className='btn btn-secondary' onClick={handleGoogleSignIn}>Sign Up with google</button></div>
           
          </div>
      </div>
      
    </div>
  </div>
  
</div>
        </div>
    );
};
export default SignUp;