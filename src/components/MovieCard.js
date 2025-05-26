import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({title,posterPath}) => {
  return (
    <div className='w-48 mr-4 mt-2'>
        <img
        src={IMG_CDN_URL + posterPath}
        >
        </img>
    </div>
  )
}

export default MovieCard
