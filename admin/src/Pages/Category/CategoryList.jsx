import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { IoAdd, IoCloudDownloadOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import { MyContext } from '../../App';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const mockBannerData = [1, 2, 3, 4, 5];


const ActionButtons = () => (
  <div className="flex  gap-2 h-full">
    <Button
      className="!rounded-full !min-w-0 !p-2 !bg-gray-300 !text-gray-700"
      aria-label="Hide Banner"
      title="Hide Banner"
    >
      <FaRegEyeSlash />
    </Button>
    <Button
      className="!rounded-full !min-w-0 !p-2 !bg-blue-500 !text-white"
      aria-label="Edit Banner"
      title="Edit Banner"
    >
      <MdOutlineEdit />
    </Button>
    <Button
      className="!rounded-full !min-w-0 !p-2 !bg-red-500 !text-white"
      aria-label="Delete Banner"
      title="Delete Banner"
    >
      <MdDelete />
    </Button>
  </div>
);

const CategoryList = () => {
  const { setProductDrawer } = useContext(MyContext);

  return (
    <div className=" border rounded-md p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Category List</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outlined">
            <IoCloudDownloadOutline className="mr-1" /> Export
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setProductDrawer({
                open: true,
                model: 'Add Category ',
              });
            }}
          >
            <IoAdd className="mr-1" /> Add Category
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="">
        <table className="bg-white border w-full rounded-md shadow-md border-gray-200">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="px-2 border flex items-start"><Checkbox {...label} /></th>
              <th className="px-4 border text-start ">Image</th>
              <th className="px-4 border text-start">Name</th>
              <th className="px-4 border text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockBannerData.map((_, i) => (
              <tr key={i} className="hover:bg-gray-200 p-2">
                <td className="p-2">
                  <Checkbox {...label} />
                </td>
                <td className="px-2">
                  <div className="flex">
                    <img
                      src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
                      alt="product"
                      className="h-16 w-16 rounded-full p-2 object-cover"
                    />
                  </div>
                </td>
                <td className='px-4'>Bag</td>
                <td className='px-4'>
                  <ActionButtons />
                </td>
              </tr>
            ))}
          </tbody>
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

export default CategoryList;
