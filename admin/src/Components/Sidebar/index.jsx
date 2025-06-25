
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown,FaHome, FaUser } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { IoBagCheck,IoLogOut } from 'react-icons/io5';
import { MdCategory, MdDashboardCustomize } from 'react-icons/md';

const Sidebar = ({ isOpen }) => {
  const [showProducts, setShowProducts] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showHomeBanner, setHomeBanner] = useState(false);
  

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } sm:block w-[65%] sm:w-[20%] fixed top-0 bottom-0 h-full bg-white flex flex-col items-center py-6 shadow-md z-50`}
    >
      <div className="logo font-bold text-2xl text-gray-800 flex justify-center mb-6">
        Welcome Back 😊
      </div>

      <ul className="w-full px-6 flex flex-col gap-2">
        <li>
          <Button
            fullWidth
            className="!text-gray-600 !text-[18px] !flex gap-3 !justify-start"
            startIcon={<MdDashboardCustomize />}
          >
            Dashboard
          </Button>
        </li>

        <li>
          <Button
            fullWidth
            onClick={()=> setHomeBanner(!showHomeBanner)}
            className="!text-gray-600 !text-[18px] !flex gap-3 !justify-start"
            startIcon={<FaHome />}
             endIcon={<FaAngleDown className={`transition-transform duration-300 ${ showHomeBanner ? 'rotate-180':'rotate-0'}` }/>}>
            Home Slide
          </Button>
          {showHomeBanner &&(
            <ul className='ml-8 mt-2 flex flex-col gap-1'>
                <li>
                    <Button className='!text-gray-500 !text-sm '>Home Banner List</Button>
                </li>
                 <li>
                    <Button className='!text-gray-500 !text-sm'>Add Home Banner Slide</Button>
                </li>
            </ul>
          )}
        </li>

       
        <li>
          <Button
            fullWidth
            onClick={() => setShowProducts(!showProducts)}
            className="!text-gray-600 !text-[18px] !flex gap-3 !justify-start "
            startIcon={<AiFillProduct />}
            endIcon={<FaAngleDown className={`transition-transform duration-300 ${ showProducts?'rotate-180':'rotate-0'}`}/>}
          >
            Products
          </Button>
          {showProducts && (
            <ul className="ml-8 mt-2 flex flex-col gap-1">
              <li>
                <Button fullWidth className="!text-gray-500 !text-sm !justify-start">
                  All Products
                </Button>
              </li>
              <li>
                <Button fullWidth className="!text-gray-500 !text-sm !justify-start">
                  Add Product
                </Button>
              </li>
            </ul>
          )}
        </li>

        <li>
            <Button fullWidth className='!text-gray-600 !text-[18px] !flex gap-3 !justify-start' startIcon={<FaUser/>}>User</Button>
        </li>
        <li>
          <Button
            fullWidth
            className="!text-gray-600 !text-[18px] !flex gap-3 !justify-start"
            startIcon={<IoBagCheck />}
          >
            Orders
          </Button>
        </li>


        <li>
          <Button
            fullWidth
            onClick={() => setShowCategories(!showCategories)}
            className="!text-gray-600 !text-[18px] !flex gap-3 !justify-start "
            startIcon={<MdCategory />}
            endIcon={<FaAngleDown className={`transition-transform duration-300 ${showCategories?'rotate-180':'rotate-0'}`}/>}
          >
            Category
          </Button>
          {showCategories && (
            <ul className="ml-8 mt-2 flex flex-col gap-1">
              <li>
                <Button fullWidth className="!text-gray-500 !text-sm !justify-start">
                  All Sub Categories
                </Button>
              </li>
              <li>
                <Button fullWidth className="!text-gray-500 !text-sm !justify-start">
                  Add Sub Category
                </Button>
              </li>
            </ul>
          )}
        </li>

       
        <li>
          <Button
            fullWidth
            className="!text-gray-600 !text-[18px] !flex gap-3 !justify-start"
            startIcon={<IoLogOut />}
          >
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
