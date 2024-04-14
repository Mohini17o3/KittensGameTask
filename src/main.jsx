import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginForm from "./components/LoginForm";
import ErrorPage from "./components/error-Page"; 
import Navbar from "./components/Navbar";
import Game from "./components/Game"
import LeaderBoard from "./components/LeaderBoard" ;
import Rules from "./components/Rules";
import './App.css';
// import App from './App.jsx'
import {createBrowserRouter , RouterProvider ,} from "react-router-dom";
import './index.css'

const router = createBrowserRouter ([
{
  path: "/" ,
  element: <LoginForm /> , 
  errorElement: <ErrorPage /> ,
  children: [
    {
      path: "/", 
      element : <Navbar /> ,
    
    },

    {
      path : "LeaderBoard" ,
      element : <LeaderBoard /> ,
     
    },
    {
      path : "rules" ,
      element : <Rules /> ,
     
    }
  ]
},
{
  path : "/submit" , 
  element : <Game /> ,
  children: [
    {
      path: "/submit", 
      element : <Navbar /> ,
    
    },

    {
      path: "/submit/LeaderBoard" ,
      element : <LeaderBoard />
    }
    ,
    {
      path: "/submit/rules" ,
      element : <Rules />
    }

  ]

} ,

{
  path : "/rules" ,
  element : <Rules />
} ,




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router = {router} />
   </React.StrictMode>,
)
