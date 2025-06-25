
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCloudUpload } from "react-icons/io5";
import UploadBox from '../ProductPage/UploadBox';




const AddCategory = () => {

  return (
    <section className="py-3 px-8 ">
      <form className="">
       <div className="grid grid-cols-1 gap-5 scroll max-h-[500] mb-3 text-black">
        
        {/* Media Upload */}
       <div className="col w-full p-5 px-0">
        <h3 className='font-[700] text-[18px] mb-3 '>Media & Image</h3>
       <div className="grid grid-cols-7 gap-4">
         <div className="uploadWrapper relative">
          <span className='absolute z-50 w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center flex-col '><IoMdClose className='text-white cursor-pointer'/></span>
          <div className="p-0 border border-dashed
          rounded-md overflow-hidden border-[rgba(0,0,0,0.3)]
           h-[150px]  w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
       <LazyLoadImage
       className='object-contain w-full h-full'
        alt={'image'}
        effect="blur"
      src={'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp'} />
        </div> 
         </div>
        <UploadBox multiple={true}/>
       </div>
       </div>
       <br />
       
       </div>
       <Button variant='contained' size='large' fullWidth className='!flex gap-4 '><IoCloudUpload size={20}/>Publish And View</Button>
      </form>
    </section>
  );
};

export default AddCategory;
