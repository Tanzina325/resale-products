import React, { useContext, useEffect, useState } from 'react';
import OrderCard from '../../components/OrderCard/OrderCard';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyOrder = () => {
    const {user}=useContext(AuthContext);
    

    const[bookings,setBookings]=useState([])

    useEffect(()=>{
      fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/bookings?email=${user?.email}`)
      .then(res=>res.json())
      .then(data=>{
        setBookings(data);
        }
      )
      },[user?.email]);
      
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-10'>
            
            {bookings.map(booking=><OrderCard key={booking._id}
                booking={booking}
                
              
                ></OrderCard>)}
        </div>
        </div>
    );
};

export default MyOrder;