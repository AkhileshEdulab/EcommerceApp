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

// ActionButtons Component
const ActionButtons = () => (
  <div className="flex justify-center items-center gap-2 h-full">
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

const HomeBannerList = () => {
  const { setProductDrawer } = useContext(MyContext);

  return (
    <div className="bg-white border rounded-md p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Home Slider Banner List</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outlined">
            <IoCloudDownloadOutline className="mr-1" /> Export
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setProductDrawer({
                open: true,
                model: 'Home Banner Slide',
              });
            }}
          >
            <IoAdd className="mr-1" /> Add products
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="">
        <table className="bg-white border w-full rounded-md shadow-sm border-gray-200">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="p-2 border"><Checkbox {...label} /></th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockBannerData.map((_, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td className="text-center">
                  <Checkbox {...label} />
                </td>
                <td className="py-4">
                  <div className="flex justify-center">
                    <img
                      src="https://influencermarketinghub.com/wp-content/uploads/2021/03/thegem.jpg"
                      alt="product"
                      className="h-28 w-full max-w-xs object-contain"
                    />
                  </div>
                </td>
                <td>
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

export default HomeBannerList;
