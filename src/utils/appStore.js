import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import languageReducer from "./langaugeSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies: movieReducer,
        gpt:gptReducer,
        lang:languageReducer
    }
})

export default appStore;