import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useBuyer from '../../components/Hooks/useBuyer';



import Loader from '../../components/Loader/Loader';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BuyerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isBuyer] =useBuyer(user?.email)
    const location = useLocation();

    if(loading){
        return <Loader></Loader> 
    }

    if(user && isBuyer){
       return children;
    }
    return <Navigate to ='/login' state={{from:location}} replace></Navigate>
        
    
};

export default BuyerRoute;