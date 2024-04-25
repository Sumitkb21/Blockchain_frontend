import React, { useEffect, useState } from "react";
import Navbar from "./navbar.js";
import Footer from "../footer.js";
import axios from "axios";
import { FaEye, FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Box , styled , Button, Typography} from '@mui/material';

import "./home.css";
import { Link } from "react-router-dom";
import Clicked from "./clicked.jsx";



const Container = styled(Box)`
   margin: auto ;
   display: flex;
   background: rgba(255, 255, 255, 0.8);
   border-radius: 0.5rem;
`;

const ImageContainer = styled(Box)`
  padding : 1rem 1rem
`;
const Text = styled(Typography)`
color: #000;
height: 10%;
padding : 2px 2px;
font-size: 5rem;
font-family: inherit;
`
;

const Buttons = styled(Button)`
margin: 1rem 1rem;
font-size: 1.2rem;
background: #FFA50080; 
`
;

const Buttons1 = styled(Box)`
margin: 0 2rem;
 
`
;


const Description = styled(Typography)`
color: #000;
height: 15rem;
// padding : 2px 2px;
font-size: 1.5rem;
// font-family: inherit;
`
;

const Price = styled(Typography)`
color: #000;
height: 4.25rem; 
font-size: 2rem;
// font-family: inherit;
`
;


const Information  = styled(Box)` 
  
  height: 100%;
`;



const Home = () => {


  return (
    <div className="home-body">
      <Navbar />
      <h1>Home page of Not login user</h1>
    </div>
  );
  // return (
  //   <div>
  //    <Navbar/>

  //    <Footer/>
  //   </div>
  // )
};

export default Home;
