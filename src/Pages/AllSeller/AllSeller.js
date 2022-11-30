import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllSellerCard from '../../components/AllSellerCard/AllSellerCard';




const AllSeller = () => {

    const {data:users =[],refetch} = useQuery({
        queryKey:['users'],
        queryFn : ()=> fetch('https://b612-used-products-resale-server-side-inky.vercel.app/users')
        .then(res=>res.json())
    })
    console.log(users);
    const handleVerify = id =>{
      console.log('verifying',id)
               const proceed =window.confirm('want to verify') ;
               if(proceed) {
                  fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/users/${id}`,{
                      method: 'PUT'})
                  .then(res=>res.json())
                  .then(data=>{
                      console.log(data);
                    refetch()})}}
    
    
    return (
        <div>
            <div className="overflow-x-auto ">
  <table className="table w-full ">
    
    <thead>
      <tr>
        
        <th>Name</th>
        <th >Email</th>
        <th>Role</th>
        <th>Action</th>
        <th>Verification</th>
      </tr>
    </thead>
    <tbody>{
                users.map(user =><AllSellerCard 
                    key={user._id}
                user={user}
                handleVerify={handleVerify}
                ></AllSellerCard>)
                
                    
            }</tbody>

        
            
           </table>   
        </div>
        </div>
    );
};

export default AllSeller;