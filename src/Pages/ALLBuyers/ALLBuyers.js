import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBuyerCard from '../../components/AllBuyerCard/AllBuyerCard';



const ALLBuyers = () => {

    const {data:users =[],buyer} = useQuery({
        queryKey:['users'],
        queryFn : ()=> fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/users?role=${buyer}`)
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