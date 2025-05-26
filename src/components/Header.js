import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { gptSearchToggle } from '../utils/gptSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { languageNow } from '../utils/langaugeSlice';
const Header = () => {

    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const navigate=useNavigate();
    const gptSearchActive=useSelector(store=>store.gpt.isGptSearch)
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

    const gptButtonHandler=()=>{
      dispatch(gptSearchToggle())
    }

    const languageToggler=(e)=>{
      dispatch(languageNow(e.target.value))
    }

  return (
    <div className=' absolute px-0 md:px-8 w-screen bg-gradient-to-b from-black  z-30 flex flex-row  md:flex md:flex-row md:justify-between items-center' >
      <img 
      className='w-28 mr-12 md:w-48 md:p-4 '
      src={LOGO}
      alt="netflix-logo"
      >
      </img>
      {user&&(
      <div className="md:flex md:flex-row flex flex-col items-right ml-5 justify-center md:items-center md:w-1/4 w-1/2   md:-mr-0 md:pr-0 md:ml-0">
        {gptSearchActive&&(<select 
        className="p-2 md:mx-4 bg-black text-white text-sm md:text-md"
        onChange={(e)=>languageToggler(e)}
        >
          {SUPPORTED_LANG.map((option)=><option key={option.value} value={option.value}>{option.identifier}</option>)}
          
        </select>)}
        <button 
        onClick={gptButtonHandler}
        className='bg-red-600 text-white px-0  ml-20  md:ml-0 md:px-4 py-0 h-10 md:mr-2'>
          {!gptSearchActive?<>GPT Search
          <i className="fa-solid fa-rocket" style={{color: "#ffffff",paddingLeft:"10px"}}></i></>:
          <>Home
          <i className="fa-solid fa-home" style={{color: "#ffffff",paddingLeft:"10px"}}></i></>}
        </button>
        <img
        className='w-10 ml-32  md:m-2 md:mr-2 md:ml-2 h-10'
        src={user.photoURL}
        ></img>
        <button onClick={signoutToggler} className="bg-[#FF000C]  text-white p-2 mr-8 md:mr-8  md:m-2 md:mb-2"><i className="fa-solid fa-right-from-bracket"></i></button>
      </div>
      )}
    </div>
  )
}

export default Header
