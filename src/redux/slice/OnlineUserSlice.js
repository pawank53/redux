import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchUsers= createAsyncThunk(
    'users/fetch',
    async()=>{
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        if(response.ok){
            return await response.json();
        }else{
            throw new Error("Failed to fetch the user!");
        }
    }
)

const OnlineUserSlice=createSlice({
    name:"onlineUser",
    initialState:{
        onlineUser:[],
        loading: false,
        error: null,
    },
    reducer:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchUsers.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading=false;
            state.onlineUser=action.payload;
        })
        .addCase(fetchUsers.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }
})

export default OnlineUserSlice.reducer; // now combile this reducer into main store reducer and dispatch from any screen where you want to use