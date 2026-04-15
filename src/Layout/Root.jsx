import React from 'react';
import { Outlet } from 'react-router';
import Home from '../Pages/Home';
import Footer from '../Pages/Footer';
import Nav from '../Extra/Nav';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;