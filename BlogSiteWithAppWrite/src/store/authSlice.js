
//Slices allow you to encapsulate related pieces of state and associated reducer functions together. This makes your state management code more modular and easier to maintain.
//Each slice can have its own set of actions and reducers, and you can combine multiple slices to form a complete Redux store.
//Slice:

// A slice is a smaller, self-contained piece of the application's state.
// In Redux Toolkit, slices are created using the createSlice function. Each slice includes its own reducer and actions.
// Slices allow you to organize your state and associated logic in a modular way.
// Each slice can manage a specific portion of the application's state.

import { createSlice } from "@reduxjs/toolkit";
//here we create the slice to track authentication
//for example we ask the store user authecate or not

//for slice first intialate the initialState.by dafult status false and userdata 
//null kar dea
const initialState = {
    status : false,
    userData: null
}

//there are three properties basically in slice name,initialstate,reducers
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {//Reducers describe how the state of an application changes in response to actions.
        //reducers ar vitor j function amra banabu tader doita parameter thakbe
        //state->initialstate ko update kore 
        //action->payload->data
        login: (state, action) => {
            //here if someone login method ko use karahey or say dispatch kara hey
            //state ar vitor status ko true kar do
            state.status = true;
            //we have to add userdata and this work done by action and action take the 
            //data from payload
            state.userData = action.payload.userData;
        },
//The "payload" is the part of an action that contains the data or information necessary to perform the action.
        //and if someone use logout function then status ko false kar do and also 
        //userdata ko null kar do
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

//we have to also export reducers ar vitor function bcz we need it to access 
//those function in different components we have export action where data is
//syntactic sugar

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;//we have to export reducers