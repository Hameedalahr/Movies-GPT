import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { addUser } from '../utils/userSlice';
import MovieWatchPage from './MovieWatchPage';
const Body = () => {

    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/watchpage/:resid",
          element:<MovieWatchPage/>
        }
    ])


    
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
