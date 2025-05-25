import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addPlayingTrailer } from '../utils/movieSlice';

const useTrailerVideo = (movieId) => {
  const dispatch=useDispatch();
    useEffect(()=>{
        getTrailerVideo();
    },[])
    const getTrailerVideo=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json()
        const filteredTrailer=json.results.filter((trailer)=>trailer.type==="Trailer")
        const trailer=filteredTrailer.length===0? json.results[0]:filteredTrailer[0]
        dispatch(addPlayingTrailer(trailer))
 
    }
}

export default useTrailerVideo
