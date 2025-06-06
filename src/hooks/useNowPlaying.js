import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { API_OPTIONS } from '../utils/constants'

const useNowPlaying=()=>{
    const dispatch=useDispatch()

        const getMoviesFromTmdb = async() =>{

        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
        const json= await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
       
        getMoviesFromTmdb();
    },[ ])
}

export default useNowPlaying;
