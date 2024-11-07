import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Nayan",
    age:23
  }
  let newArr =[3,4,5]
//we can create a component and pass this value with the helps of props.it can be object ,arr.
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 
      rounded-xl mb-4' >Tailwind test</h1>
      <Card username="coffeCode" btnText = "click me!" age='24'/>
      <Card username="Ali Nayan" btnText="visit me.."/>
      {/* <Card somobj={myObj}/> */}
      
    </>
  )
}

export default App
