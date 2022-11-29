import React from 'react';

const AllSellerCard = ({user}) => {
    const{name,role,email}=user;
    
    return (
        <>
            
             {role==='seller' ?
            
            <tr>
      
      <td>{ name}</td>
      <td>{email}</td>
      <td>{role}</td>
    </tr>
    
       
       :''}
</>
        
    );
};

export default AllSellerCard;