import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
          <Link to={'/'} className="flex  justify-center items-center">
                    <img src={logo} alt="logo" />
                    <h1 className='text-2xl font-bold -ms-4 mt-2'>ZapShift
            </h1>
            
                </Link>
    );
};

export default Logo;