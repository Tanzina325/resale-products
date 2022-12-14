import React from 'react';

const AllSellerCard = ({user,handleVerify,handleDelete}) => {
    const{name,role,email,_id,status}=user;
    
    return (
        <>
            
             {role==='seller' ?
            
            <tr>
      
      <td>{ name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td><button onClick={()=>handleDelete(_id)} className='btn btn-primary'>Delete</button></td>
      <td> <button onClick={()=>handleVerify(_id)} className='btn btn-primary'>{status}</button></td>

    </tr>
    
       
       :''}
</>
        
    );
};

export default AllSellerCard;