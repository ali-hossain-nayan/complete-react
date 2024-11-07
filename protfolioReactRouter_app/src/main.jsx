// https://reactrouter.com/en/main

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Project/Projects";
import Resume from "./components/Resume/Resume";


//first way
//its like layout parents then its inside children Home ,about etc
// const router = createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:'about',
//       element:<About/>
//     },
//     {
//       path:'contact',
//       element:<Contact/>
//     },
//     {
//       path:'github',
//       element:<Github/>
//     }
//   ]

//   }

// ])


//Another way of routing.its better
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
      <Route path="resume" element={<Resume />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
//we dont use App.jsx bcz here are concept is routing..so you can delete the App.jsx
//Instead of App.jsx we use RouteProvider which takes a props router and we inject it