import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {
  const{user,logOut}=useContext(AuthContext);
  const navigate =useNavigate();
  
  const handleLogOut =()=>{
    logOut()
    .then(()=>{
      navigate('/')
    })
    .then(error=>console.error(error))
    
  }
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        
        <li><Link to='/blogs'>Blogs</Link></li>
        
        {
              user?.uid ?
              <>
              <li><Link to='/services/add'>Add Service</Link></li>
              <li><Link to='/myreviews'>My reviews</Link></li>
              <div className='ml-4'><button onClick={handleLogOut} >Logout</button></div>
              
              </>
              :
              <>
              <li><Link to='/login'>LogIn</Link></li>
              <li><Link to='/register'>Sign Up</Link></li>
              </>}
      </ul>
    </div>
    <Link to='' className="btn btn-ghost normal-case text-xl">Reused Mobile Phones</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blogs'>Blogs</Link></li>
    {
              user?.uid ?
              <>
              <li><Link to='/services/add'>Add Service</Link></li>
              <li><Link to='/myreviews'>My reviews</Link></li>
              <div className='my-3'><button onClick={handleLogOut} >Logout</button></div>
              
              </>
              :
              <>
              <li><Link to='/login'>LogIn</Link></li>
              <li><Link to='/register'>Sign Up</Link></li>
              </>}
    
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;