import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
const MovieList = ({title,movies}) => {
  return (
    <div className='p-6'>   
        <h1 className='font-bold text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex'>
                {movies?.map((movies)=><Link  key={movies.id} to={"/watchpage/"+movies.id}><MovieCard posterPath={movies.poster_path} id={movies.id} /></Link>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList
