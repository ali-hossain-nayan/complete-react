import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')//for username
    const [password, setPassword] = useState('')//for password
    const [email,setEmail]=useState('')//for email

    //here onething as much as we can state create and pass the and can access it like email i have created for test extra many more also can
    const {setUser} = useContext(UserContext)//here setUser we use bcz in UserContextProvider file  
    //in userContext we put user for take data and setUser for set data..
    //and we find setUser in UserContext..
    const handleSubmit = (e)=>{//after event fire
        e.preventDefault()//for data dont get anyway prevent..
        setUser({username,password,email})//here we set username and password and pass it to receive Profile file

    }
    
  return (
    <div>
        <h1>Login</h1>
        <input type='text' 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'/>
        {" "}
        <input type='text' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/>

        <input type='text' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='email'/>


        <button onClick={handleSubmit}>submit</button>
        {/* pass the reference handleSubmit */}
    </div>
  )
}

export default Login