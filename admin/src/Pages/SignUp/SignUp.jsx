

import React, { useState } from 'react';
import { FiLogIn } from "react-icons/fi";
import { PiFolderLockThin, PiUserCirclePlusLight } from "react-icons/pi";
import { MdEmail, MdLockOutline } from "react-icons/md";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link, NavLink } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { PiFolderLockBold } from "react-icons/pi";
import { FaFacebook } from 'react-icons/fa';


const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Submitting:', formData);
      // Proceed with auth API call
    }
  };

  return (
    <section className="min-h-screen bg-gray-100">
    
      <div className="flex justify-between items-center px-6 sm:px-10 py-6 ">
        <div className="flex items-center gap-2">
          <img src="./hand.avif" className="h-10 w-10 rounded-full" alt="logo" />
          <h1 className="text-xl font-bold">Akhil Technical</h1>
        </div>
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <NavLink
  to="/sign-in"
  end
  className={({ isActive }) =>
    `flex items-center gap-1 px-3 py-2 rounded-full transition ${
      isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 text-gray-700'
    }`
  }
>
  <FiLogIn size={20} />
  Login
</NavLink>

<NavLink
  to="/sign-up"
  end
  className={({ isActive }) =>
    `flex items-center gap-1 px-3 py-2 rounded-full transition ${
      isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 text-gray-700'
    }`
  }
>
  <PiUserCirclePlusLight size={20} />
  Sign Up
</NavLink>

        </div>
      </div>

      <div className="flex justify-center items-center px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl  p-8 rounded-xl flex flex-col gap-8"
        >
          <div className="flex justify-center">
           <PiFolderLockBold  size={50} className='bg-gray-200 rounded-full p-2'/> 
          </div>
          <div className="text-center text-4xl font-bold">
           Join us today! Get special
            <p className=" mt-1"> benefits and stay up-to-date.</p>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outlined" color="success" fullWidth className='!capitalize !flex !gap-2'><FcGoogle size={20}/>
              Sign in with Google
            </Button>
            <Button variant="outlined" color="primary" fullWidth className='!capitalize !flex !gap-2'><FaFacebook  size={20}/>
              Sign in with Facebook
            </Button>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm">or sign in with email</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Email & Password */}
          <div className="flex flex-col gap-4">
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              size="large"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdEmail />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              size="large"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdLockOutline />
                  </InputAdornment>
                )
              }}
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex  items-center gap-2">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  name="rememberMe"
                  size="small"
                />
              }
            />
            By signing up you have agreed to our
            <Link to="/" className="hover:text-blue-400 font-semibold hover:underline">
              Terms
            </Link> & 
             <Link to="/" className="hover:text-blue-400 font-semibold hover:underline">
              Privacy Policy
            </Link>
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Account
          </Button>

          {/* Sign Up Link */}
          <p className="text-center font-semibold text-gray-600">
           Don’t have an account? {' '}
            <Link to="/sign-in" className="hover:text-blue-400 text-black hover:underline"> Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
