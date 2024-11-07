import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

//combine the slices inside the store..
//here we create the store and inside object always return the reducer and give the 
//reducer we create authSlice reducer and pass it here
const store = configureStore({
    reducer: {
        auth : authSlice,//this key value comes from our authslice same as key value as reucers is a object
        //TODO: add more slices here for posts
    }
});


export default store;

//Stores help in managing complex state and making it easily accessible across components without 
//the need to pass state through multiple levels of props.
//A store allows you to keep all your application's state in one place, making it easier to manage and debug