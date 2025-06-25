


import React, { createContext, useState } from 'react';
import './app.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppDashboardLayout from './Pages/DashboardLayout/DashboardLayout';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import ProductPage from './Pages/ProductPage';
import Dash from './Components/Dashboard/Dash';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AddProduct from './Pages/ProductPage/AddProduct';
import HomeBannerList from './Pages/HomeBannerList/HomeBannerList';
import AddHomeBannerSlide from './Pages/HomeBannerList/AddHomeBannerSlide';
import CategoryList from './Pages/Category/CategoryList';
import AddCategory from './Pages/Category/AddCategory';
import SubCategory from './Pages/Category/SubCategory';
import AddSubCategory from './Pages/Category/AddSubCategory';
import Orders from './Pages/Orders/Orders';
import Users from './Pages/Users/Users';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import VerifyOtp from './Pages/ForgotPassword/VerifyOtp';
import ChangePassword from './Pages/ForgotPassword/ChangePassword';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const MyContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [productDrawer, setProductDrawer] = useState({open:false,model:''});

  const values = { isLogin, setIsLogin, productDrawer, setProductDrawer };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppDashboardLayout />,
      children: [
        { path: '', element: <Dash /> },
        { path: 'products/all-product', element: <ProductPage /> },
        { path: 'products/upload-product', element: <AddProduct /> },
        { path: 'home-Slide/Home-Banner-List', element: <HomeBannerList /> },
        { path: 'home-Slide/AddHome-BannerSlide', element: <AddHomeBannerSlide /> },
        { path: 'category/category-list', element: <CategoryList /> },
        { path: 'category/add-category', element: <AddCategory/> },
        { path: 'category/sub-category', element: <SubCategory/> },
        { path: 'category/add-a-sub-subcategory', element: <AddSubCategory/> },
        { path: '/orders', element: <Orders/> },
        { path: '/users', element: <Users/> },
      ],
    },
     { path: '/forgot-password', element: <ForgotPassword/> },
     { path: '/verify-otp', element: <VerifyOtp/> },
     { path: '/change-password', element: <ChangePassword/> },
     
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />

      <Dialog
        fullScreen
        open={productDrawer.open}
        onClose={() => setProductDrawer(
          {open:false}
        )}
        TransitionComponent={Transition}
        PaperProps={{
    
  }}
      >
        <AppBar sx={{ position: 'relative',  backgroundColor: '#eeeeee',color: '#000'  }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setProductDrawer({open:false})}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
             {productDrawer?.model}
            </Typography>
           
          </Toolbar>
        </AppBar>
       
    {productDrawer?.model === 'AddProduct' && <AddProduct />}
    {productDrawer?.model === 'Home Banner Slide' && <AddHomeBannerSlide />}
    {productDrawer?.model === 'Add Category' && <AddCategory />}
     {productDrawer?.model === 'Add Sub Category' && <AddSubCategory />}

      </Dialog>
    </MyContext.Provider>
  );
};

export default App;
