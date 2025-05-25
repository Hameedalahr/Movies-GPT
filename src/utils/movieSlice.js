import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
            state.nowPlayingMovies=action.payload;
        },
        addPlayingTrailer:(state,action)=>{
            state.nowPlayingTrailer=action.payload;
        }
    }
})

export const{addNowPlayingMovies,addPlayingTrailer} = movieSlice.actions;
export default movieSlice.reducer;