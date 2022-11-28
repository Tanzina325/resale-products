import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyerCard = ({user}) => {
    const{name,role,email}=user;
    const {data:users =[]} = useQuery({
        queryKey:['users',role],
        queryFn : ()=> fetch(`https://b612-used-products-resale-server-side-inky.vercel.app/users?role=${role==='buyer'}`)
        .then(res=>res.json())
    })
    console.log(users);
    return (
        <>
            
             {role==='buyer' ?
            
            <tr>
      
      <td>{ name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
    
       
       :''}
</>
        
    );
};

export default AllBuyerCard;