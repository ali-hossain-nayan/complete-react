import { useState,useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./Contexts/Theme";
import Card from "./components/Card";
import ButtonTheme from "./components/ButtonTheme";

function App() {
  const [themeMode,setThemeMode]=useState('light')//default theme

  const lightTheme =()=>{//here is the functionality of lightTheme and setTheme mode mey ham set kar dea
    setThemeMode('light')
  }

  const darkTheme=()=>{//here is the functionality of darkTheme and setTheme mode mey ham set kar dea
    setThemeMode('dark')
  }

  //change the theme here
  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')//first we remove the default
    //thememode as we are gonna a set or add them
    //onething here select html bcz its not a server side its just client side
    document.querySelector('html').classList.add(themeMode)//then here we add themeMode bcz
    //theemMode mey sab set ho rahi hey..
  
    
  }, [themeMode])//here themeMdoe dependencies bcz it themeMode change then function again run
  //kar do useEffect...useEffect ka kam he this
  

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      {/* Here we access the value we have been set in theme.js themode variable and two methods */}
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ButtonTheme/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          < Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
