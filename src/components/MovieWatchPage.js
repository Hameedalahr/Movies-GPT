import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useTrailerVideo from '../hooks/useTrailerVideo';
import { IMG_CDN_URL } from '../utils/constants';


const MovieWatchPage = () => {
    const { resid } = useParams();
    const navigate = useNavigate();
    const movieId = Number(resid);
    useTrailerVideo(movieId);
    const playTrailer = useSelector(store => store.movies?.nowPlayingTrailer);
    const movie = useSelector(store => store.movies?.nowPlayingMovies);
    
    if (!movie) return null;
    
    const filteredMovie = movie.filter((mov) => mov.id === movieId);
    
    
    const selectedMovie = filteredMovie[0];
    

     if (filteredMovie.length === 0){
        return (
            <div className=' h-full flex flex-col '>
                <Link to="/browse" className='absolute top-4 left-4 z-50'>
                <button className='bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all'>
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>
                </Link>
                <div className='w-full '>
                
                        <iframe
                            className='w-screen h-screen'
                            src={`https://www.youtube.com/embed/${playTrailer.key}?autoplay=1&mute=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    
                    </div>
            </div>
        );
    }
    
    return (

        <div className='relative w-screen h-screen bg-black overflow-hidden'>
           
            <div className='absolute inset-0 z-0 opacity-20'>
                {selectedMovie.backdrop_path ? (
                    <img 
                        src={IMG_CDN_URL + selectedMovie.backdrop_path} 
                        alt={selectedMovie.title} 
                        className='w-full h-full object-cover'
                    />
                ) : (
                    <div className='w-full h-full bg-gray-900'></div>
                )}
            </div>
            
           
            <Link to="/browse" className='absolute top-4 left-4 z-50'>
                <button className='bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-70 transition-all'>
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>
            </Link>
            
            <div className='relative z-10 h-full flex flex-col lg:flex-row'>
                
                <div className='w-full lg:w-3/4 h-2/3 lg:h-full flex flex-col'>
                    {playTrailer?.key ? (
                        <iframe
                            className='w-full h-full'
                            src={`https://www.youtube.com/embed/${playTrailer.key}?autoplay=1&mute=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className='flex items-center justify-center h-full bg-black bg-opacity-70'>
                            <div className='text-center'>
                                <p className='text-white text-xl mb-4'>Trailer not available</p>
                                <Link to="/browse" className='text-red-500 hover:underline'>
                                    Go back to browse
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                
               
                <div className='w-full lg:w-1/4 h-1/3 lg:h-full p-6 bg-gradient-to-t lg:bg-gradient-to-l from-black via-black to-transparent overflow-y-auto'>
                    <div className='flex flex-col space-y-4'>
                        <h1 className='text-white text-3xl font-bold'>{selectedMovie.title}</h1>
                        
                        <div className='flex items-center space-x-4'>
                            <span className='text-green-500 font-semibold'>
                                {selectedMovie.vote_average?.toFixed(1) || 'N/A'} Rating
                            </span>
                            <span className='text-gray-300'>{selectedMovie.release_date || 'Release date not available'}</span>
                        </div>
                        
                        {selectedMovie.genre_ids?.length > 0 && (
                            <div className='flex flex-wrap gap-2'>
                                {selectedMovie.genre_ids.map(genreId => (
                                    <span key={genreId} className='px-3 py-1 bg-gray-800 text-white rounded-full text-sm'>
                                        {getGenreName(genreId)}
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        {selectedMovie.poster_path && (
                            <div className='w-40 h-60 rounded overflow-hidden shadow-lg'>
                                <img 
                                    src={IMG_CDN_URL + selectedMovie.poster_path} 
                                    alt={selectedMovie.title}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        )}
                        
                        {selectedMovie.overview && (
                            <div>
                                <h3 className='text-white font-semibold mb-2'>Overview</h3>
                                <p className='text-gray-300 text-sm'>{selectedMovie.overview}</p>
                            </div>
                        )}
                        
                        <div className='flex space-x-4 pt-4'>
                            <button className='bg-white text-black px-6 py-2 rounded flex items-center space-x-2 hover:bg-opacity-80'>
                                <i className="fa-solid fa-play"></i>
                                <span>Play</span>
                            </button>
                            <button className='bg-gray-600 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100'>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                            <button className='bg-gray-600 bg-opacity-70 text-white px-4 py-2 rounded-full hover:bg-opacity-100'>
                                <i className="fa-regular fa-thumbs-up"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function to get genre names
const getGenreName = (genreId) => {
    const genres = {
        28: 'Action',
        12: 'Adventure',
        53: 'Thriller'
    };
    return genres[genreId] || 'Unknown';
};

export default MovieWatchPage;