import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const DashboardLayout = () => {
    const {user}=useContext(AuthContext);
    const[currentUser,setCurrentUser]=useState({});

    useEffect(()=>{
              fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/users/${user?.email}`)
              .then(res=>res.json())
              .then(data=>setCurrentUser(data))
              },[user?.email]);
              console.log(currentUser)
    return (
        <div>
         <Header></Header>
         <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
       {currentUser.role==='seller' ? 
      <>
      <li><Link to='/dashboard/addaphone'>Add a product </Link></li>
      <li><Link to='/dashboard/myproducts'>My product</Link></li>
      </> : currentUser.role==='admin' ? 
      <>
      <li><Link to='/dashboard/allbuyers'>All buyers </Link></li>
      <li><Link to='/dashboard/allsellers'>My sellers</Link></li>
      </> : <li><Link to='/dashboard/myorders'>My orders </Link></li>} 
      
      
    </ul>
  
  </div>
</div> 
          <Footer></Footer>    
        </div>
    );
};

export default DashboardLayout;