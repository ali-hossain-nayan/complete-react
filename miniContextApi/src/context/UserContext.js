import React from 'react'

const UserContext = React.createContext();//context is like a global variable 
//and we have to create a provider sothat all the components can access the the provider otherwise
//if we need a specific data we have to pass it by all the way..like soneone have to go dhaka on the way chandpur->cumilla->Naraonjonj->dhaka
//but what if we just land in dhaka by plane not using bus,cng,rickshaw..contextapi is like plane we directly can land

export default UserContext;