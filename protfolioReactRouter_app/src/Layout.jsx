import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

//In this Layout file outlet is like medium which keep  the up and down element or we can
//say components same and it  change the inside of the outlet...bcz we want to constant 
//the headers and footer same but inside outlet we want to change in every page....
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout