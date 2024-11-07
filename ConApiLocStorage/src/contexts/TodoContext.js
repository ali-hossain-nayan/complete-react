import {createContext, useContext} from "react"

export const TodoContext = createContext({
    //Here todos properties are first array then inside the array there is object
    //with properties id,todo,completed or say checkedbox
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    //Then here are our method or say function which we are gonna implemented in App.jsx file..
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// It's often used to access global data 
//The useContext hook is used in React to access data or state that is stored in a Context. Context in React is a
// mechanism for sharing data, such as application-wide settings or user authentication, between components without the 
//need to explicitly pass the data through each component in
// the tree manually. useContext allows you to consume the data provided by a Context and use it within your components.
//By using this hooks or we can say function we pass the TodoContext with the help of useContext..
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider//here also pass the TodoContext.Provider sothat 
//we can not write TodoContext.Provider in App.jsx file just hold it in variable and pass it..