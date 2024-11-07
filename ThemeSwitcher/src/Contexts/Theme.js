import { createContext, useContext } from "react";
//UserContext is like a global variable which provide the data every conponent you pass for

// <useContext>
//<Login/>//
//<Card/>//
//<Data/>//
//<userContext/>//

export const ThemeContext = createContext({
  themeMode: "light", //In createContext we can directly pass the variable default we want to find the
  //page light
  darkTheme: () => {}, //we can also pass method
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; //by using not like mincontxt project I mean
// there we create a extra file and then provide it but directly done its standard
//we direct here export the ThemContextProvider ko..

export default function useTheme() {
  //as like we have to receive userContext to in every component like
  //login,profile but here we can create a functon or you can say hook and return the ThemeContext
  //and dont need to previous project works..
  return useContext(ThemeContext);
}
