import { createSlice } from "@reduxjs/toolkit";


const languageSlice=createSlice({
    name:"lang",
    initialState:{
        language:'en'
    },
    reducers:{
        languageNow:(state,action)=>{
            state.language=action.payload;
        }
    }
})

export const{languageNow}=languageSlice.actions;
export default languageSlice.reducer;