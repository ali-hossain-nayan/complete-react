import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false); //for each todo ki leya useState key undhar
  // isTodoEditable kina justify karongi
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  //after editing todo here we have to give the msg as we set up it context mey..
  const { updateTodo, deleteTodo, toggleComplete } = useTodo(); //take the updateTodo,deleteTodo,toggleComplete
  //from out context useTodo

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg }); //take the specific id then spread all todo
    //just we give the todo msg after edit..
    setIsTodoEditable(false); //then here we again editable ko false kar dea...
  };
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id); //toggle complete ka function ham write choka hey in
    //App.jsx mey.then just here take the id and toggle it..
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#578231]" : "bg-[#7575d3]" //here we use turnary operator
        //to check if the toggle complete or nehi hey.true hole green css and false hole
        //blue css set kar dea just for user frindly key liye
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted} //reference take toggleCompleted
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable} //here we just read not editable thats why isTodoEditable ko ! de dea
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)} //here directly todo ko delete kar dea..
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
