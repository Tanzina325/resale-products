import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllSellerCard from '../../components/AllSellerCard/AllSellerCard';




const AllSeller = () => {

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
        <th>role</th>
      </tr>
    </thead>
    <tbody>{
                users.map(user =><AllSellerCard 
                    key={user._id}
                user={user}
                ></AllSellerCard>)
                
                    
            }</tbody>

        
            
           </table>   
        </div>
        </div>
    );
};

export default AllSeller;