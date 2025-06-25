import React from 'react';
import { FaRegImage } from 'react-icons/fa';

const UploadBox = (props) => {
  return (
    <div className="border-2 border-dashed border-[rgba(0,0,0,0.3)] rounded-md p-3 flex flex-col relative h-[150px] w-[100%] justify-center items-center cursor-pointer hover:border-gray-500">
     <FaRegImage className='text-[40px] opacity-30 pointer-events-none'/>
     <h4 className='text-sm mt-2 text-center text-gray-500'>Image Upload</h4>
        <input
          type="file"
         multiple={props.multiple!==undefined?props.multiple:false}
          className="absolute top-0 left-0 w-full h-full z-0 opacity-0"
        />   
      </div>
  );
};

export default UploadBox;
