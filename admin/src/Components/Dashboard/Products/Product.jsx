import React, { createContext, useContext } from 'react';
import Button from '@mui/material/Button';
import { GoSearch } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IoAdd, IoCloudDownloadOutline } from 'react-icons/io5';
import Checkbox from '@mui/material/Checkbox';
import Progress from './Progress';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { MyContext } from '../../../App';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Product = () => {
    const { setProductDrawer } = useContext(MyContext);

  return (
    <div className="main bg-white border rounded-md p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Products</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outlined">
            <IoCloudDownloadOutline className="mr-1" /> Export
          </Button>
 <Button
        variant="contained"
        onClick={() => {
          console.log("Opening modal"); // ✅ debug log
          setProductDrawer({
            open:true,
            model:'AddProduct',});
        }}
      >
        <IoAdd className="mr-1" /> Add products
      </Button>            
        </div>
      </div>

      {/* Category Selector */}
      <div className="category flex flex-col gap-2">
        <h1 className="font-medium">Category</h1>
        <Autocomplete
          disablePortal
          options={['None', 'Women', 'Men', 'Kid']}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>

      {/* Search and Filter */}
      <div className="flex flex-wrap items-center gap-3 bg-gray-100 rounded-md px-3 py-2 w-full">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent focus:outline-none text-sm"
        />
        <GoSearch className="text-gray-500 text-xl" />
        <Button variant="outlined">
          <CiFilter className="text-2xl mr-1" /> Filter
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow-sm border-gray-200">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="p-2 border"><Checkbox {...label} /></th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">SubCategory</th>
              <th className="p-2 border">Sales</th>
              <th className="p-2 border">SubTotal</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>

          {[1, 2, 3, 4].map((_, i) => (
            <tbody key={i} className="text-center hover:bg-gray-100">
              <tr>
                <td><Checkbox {...label} /></td>
                <td className="flex justify-center">
                  <img
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/130-home_default/customizable-mug.jpg"
                    alt="product"
                    className="h-14 w-14 object-contain"
                  />
                </td>
                <td>Jugs</td>
                <td>Silver Jugs</td>
                 <td>
                 <div className="flex justify-center items-center h-full">
                   <Progress value={90} type="error" />
                 </div>
               </td>
                <td>
                  <p className="line-through text-gray-600">$999</p>
                  <h1>$499</h1>
                </td>

                <td>
                  <div className="flex justify-center items-center gap-2 h-full">
                    <Button className="!rounded-full !min-w-0 !p-2 !bg-gray-300 !text-gray-700" aria-label="Hide">
                      <FaRegEyeSlash />
                    </Button>
                    <Button className="!rounded-full !min-w-0 !p-2 !bg-blue-500 !text-white" aria-label="Edit">
                      <MdOutlineEdit />
                    </Button>
                    <Button className="!rounded-full !min-w-0 !p-2 !bg-red-500 !text-white" aria-label="Delete">
                      <MdDelete />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" />
        </Stack>
      </div>
    </div>
  );
};

export default Product;
