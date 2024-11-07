
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    // by giving this UserContextProvider every component inside it can access the context like,login,profile more
    //i mean can access state access
    <UserContextProvider>
     <h1>Here it is React Context with API</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
