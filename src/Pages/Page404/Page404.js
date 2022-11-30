import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://rcsdigital.com.au/wp-content/uploads/2017/12/404-errors.png" alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">OOPS!</h2>
    <p>This page is not found.go to home page.</p>
    <div className="card-actions justify-end">
      <Link to='/home'><button className="btn btn-primary">Home</button></Link>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Page404;