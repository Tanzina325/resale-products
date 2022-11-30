import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllBuyerCard from '../../components/AllBuyerCard/AllBuyerCard';



const ALLBuyers = () => {

    const {data:users =[],refetch} = useQuery({
        queryKey:['users'],
        queryFn : ()=> fetch('https://b612-used-products-resale-server-side-inky.vercel.app/users')
        .then(res=>res.json())
    })
    console.log(users);
    const handleDelete = id =>{
      console.log('deleting',id)
               const proceed =window.confirm('want to delete') ;
               if(proceed) {
                  fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/users/${id}`,{
                      method: 'DELETE'})
                  .then(res=>res.json())
                  .then(data=>{
                      console.log(data);
                      refetch()
      
      
  })}}
    
    
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
                handleDelete={handleDelete}
                ></AllBuyerCard>)
                
                    
            }</tbody>

        
            
           </table>   
        </div>
        </div>
    );
};

export default ALLBuyers;