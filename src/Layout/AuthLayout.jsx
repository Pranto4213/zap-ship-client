import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../Extra/Logo';
import authImage from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto h-200'>
            <div className="text-black font-bold flex justify-start">
                <Logo ></Logo>
            </div>
            <div className="flex items-center mx-auto w-11/12">
                <div className="flex-1 "><Outlet></Outlet></div>
                 <div className="flex-1">
        <img src={authImage} alt="AuthImage" />
        </div>
                </div>
        </div>
    );
};

export default AuthLayout;