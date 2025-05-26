import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({title,posterPath}) => {
  if (!posterPath) return null;
  return (
    <div className='w-48 mr-4 mt-2'>
        <img
        alt={title}
        src={IMG_CDN_URL + posterPath}
        >
        </img>
    </div>
  )
}

export default MovieCard
