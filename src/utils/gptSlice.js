import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        isGptSearch:false,
    },
    reducers:{
        gptSearchToggle:(state)=>{
            state.isGptSearch=!state.isGptSearch;
        }
    }
})

export const { gptSearchToggle} = gptSlice.actions;
export default gptSlice.reducer;