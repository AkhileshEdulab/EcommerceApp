
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { DemoProvider } from '@toolpad/core/internal';
import {   FaHome, FaRegUser } from 'react-icons/fa';

import { BiLogOut, BiSolidCube } from "react-icons/bi";
import { MdCategory } from 'react-icons/md';
import { IoLogOut } from 'react-icons/io5';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import { BsPersonAdd } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import Badge from '@mui/material/Badge';
import { GoBell } from 'react-icons/go';
import Button from '@mui/material/Button';
import MyContext from '../../App';
import { Link, Outlet } from 'react-router-dom';



const NAVIGATION = [
  
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'home-Slide',
    title: 'HomeSlide',
    icon: <FaHome className='!text-2xl'/>,
    children: [
      {
        segment: 'Home-Banner-List',
        title: 'Home Banner List',
        
      },
      {
        segment: 'AddHome-BannerSlide',
        title: 'Add Home Banner Slide',
        
      },
    ],
  },
  {
    segment: 'products',
    title: 'Products',
    icon: <BiSolidCube className='!text-2xl'/>,
    children:[
     { 
      segment:'all-product',
       title: 'Products List',
    },
    { 
      segment:'upload-product',
       title: 'Add Products',
    },
    ]
  },
   {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon className='!text-2xl'/>,

  },
  {
    segment: 'category',
    title: 'Category',
    icon: <MdCategory className='!text-2xl'/>,
    children:[
     { 
      segment:'category-list',
       title: ' Category List',
    },
    { 
      segment:'add-category',
       title: 'Add A Category',
    },
     { 
      segment:'sub-category',
       title: 'Sub Category',
    },
     { 
      segment:'add-a-sub-subcategory',
       title: 'Add A Sub Category',
    },
    ]
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <IoLogOut className='!text-2xl'/>,
  },
 
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 2,
        px:2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography >
      </Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function ToolbarActionsSearch() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row " alignItems="center" gap={1}>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'inline', md: 'none' },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
      />
      <ThemeSwitcher />
      <Badge overlap="circular" badgeContent=" " variant="dot" color="success">
       <GoBell color='action' fontSize={23}/>
      </Badge>
     {MyContext.isLogin === true ? (
      <div className='text-green-300'>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <img alt="Bharat Kashyap" className="h-10 w-10 rounded-full"  src="https://avatars.githubusercontent.com/u/19550456"/>
          </IconButton>
        </Tooltip>
         <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => { handleClose(); setIsLogin(false); }}>
         <img alt="Bharat Kashyap" className="h-12 w-12 rounded-full" src="https://avatars.githubusercontent.com/u/19550456"></img> 
        <div className='flex flex-col px-4'> <h1 className='font-bold'> Bharat Kashyap</h1>
         <span className='text-gray-700'>bharatkashyap@outlook.com</span></div>
        </MenuItem>
         <Divider />
        <MenuItem onClick={handleClose} className='flex gap-4'>
          <ListItemIcon  className='rounded-full bg-gray-300 p-2'><FaRegUser fontSize={23}/> </ListItemIcon>Profile 
        </MenuItem>
        <MenuItem onClick={handleClose} className='flex gap-4'>
          <ListItemIcon className='rounded-full bg-gray-300 p-2'>
            <BsPersonAdd  fontSize={23} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose} className='flex gap-4'>
          <ListItemIcon className='rounded-full bg-gray-300 p-2'>
            <CiSettings fontSize={23} />
          </ListItemIcon>
          Settings
        </MenuItem>
          <MenuItem onClick={handleClose} className='flex gap-4'>
          <ListItemIcon className='rounded-full bg-gray-300 p-2'>
            <BiLogOut fontSize={23} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      </div>
      ) :(
      <Link to={'/sign-in'}>
      <Button variant='contained'size="small" color="success" onClick={() => setIsLogin(true)}>Sign In</Button>
      </Link>
      )}
     
    </Stack>
  );
}

function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? '© MUI' : `© ${new Date().getFullYear()} Made with love by Indian devloper😊`}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};

function CustomAppTitle() {
  return (
    <Stack direction="col" alignItems="center" spacing={2}>
      <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244759.jpg?semt=ais_hybrid.
      " className='h-12= w-12 rounded-full' alt="handcraft" />
      <Typography variant="h6">Akhil </Typography> 
    </Stack>
  );
}

function AppDashboardLayout() {
 
  return (
    <DemoProvider >
      <AppProvider
        navigation={NAVIGATION}
        theme={demoTheme}
        
      >
       
        <DashboardLayout
          slots={{
            appTitle: CustomAppTitle,
            toolbarActions: ToolbarActionsSearch,
            sidebarFooter: SidebarFooter,
          }}
        > 
        
          <Outlet/> 
           <DemoPageContent/> 
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

AppDashboardLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default AppDashboardLayout;


