
import React from 'react';

const AllBuyerCard = ({user,handleDelete}) => {
    const{name,role,email,_id}=user;
    
    return (
        <>
            
             {role==='buyer' ?
            
            <tr>
      
      <td>{ name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td><button onClick={()=>handleDelete(_id)} className='btn btn-primary'>Delete</button></td>
    </tr>
    
       
       :''}
</>
        
    );
};

export default AllBuyerCard;