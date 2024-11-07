import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'//here we import addTodo sothat we can
//use it in dispatch as remember addTodo,removeTodo ko ham indiviually export keya
//so that component ka undhar ham usko use kar sakta.. 

function AddTodo() {
    const [input,setInput]=useState('')
    const dispatch = useDispatch()//Its use for data send kar ney ki leya..
//dispatch reducers ko use kar key store ki undhar change kar ta hey
//here we dispatch data to addTodo
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')//after adding todo we again clean the input ko 

    }
    return(
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </form>
    )
}

export default AddTodo