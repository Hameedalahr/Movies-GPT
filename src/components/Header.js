import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const navigate=useNavigate();
    const signoutToggler=()=>{

            signOut(auth).then(() => {
            }).catch((error) => {
                navigate("/error")
            });
    }

    useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser(
                    {
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL   
                    })
                );
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return ()=>unsubscribe();
    },[]);

  return (
    <div className=' absolute px-8 w-screen bg-gradient-to-b from-black  z-30 flex justify-between items-center' >
      <img 
      className=' w-48 p-4 '
      src={LOGO}
      alt="netflix-logo"
      >
      </img>
      {user&&(
      <div className="flex">
        <img
        className='w-10 m-2 h-10'
        src={user.photoURL}
        ></img>
        <button onClick={signoutToggler} className="bg-[#FF000C]  text-white p-2 m-2"><i className="fa-solid fa-right-from-bracket"></i></button>
      </div>
      )}
    </div>
  )
}

export default Header
