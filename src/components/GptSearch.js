import React from 'react'
import GptRecommendations from './GptRecommendations'
import lang from '../utils/language'
import { useSelector } from 'react-redux'
const GptSearch = () => {

    const langNow=useSelector(store=>store.lang.language)
    
  return (
    <div>
    <div className='pt-[15%] pb-5 bg-black flex justify-center' >  
      <form className="flex z-50">
        <input className="bg-white w-[500px] p-5 text-black"type="text" placeholder={lang[langNow].searchPlaceholder}></input>
        <button className='bg-[#FF000C] p-5 font-semibold px-8 text-white'>{lang[langNow].search}</button>
      </form>
    </div>
    <GptRecommendations/>
    </div>
  )
}

export default GptSearch
