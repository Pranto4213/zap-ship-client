import React, { use } from 'react';
import Logo from '../Extra/Logo';
import { useForm } from 'react-hook-form';
import { pattern } from 'framer-motion/client';
import UseAuth from '../Hooks/UseAuth';
import GoogleSignIn from '../Extra/GoogleSignIn';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';

const Resister = () => {

  const { resisterUser, updateProfile } = UseAuth()
  const location = useLocation()
  console.log('location from resister', location)
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()



  const handleResister = (data) => {

    const profileImg = data.photo[0]

    resisterUser(data.email, data.password)
      .then(res => {
        console.log(res.user)

        const formData = new FormData();
        formData.append('image', profileImg)
        const image_APi_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`
        axios.post(image_APi_URL, formData)
          .then(res => {
            console.log('after img upload', res.data.data.url)

            const userProfile = {
              displayName: data.name,
              photoURL: res.data.data.url
            }
            updateProfile(userProfile)
              .then(() => {
                console.log('profile updated')
                navigate(location?.state || '/')
              })
              .catch(err => console.log(err))
          })

      }
      )
      .then(data => console.log(data))
  }

  return (
    <div className='bg-base-100 p-6 rounded-xl'>
      <h1 className='text-4xl font-bold'>Welcome Back</h1>
      <p>Login with ZapShift</p>
      <form onSubmit={handleSubmit(handleResister)}>
        <fieldset className="fieldset">


          <label className="label">Photo</label>
          <input type="file" {...register('photo', { required: true })} className="file-input" placeholder="Photo" />
          {errors.photo?.type === "required" && <p className='text-red-600'>photo is req</p>}



          <label className="label">Name</label>
          <input type="text" {...register('name', { required: true })} className="input" placeholder="name" />
          {errors.name?.type === "required" && <p className='text-red-600'>name is req</p>}



          <label className="label">Email</label>
          <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />
          {errors.email?.type === "required" && <p className='text-red-600'>Email is req</p>}


          <label className="label">Password</label>
          <input type="password" {...register('password', { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/ })} className="input" placeholder="Password" />
          {errors.password?.type === "pattern" && <p className='text-red-600'>Password হতে হবে:

            কমপক্ষে 8 character,
            অন্তত 1টা ছোট হাতের letter (a-z),
            অন্তত 1টা বড় হাতের letter (A-Z),
            অন্তত 1টা সংখ্যা (0-9)</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Resister</button>
        </fieldset>
      </form>
      <p>Already have an account? <Link state={location.pathname} className='text-blue-600 underline text-xl' to={'/logIn'}> Login </Link></p>
      <div className="divider">OR</div>
      <GoogleSignIn></GoogleSignIn>
    </div>
  );
};

export default Resister;