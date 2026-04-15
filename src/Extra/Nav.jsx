import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
const Nav = () => {
const {user, logOut} = UseAuth()
    const links = <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/services'}>Services</NavLink>
    <NavLink to={'/coverage'}>Coverage</NavLink>
    </>


const handleLogOut =()=>{
  logOut()
  .then(res=>console.log(res.user))
  .then(data=>console.log(data))

}


    return (
       <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start flex  justify-between w-full">
    
    <div className="flex  justify-center items-center">
            <img src={logo} alt="logo" />
            <h1 className='text-2xl font-semibold -ms-4 mt-2'>ZapShift
    </h1>
    
        </div>
 
 
 
 <div className="dropdown  md:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-3">
        {links}
        <NavLink   to={'/resister'}>Resister</NavLink>
    <NavLink to={'/logIn'}>Log In</NavLink>
    
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden md:flex ">
    <ul className="menu menu-horizontal px-1 flex justify-center  gap-3">
      {links}
    </ul>
  </div>
  {user?.email}
  <div className="navbar-end md:flex hidden space-x-2">
   {
    user? <button onClick={handleLogOut} className='btn bg-blue-400'>Log Out</button> : <><NavLink className="btn bg-green-500 active:bg-white"  to={'/resister'}>Resister</NavLink>
    <NavLink className="btn bg-green-500" to={'/logIn'}>Log In</NavLink>
    </>
   }
   <Link to={'/'} className='btn btn-primary'>
   Be a Rider 
   </Link>
    {user?.photo}
  </div>
</div>
    );
};

export default Nav;