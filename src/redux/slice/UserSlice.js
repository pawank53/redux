import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const userSlice= createSlice({
    name:"user",
    initialState:{
        user:[]
    },
    reducers:{
        addUser:(state, action)=>{
            // Either do the low for malual addition 
            state.user.push({
                id: uuid.v4(),
                name: action.payload.name,
                email: action.payload.email,
                mobile: action.payload.mobile
            })
            // push all the payload data into the  state
            // state.user.push(id= uuid.v4() ,action.payload)
        },
        updateUser:(state, action)=>{
            console.log(" update user payload:", action.payload);
            state.user.map((user)=>{
                if(user.id===action.payload.id){
                    user.name=action.payload.name;
                    user.email=action.payload.email;
                    user.mobile=action.payload.mobile
                }
            })
        },
        removeUser:(state, action)=>{
            console.log("remove user payload:", action.payload);
            state.user=state.user.filter((user)=>user.id!= action.payload)
        },
    }
})

export const {addUser, updateUser, removeUser}= userSlice.actions;
export default userSlice.reducer;