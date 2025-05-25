import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useDispatch, useSelector } from 'react-redux'

const MainVideoContainer = () => {
    const movie=useSelector(store=>store.movies?.nowPlayingMovies)

    if(movie===null)return;

    const movieData=movie[0]
    const {original_title,overview,id}=movieData

  return (
    <div>
        <VideoTitle title={original_title} description={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainVideoContainer
