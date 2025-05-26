import React, { useEffect, useRef } from 'react'
import GptRecommendations from './GptRecommendations'
import lang from '../utils/language'
import { useDispatch, useSelector } from 'react-redux'
import OpenAI from "openai";
import gemini from '../utils/geminiAiConfig';
import Groq from "groq-sdk";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult, addMovieNames } from '../utils/gptSlice';

const GptSearch = () => {
    const dispatch=useDispatch();
    const langNow=useSelector(store=>store.lang.language)
    const inputValue=useRef(null);

    const searchMovies=async (movie)=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS)
        const json=await data.json()
        return json.results;
    }
    const searchButtonToggle= async()=>{
        // console.log(inputValue.current.value)
        const gptQuery="Act as movie Recommendation system and suggest some movies for the query without any headings,straight anwer"+inputValue.current.value+"Dont give me any kind of headings,I just want only 6 Movies separating with commas like as in example ahead.Example : Gadar, Jawan, Bahubali, RRR, Pushpa."
        
        const response = await gemini.models.generateContent({
            model: "gemini-2.0-flash",
            contents: gptQuery,
        });
        // console.log(response.text);
        const gptResults=response?.text.split(",")
        // console.log(gptResults)
        dispatch(addMovieNames(gptResults))
        const promiseArray = gptResults.map((movie)=> searchMovies(movie))

        const tmdbResults=await Promise.all(promiseArray);
        // console.log(tmdbResults)
        dispatch(addGptMovieResult(tmdbResults))

        }
    

  return (
    <div>
    <div className='pt-[10%] pb-5 bg-black flex justify-center flex-col items-center' >  
      <h1 className='text-white font-bold text-4xl '>{lang[langNow].heading}</h1>
      <form className="flex pt-[2%] z-50" onSubmit={(e)=>e.preventDefault()}>
        <input 
        ref={inputValue}
        className="bg-white w-[500px] p-5 text-black"type="text" placeholder={lang[langNow].searchPlaceholder}>
        </input>

        <button 
        onClick={searchButtonToggle}
        className='bg-[#FF000C] p-5 font-semibold px-8 text-white'>
        {lang[langNow].search}
        </button>
      </form>
    </div>
    <GptRecommendations/>
    </div>
  )
}

export default GptSearch
