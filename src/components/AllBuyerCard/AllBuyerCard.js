
import React from 'react';

const AllBuyerCard = ({user}) => {
    const{name,role,email}=user;
    
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