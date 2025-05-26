import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryVideoContainer = () => {

    const movies=useSelector(store=>store.movies)
    console.log(movies)
    if (movies===null) return null;
   return (
    <div className='bg-black text-white'>
        <div className='-mt-[210px] relative z-40'>
            <MovieList movies={movies.nowPlayingMovies} title="Now Playing"/>
            <MovieList movies={movies.topRatedMovies} title="Top Rated"/>
            <MovieList movies={movies.popularMovies} title="Popular Movies"/>
            <MovieList movies={movies.upcomingMovies} title="Upcoming Movies"/>
      </div>
    </div>
  )
}

export default SecondaryVideoContainer
