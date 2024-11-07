// import Coffee from "./coffee"

import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {

  const [counter, setCounter] = useState(10); //counter variable and setCounter function

  //which control the counter variable..

  // let counter = 10;

  const addValue = () => {

    setCounter(counter + 1);

    // console.log("clicked",counter)
    
  };

  const removeValue = () => {

    if (counter > 0) {

      setCounter(counter - 1);

    } else {

      setCounter(0);

    }

    // console.log("clicked",counter)

  };

  return (
    <>
      {/* <Coffee/> */}

      {/* <h1>Coffee and React</h1>

      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>

      <br />

      <button onClick={removeValue}>Remove Value{counter}</button> */}

      {/* remove value reference pass */}

      {/* <p>footer:{counter}</p> */}
      <LandingPage/>

    </>
  );
}

export default App;
