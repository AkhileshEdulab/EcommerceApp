
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";

import { FiLogIn } from "react-icons/fi";
import {  PiUserCirclePlusLight } from "react-icons/pi";
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';

  const VerifyOtp = () => {
   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
   const inputRefs = useRef([]);
   const handleChange = (index, event) => {
     const value = event.target.value;
     if (/^\d?$/.test(value)) {
       let newOtp = [...otp];
       newOtp[index] = value;
       setOtp(newOtp);
       if (value && index < 5) {
         inputRefs.current[index + 1].focus();
       }
     }
   };
   const handleKeyDown = (index, event) => {
     if (event.key === "Backspace" && !otp[index] && index > 0) {
       inputRefs.current[index - 1].focus();
     }
   };
   const handleSubmit = () => {
     if (otp.join("").length === 6) {
       toast.success("OTP Verified Successfully!");
     } else {
       toast.error("Please enter a valid 6-digit OTP");
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
           <img src='http://localhost:5174/security.png' className='h-20 w-20 bg-gray-200 rounded-full '/> 
          </div>
          <div className="text-center text-4xl font-bold">
           Welcome back!
            <p className=" mt-3">Please verify your email</p>
          </div>
<p className="text-gray-600 mb-4 text-center">Otp send to <span className="text-green-500 font-[600]"> Akhilesh@gmail.com</span></p>
        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-500"
              value={digit}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
            />
          ))}
        </div>
        <Button className="w-full" variant="contained" color="success" onClick={handleSubmit}>
          Verify OTP
        </Button>
         
        </form>
      </div>
    </section>
  );
};

export default VerifyOtp;
