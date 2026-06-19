import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
 
    const {user, loading}= UseAuth()
    
    const location = useLocation()

    console.log('location', location)



  if(loading){
    return <div className='w-full h-full flex items-center'>
<span className="loading loading-dots loading-xl"></span>
    </div>;
  }
  if(!user){
    return <Navigate state={location.pathname} to={'/logIn'}></Navigate>
  }
 
    return children;
};

export default PrivetRoute;