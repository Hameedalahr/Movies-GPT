import React, { useRef, useState } from 'react'
import Header from './Header'
import { formValidation } from '../utils/validation'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BACKGROUND_IMG, LOGO } from '../utils/constants';
import {USER_URL} from '../utils/constants'

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true)
    const [errorMessage,setErrorMessage]=useState()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const signInToggle=()=>{
        setIsSignIn(!isSignIn)
    }

    const signButtonHandler=()=>{
        const message = formValidation(email.current.value,password.current.value)

        setErrorMessage(message)
        
        if(!message===null) return;

        if(!isSignIn){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: USER_URL 
                    })
                    .then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(
                            addUser({
                                uid:uid,
                                email:email,
                                displayName:displayName,
                                photoURL:photoURL   
                            })
                        );
                
                    }).catch((error) => {
                        setErrorMessage(error.message)  
                    });
                    
                })
                    
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage("User Not Found")
            });
        }
    }

  return (
    <div>
        <Header/>

        <img
        className='absolute w-screen h-screen'
        src={BACKGROUND_IMG}
        alt="netflix-login-background">
        </img>

        <div className='absolute bg-black bg-opacity-80 w-[450px] h-4/5 mx-[540px] my-[120px] rounded-lg'>

            <form onSubmit={(e)=>e.preventDefault()} className='flex flex-col py-10 text-white'>
                <h1 className='font-bold text-3xl mx-14 '>{isSignIn?"Sign In":"Sign Up"}</h1>

                {(!isSignIn&&
                <input
                ref={name}
                className='mt-[35px] mb-[-10px] px-7 mx-14 py-4 bg-[#040607] bg-opacity-70 text-white border border-slate-500 rounded-md'
                type="text"
                placeholder="Name">
                </input>)}

                <input
                ref={email}
                className='mt-[35px] px-7 mx-14 py-4 bg-[#040607] bg-opacity-70 text-white border border-slate-500 rounded-md'
                type="text"
                placeholder="Email or mobile number">
                </input>

                <input
                ref={password}
                className='mt-6 px-7 py-4 mx-14 bg-[#040607] bg-opacity-70 text-white border border-slate-500 rounded-md'
                type="password"
                placeholder='Password'>
                </input>

                <p className='text-red-600 px-14 pt-3'>{errorMessage}</p>
                <button onClick={signButtonHandler}className="mt-5 rounded-lg mx-14 bg-red-600 p-3 font-bold hover:bg-red-800">
                    {isSignIn?"Sign In":"Sign Up"}
                </button>

                <h1 onClick={()=>signInToggle()} className='mx-10 mt-8 font-bold text-gray-100 cursor-pointer'>
                    {isSignIn?"New to Netflix? Sign Up Now" : "Already an User? Sign In Now"}
                </h1>

            </form>
        </div>
    </div>
  )
}

export default Login
