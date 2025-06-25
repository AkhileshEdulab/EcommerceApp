
import React, { useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '@mui/material/Button';
import { IoCloudUpload } from "react-icons/io5";

import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}




const AddSubCategory = () => {
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <section className="py-3 px-8 ">
      <form className="">
       <div className="grid grid-cols-1 gap-5 scroll max-h-[500] mb-3 text-black">
        
        {/* Media Upload */}
       <div className="col w-full p-5 px-2">
        <h3 className='font-[700] text-[18px] mb-3 '>Add A Sub Category</h3>
       <div className='flex flex-col gap-5'>
      <FormControl className='w-[40%]'>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField className='!w-[40%]' id="outlined-basic" label="Outlined" variant="outlined" />

    </div>
       </div>
       <br />
       </div>
       <Button variant='contained' size='large' fullWidth className='!flex gap-4 !w-[40%] '><IoCloudUpload size={20}/>Publish And View</Button>
      </form>
    </section>
  );
};

export default AddSubCategory;
