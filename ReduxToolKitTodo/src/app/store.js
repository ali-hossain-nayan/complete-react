import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
//for redux-toolkit we have to first build a store..for one project or app one store..single source of tool
//here we configureStore.. and its take a object key:value..multiple be ho sakti hey.
//then we give it reducer..here is todoReducer bcz its takes the value in flow
export const store = configureStore({
    reducer:todoReducer
    
})
