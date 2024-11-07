import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
    <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gradient-to-r from-indigo-600 to-purple-700">
      <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
          <h2 className="text-4xl font-bold sm:text-5xl text-center flex justify-center items-center">
            WELCOME TO MY PORTFOLIO
            <span className="hidden sm:block text-4xl"></span>
          </h2>
  
          <Link
            to="/"
            // className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            {/* Add your SVG or icon here */}
            {/* Download now */}
          </Link>
        </div>
      </div>
  
      <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
        <img className="w-96 mx-auto" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
      </div>
    </aside>
  </div>
  )  
}
