
import  { useState } from 'react';
import { FiLogIn } from "react-icons/fi";
import {  PiUserCirclePlusLight } from "react-icons/pi";
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, NavLink } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { GiKeyLock } from "react-icons/gi";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const changePassword = () => {
const [showChangePassword,setshowChangePassword]=useState(false);
const [showNewPassword,setShowNewPassword]=useState(false);


const handleShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpNewPassword = (event) => {
    event.preventDefault();
  };
 
  
const handleClickShowPassword = () => setshowChangePassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.newPassword) newErrors.newPassword = 'newPassword is required';
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
           <GiKeyLock  className='h-20 w-20 bg-gray-200 rounded-full  object-content'/> 
          </div>
          <div className="text-center text-4xl font-bold">
          You Can Change Your ?
            <p className=" mt-3">Password Here.</p>
          </div>

         
          <div className="flex flex-col gap-4">
            <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showNewPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showNewPassword ? 'hide the password' : 'display the password'
                  }
                   onClick={handleShowNewPassword}
                  onMouseDown={handleMouseDownNewPassword}
                  onMouseUp={handleMouseUpNewPassword}
                  edge="end"
                 
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="New Password"
          />
        </FormControl>

         <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Change Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showChangePassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showChangePassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showChangePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Change Password"
          />
        </FormControl>
           
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="contained" size='large' color="primary" fullWidth className='!capitalize'>
            Change Password
          </Button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-500 font-serif">
           Don’t want to change? {' '}
            <Link to="/sign-up" className="hover:text-blue-600 text-black hover:underline">Sign In</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default changePassword;
