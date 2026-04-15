import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {
 
    const {user, loading}= UseAuth()
  if(loading){
    return <div className='w-full h-full flex items-center'>
<span className="loading loading-dots loading-xl"></span>
    </div>;
  }
  if(!user){
    return <Navigate to={'/logIn'}></Navigate>
  }
 
    return children;
};

export default PrivetRoute;