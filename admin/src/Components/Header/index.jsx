import React, { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { FaRegBell } from "react-icons/fa";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import { CgProfile } from "react-icons/cg";
import Sidebar from '../Sidebar'; 

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarClose, setSidebarClose] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
     
      <Sidebar isOpen={sidebarOpen} />
      <header className="w-full h-16 fixed overflow-hidden  bg-gray-100 flex justify-between items-center px-4 sm:pl-80 pr-7 shadow-md">
        <div className="part1">
         
          <Button
            className="!rounded-full !text-gray-900 !text-3xl sm:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <HiMenuAlt1 />
          </Button>
        </div>

        <div className="part2 flex items-center gap-4">
          <Badge badgeContent={4} color="success">
            <FaRegBell size={25} stroke="0.5" color="gray" />
          </Badge>
          <IoSettingsOutline color="gray" size={25} />
          <Avatar
            onClick={handleClick}
            className="cursor-pointer"
            alt="User"
            src="./thumb-1.jpg"
          />

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <div className="flex justify-between items-center leading-5">
                <div>
                  <Avatar sx={{ width: 40, height: 40, marginRight: 1 }} src="./thumb-1.jpg" />
                </div>
                <div>
                  <p>Angelina Gotelli</p>
                  <span className="text-gray-500">admin-01@ecme.com</span>
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <CgProfile />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IoSettingsOutline />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <IoLogOutOutline />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </header>
    </>
  );
};

export default Header;
