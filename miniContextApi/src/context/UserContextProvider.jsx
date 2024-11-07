import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{//here children use for any data come to pass 
  const [user,setUser] = useState(null)//for data create a state

  return(
    <UserContext.Provider value={{user,setUser}}>
      {/* Here pass user and setUser data */}
        {/* //give the access of the useState sothat can access the data */}
        {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider;