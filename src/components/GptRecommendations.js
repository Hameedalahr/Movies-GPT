import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptRecommendations = () => {

    const {gptMovies,gptMovieNames}=useSelector((store)=>store.gpt)
    if (!gptMovieNames || !gptMovies || gptMovieNames.length !== gptMovies.length) return null;
  return (
    <div>
        <div className='bg-black text-white'>
            {gptMovieNames.map((movieName,index)=> <MovieList key={movieName} title={movieName} movies={gptMovies[index]}/>)}
        </div>
    </div>
  )
}

export default GptRecommendations
