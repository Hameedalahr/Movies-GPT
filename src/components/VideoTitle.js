import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='pt-[210px] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='my-2 w-1/2'>{description}</p>
      <div className='mt-6'>
        <button className='p-4 px-12 bg-white text-black w-25 rounded-md hover:bg-opacity-70 '><i className="fa-solid fa-play" style={{color: "#000",paddingRight:"14px"}}></i>Play</button>
        <button className='p-4 px-8 rounded-md bg-gray-400 bg-opacity-40 text-white w-25 ml-4'><i className="fa-solid fa-circle-info" style={{color: "#ffffff",paddingRight:"14px"}}></i>More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
