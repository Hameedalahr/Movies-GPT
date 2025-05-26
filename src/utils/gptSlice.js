import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        isGptSearch:false,
        gptMovies:null,
        gptMovieNames:null,
    },
    reducers:{
        gptSearchToggle:(state)=>{
            state.isGptSearch=!state.isGptSearch;
        },
        addGptMovieResult : (state,action)=>{
            state.gptMovies=action.payload;
        },
        addMovieNames:(state,action)=>{
            state.gptMovieNames=action.payload;
        }
    }
})

export const { gptSearchToggle,addGptMovieResult,addMovieNames} = gptSlice.actions;
export default gptSlice.reducer;