import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import useSeller from '../../components/Hooks/useSeller';
// import useAdmin from '../../components/Hooks/useAdmin';
import Loader from '../../components/Loader/Loader';

import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SellerRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isSeller] =useSeller(user?.email)
    const location = useLocation();

    if(loading){
        return <Loader></Loader> 
    }

    if(user && isSeller){
       return children;
    }
    return <Navigate to ='/login' state={{from:location}} replace></Navigate>
        
    
};

export default SellerRoute;