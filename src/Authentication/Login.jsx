import React from 'react';

import Logo from '../Extra/Logo';
import { useForm } from 'react-hook-form';
import { data, Link } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import GoogleSignIn from '../Extra/GoogleSignIn';
const Login = () => {

    const {signInUser} = UseAuth()
    const {register, handleSubmit} = useForm()

    const handleLogin = (data) => {
        console.log(data)
        signInUser(data.email, data.password)
        .then(result => console.log(result.user))
        .then(data=> console.log(data))

    }



    return (
         <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
     <h1 className='text-4xl font-bold'>Create an Account</h1>
             <p>Register with ZapShift</p>
        <form onSubmit={handleSubmit(handleLogin)} class="fieldset">
          <label class="label">Email</label>
          <input type="email" {...register('email')} class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input type="password" {...register('password')} class="input" placeholder="Password" />
          <div><a class="link link-hover">Forgot password?</a></div>
          <button class="btn btn-neutral mt-4">Login</button>
        </form>
         <p>Already have an account? <Link className='text-blue-600 underline text-xl' to={'/resister'}> Resister </Link></p>
        <div className="divider">OR</div>
        <GoogleSignIn></GoogleSignIn>
      </div>
      
    );
};

export default Login;