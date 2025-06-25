import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import UploadBox from './UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCloudUpload } from "react-icons/io5";

const isFeatured = [
  { label: 'Yes' },
  { label: 'No' },
];
const category = [
  { label: 'Yes' },
  { label: 'No' },
];
const subCategory = [
  { label:'None' },
    { label:'Men' },
      { label:'Women' },
  { label:'Kids'},

  
];
const productRam = [
  { label:'2GB' },
    { label:'4GB' },
      { label:'8GB' },
  { label:'16GB'},

  
];const productWeight = [
  { label:'1KG' },
    { label:'2KG' },
      { label:'3KG' },
  { label:'4KG'},

  
];
const productSize = [
  { label:'S' },
    { label:'M' },
      { label:'L' },
  { label:'XL'},

  
];



const AddProduct = () => {
  const [rating, setRating] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    setSelectedImages(imagePreviews);
  };

  return (
    <section className="py-3 px-8 ">
      <form className="">
       <div className="grid grid-cols-1 gap-5 scroll max-h-[500] mb-3 text-black">
         <h1 className="text-3xl font-semibold">Create Product</h1>

        {/* Basic Info */}
        <div className="grid grid-cols-1 gap-4">
          <TextField name="title" label="Product Title" placeholder="Enter product title" fullWidth />
          <TextField name="description" label="Description" placeholder="Enter description..." fullWidth />
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-4 gap-4">
          <TextField
           select
           name="Category" label="Category" 
            defaultValue=""
            fullWidth
          >
            {category.map((option, index) => (
              <MenuItem key={index} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
           <TextField
          select
           name="subCategory" label="Sub-Category"
            defaultValue=""
            fullWidth
          >
            {subCategory.map((option, index) => (
              <MenuItem key={index} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
         
         <TextField
        
  name="price"
  label="Price"
  type="number"
  fullWidth
  InputProps={{
    inputProps: {
      // These target the native input to hide the arrows
      inputMode: 'numeric',
      pattern: '[0-9]*',
      style: {
        MozAppearance: 'textfield',
      },
    },
  }}
  sx={{
    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  }}
/>
  <TextField
  name="old price"
  label="Old Price"
  type="number"
  fullWidth
  InputProps={{
    inputProps: {
      // These target the native input to hide the arrows
      inputMode: 'numeric',
      pattern: '[0-9]*',
      style: {
        MozAppearance: 'textfield',
      },
    },
  }}
  sx={{
    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  }}
/>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-4 gap-4">
          <TextField
            name="featured"
            select
            label="Featured"
            defaultValue=""
            helperText="Is this product featured?"
            fullWidth
          >
            {isFeatured.map((option, index) => (
              <MenuItem key={index} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField name="stock" label="Product Stock" type="number" fullWidth />
          <TextField name="brand" label="Product Brand" fullWidth />
          <TextField name="discount" label="Product Discount (%)" type="number" fullWidth />
        </div>

        {/* Specifications */}
       <div className="grid grid-cols-4 gap-4">
  <TextField
          select
           name="Product Ram" label="Product Ram"
            defaultValue=""
            fullWidth
          >
            {productRam.map((option, index) => (
              <MenuItem key={index} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
          select
           name="Product Weight" label="Product Weight"
            defaultValue=""
            fullWidth
          >
            {productWeight.map((option, index) => (
              <MenuItem key={index} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
          select
           name="Product Size" label="Product Size"
            defaultValue=""
            fullWidth
          >
            {productSize.map((option, index) => (
              <MenuItem key={index} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
  
  <div className=" ">
    <Typography component="legend">Rating</Typography>
    <Rating
      name="rating"
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
    />
  </div>
</div>


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

export default AddProduct;
