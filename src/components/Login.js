import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true)

    const signInToggle=()=>{
        setIsSignIn(!isSignIn)
    }

  return (
    <div>
        <Header/>

        <img
        className='absolute w-screen h-screen'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_medium.jpg"
        alt="netflix-login-background">
        </img>

        <div className='absolute bg-black bg-opacity-80 w-[450px] h-3/4 mx-[540px] my-[100px] rounded-lg'>
        
            <form className='flex flex-col py-10 text-white'>
                <h1 className='font-bold text-3xl mx-14 '>{isSignIn?"Sign In":"Sign Up"}</h1>

                {(!isSignIn&&
                <input
                className='mt-[35px] mb-[-10px] px-7 mx-14 py-4 bg-[#040607] bg-opacity-70 text-white border border-slate-500 rounded-md'
                type="text"
                placeholder="Name">
                </input>)}

                <input
                className='mt-[35px] px-7 mx-14 py-4 bg-[#040607] bg-opacity-70 text-white border border-slate-500 rounded-md'
                type="text"
                placeholder="Email or mobile number">
                </input>

                <input
                className='mt-6 px-7 py-4 mx-14 bg-[#040607] bg-opacity-70 text-white border border-slate-500 rounded-md'
                type="password"
                placeholder='Password'>
                </input>

                <button className="mt-5 rounded-lg mx-14 bg-red-600 p-3 font-bold">
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
