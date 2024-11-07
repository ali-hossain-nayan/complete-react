import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]); //for UI here use useState as we need to set the todos
  //hamari context sey aa rahi hey.

  const addTodo = (todo) => {
    //In add todo we also access the previous todo otherwise when we add new todo then
    //previous todo will be deleted which we not wanted..by using spread operator we keep the
    //previous todo..and also add new add todo..for the unique id we just call the Date.now() sothat
    //every unique id will be added..id will need for loop when we delete,edit etc todos..
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    //For updatetodo we take  access the all prevtodos and by using map loop we have matched prevtodo Id with
    // new id if matched the id then we update the todo or we just keep the prevTodo as it is....
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    //here we findout specific todo using filter and we just keep those todos which
    //id not matched given new id and without this specific id we just return or we can say
    //set all todos..
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    //here we use map and find the specific id which we are gonna checked or unchecked
    //if id matched then using spread operator take the all todos access and just completed ko using
    // !sign uncompleted as like true->false or false->true if id not matched then prevtodo keep
    //as it is
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  //For running again the function of todos use useEffect
  //and here we access localstorage but use convert the item into json bcz in localstorage most of
  //time data are in string format...
  //by getitem from loaclstorag we have to give key..here we give 'todos' as key
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    //here we checked if todos hey and uska length 0 sey barkar hey ... bcz in useState we just first
    //keep the array as empty array.
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  //here we set the todos in localstroage so we have give key value
  //key=todos,value=same json but convert it string as local stroage accept only the string..
  useEffect(() => {
    //use useEffect bcz when we get the all todos then we run the function and set it...
    //thats why todos is our dependencies here..
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#315d33] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
