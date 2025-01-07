import AuthReducer from  "../features/authSlice"
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({
    reducer:{
        auth:AuthReducer
    }
})

export default store;