import React from 'react';

const Progress = (props) => {
  return (
    <div className='w-[100px] h-[8px] rounded-md bg-gray-400 overflow-hidden'>
      <span
        className={`flex items-center h-full ${
            props.type === 'success'? 'bg-green-600'
            : props.type === 'error'? 'bg-pink-600'
            : props.type === 'warning'
            ? 'bg-yellow-500'
            : 'bg-gray-500'
        }`}
        style={{ width: `${props.value}%` }}
      ></span>
    </div>
  );
};

export default Progress;
