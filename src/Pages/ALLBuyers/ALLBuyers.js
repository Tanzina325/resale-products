import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBuyerCard from '../../components/AllBuyerCard/AllBuyerCard';



const ALLBuyers = () => {

    const {data:users =[]} = useQuery({
        queryKey:['users'],
        queryFn : ()=> fetch('https://b612-used-products-resale-server-side-inky.vercel.app/users')
        .then(res=>res.json())
    })
    console.log(users);
    
    
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
      </tr>
    </thead>
    <tbody>{
                users.map(user =><AllBuyerCard 
                    key={user._id}
                user={user}
                ></AllBuyerCard>)
                
                    
            }</tbody>

        
            
           </table>   
        </div>
        </div>
    );
};

export default ALLBuyers;