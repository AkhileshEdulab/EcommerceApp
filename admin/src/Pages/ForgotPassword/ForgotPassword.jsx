

import  { useState } from 'react';
import { FiLogIn } from "react-icons/fi";
import {  PiUserCirclePlusLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, NavLink } from 'react-router-dom';


const ForgotPassword = () => {
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
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
          className="w-full max-w-2xl  p-8 rounded-xl flex flex-col gap-10"
        >
          <div className="flex justify-center">
           <img src='http://localhost:5173/hand.avif' className='h-20 w-20 bg-gray-200 rounded-full '/> 
          </div>
          <div className="text-center text-4xl font-bold">
           Having trouble to sign in?
            <p className=" mt-3">Reset your password.</p>
          </div>

         
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
           
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="contained" size='large' color="primary" fullWidth className='!capitalize'>
            Reset Password
          </Button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-500 font-serif">
           Don’t want to reset? {' '}
            <Link to="/sign-up" className="hover:text-blue-600 text-black hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
