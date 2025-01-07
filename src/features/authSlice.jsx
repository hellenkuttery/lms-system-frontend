import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loading:false,
        currentUser:null,
        token:null,
        error:false
    },
    reducers:{
        fetchStart:(state)=>{
            state.loading=true;
            state.error=false;
        },
        fetchFail:(state)=>{
            state.loading=false;
            state.error=true;
        }
    }

})

export const {fetchFail,fetchStart}=authSlice.actions;

export default authSlice.reducer;