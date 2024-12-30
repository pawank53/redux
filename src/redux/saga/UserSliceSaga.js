import { createSlice } from "@reduxjs/toolkit";



const userSliceSaga= createSlice({
    name:'userSaga',
    initialState:{
        sagaUser:[],
        loading:false,
        error:false
    },
    reducers:{
        fetchUsers: (state)=>{
            state.loading=true;
        },
        fetchUsersSagaSuccess:(state, action)=>{
            state.loading=false;
            state.sagaUser=action.payload;
        },
        fetchUsersSagaFailed:(state, action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})

export const {fetchUsers, fetchUsersSagaSuccess, fetchUsersSagaFailed}=userSliceSaga.actions;

export default userSliceSaga.reducer;