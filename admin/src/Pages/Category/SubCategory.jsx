import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { IoAdd, IoCloudDownloadOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import { MyContext } from '../../App';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


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

const SubCategory = () => {
  const { setProductDrawer } = useContext(MyContext);
   const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Man' },
    { key: 1, label: 'Women' },
    { key: 2, label: 'Kids' },
   
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <div className=" border rounded-md p-4 flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Sub Category</h2>
        <div className="flex flex-wrap gap-2">
          <Button variant="outlined">
            <IoCloudDownloadOutline className="mr-1" /> Export
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setProductDrawer({
                open: true,
                model: 'Add Sub A Category ',
              });
            }}
          >
            <IoAdd className="mr-1" /> Add Sub Category
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
              <th className="p-2 border">Name</th>
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
                      src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
                      alt="product"
                      className="h-16 w-16 rounded-full max-w-xs object-cover"
                    />
                  </div>
                </td>
                <td>
                  <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        bgcolor: 'transparent', // ✅ removes background color
        boxShadow: 'none', 
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
               </Paper>
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

export default SubCategory;
