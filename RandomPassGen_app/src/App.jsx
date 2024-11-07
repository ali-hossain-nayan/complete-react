import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  // 4 variables 4 useStae 
  const [length, setLength] = useState(8); //length
  const [numberAlow, setNumberAlow] = useState(false); //allowed number
  const [charAlow, setCharAlow] = useState(false); //character allow
  const [password, setPassword] = useState(""); //password allow

  //useRef hook for reference ..here we use for password ref so that we copy the password in the clip
  const passwordRef = useRef(null);

  //useCallback Hooks return function and dependencies..and its change when only the
  //dependencies change..our password depends on length,numberallow,charallow,setpassword this are the
  //dependencies. its a hook that lets you cache a function definition between re-renders
  //its take the function in memory and use it next call ..memozization ki leay acchi hey
  //here optimization is important usecallback()

  const passwordCenerator = useCallback(() => {
    //But here dependencies need to optimize the function...
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAlow) str += "0123456789";
    if (charAlow) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); //In char we take the index of the random number
      pass += str.charAt(char); //charAt method convert specific index into character...
    }
    setPassword(pass);
  }, [length, numberAlow, charAlow, setPassword]);//here setpassword is optional 

  //another useCallback for clip
  const CopyPassWordToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 40);
    window.navigator.clipboard.writeText(password); //for copy the clipboard
  }, [password]);

  useEffect(() => {
    //we use useEffect so that here any dependencies change again run the function
    passwordCenerator();
  }, [length, numberAlow, charAlow, passwordCenerator]);


  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 "
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={CopyPassWordToClip}
            className="outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0"
           >
            copy
          </button>
        </div>
        {/* create Lenght input box */}
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={8}
              max={40}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                // after put the number onchange event call with function setLength
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          {/* create the input for the Numbers */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAlow}
              id="numberInput"
                onChange={() => {
                //after clicking radio box true false prev and present element
                setNumberAlow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* create  the input for the Numbers */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAlow}
              id="characterInput"
              onChange={() => {
                //after clicking radio box true false prev and present element
                setCharAlow((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
//hot moduling reloading auto virtual dom compare real dom compare then just replace
//full tree not to justify
//component based library..joto component toto valo 