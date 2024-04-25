import React, { useContext, useEffect } from 'react'
import Home from './components/NotLogin/home.js'
import {Routes,Route} from 'react-router-dom'
import Portfolio from './components/NotLogin/portfolioForNotlogin.js'
import Login from './components/NotLogin/login.js'
import Signup from './components/NotLogin/signup.js'
import UserHome from './components/Employee/userHome.js'
import UserProfile from './components/Employee/userProfile.js'
import UserCart from './components/Employee/userCart.js'
import PortfolioAdmin from './components/Employee/portfolioAdmin.js'
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { Context } from './index.js'
import AdminHome from './components/Boss/adminHome.js'
import AdminPortfolio from './components/Boss/portfolio.js'
import AdminProfile from './components/Boss/adminProfile.js'
import ClickedImage from './components/NotLogin/clickedimage.js'

const App = () => {

  const {user , setUser ,isAuthenticatedAdmin ,setIsAuthenticatedAdmin , setIsAuthenticated, setLoading} = useContext(Context);




  return(
    <>
    <Routes>
    <Route path="/" element= {<Home/>}/>;
    <Route path="/employee/home" element= {<UserHome/>}/>;
    <Route path="/user/profile" element= {<UserProfile/>}/>;
    <Route path="/user/cart" element= {<UserCart/>}/>;
    <Route path="/user/adminportfolio" element= {<PortfolioAdmin/>}/>;

    <Route path="/adminportfolio" element= {<Portfolio/>}/>;
    <Route path="/login" element= {<Login/>}/>;
    <Route path="/signup" element= {<Signup/>}/>;

    <Route path="/boss/home" element= {<AdminHome/>}/>;
    <Route path="/admin/portfolio" element= {<AdminPortfolio/>}/>;
    <Route path="/admin/profile" element= {<AdminProfile/>}/>;
    
    <Route path="/clickedimage" element= {<ClickedImage/>}/>;


    </Routes>
    <Toaster/>
    </>
  )
}

export default App
