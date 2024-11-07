import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()//here we take the all value using useTodo as we define it in the contextapi

    const add = (e) => {
      e.preventDefault()//as we dont have server so prevent it so that kohi na submit hoa ja e..

      if (!todo) return//if there is no todos then return the function add

      addTodo({ todo, completed: false})//else id add karo jobi yeha nehi dekha bcz we already defined it date.now() in app.jsx file function mey..
      //here also we can pass like todo:todo as it is same so just write todo .. but in completed we write completed:false a those key value different.
      //we pass key value pair as it is a object...
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
        {/* onSubmit mey add function dea raka as when someone submit the form.. */}
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full  border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}//value set as todo
              onChange={(e) => setTodo(e.target.value)}//here onChange mey event fire hoa and basic e.target.value
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;