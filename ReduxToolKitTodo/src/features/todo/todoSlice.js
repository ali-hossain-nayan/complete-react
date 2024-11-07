//feature ko slice be bolte hey

import { createSlice, nanoid } from "@reduxjs/toolkit";
//For create slice we import createSlice
//Every slice have  three properties we can say initialState,name,reducers
//reducers mean list what work we are gonna do..its a object so we can perform like key:value pair 

const initialState = {//every store has a initialstate and its value what we just declare..its 
    //basically a object.here we also pass the data
    todos:[{id:1,text:'hello world'}]
}
//if we notice something in contextapi we just create the context pass the reference function name
//but here we just define all the funciton. its the difference between contextapi and redux-toolkit 
//like addTodo(),removeTodo()
export const todoSlice=createSlice({
    name:'todo',//name of the slice
    initialState,//here is initialstate that we just created above..
    reducers:{//reducer object which take care of functionalities
        addTodo:(state,action)=>{//here our first function and two things we get from here state,action
            //state give the current updated situtation of the initialstate and action when we call the function
            //give us the values like id,text 
            const todo = {
                id:nanoid(),//nanoid create unique ids
                text:action.payload//payload a object where we can get id,email medium of action..
                //extract the data using action
            }
            state.todos.push(todo)//here we pass the created todo into our initialState mey..
        },
        removeTodo:(state,action)=>{
            //here we filtering the specific id and action payload ka sab id k sath search keya then
            //uskey bina sabko la leya bcz we remove only specific id action not all
            state.todos=state.todos.filter((todo)=>todo.id != action.payload)
        },
    }

})
//reducers 2 parts export
//here first export
export const {addTodo,removeTodo}=todoSlice.actions//individual export bcz its help to create our 
//component
//second export whole reducers
export default todoSlice.reducer//store ko patha ki ney liya