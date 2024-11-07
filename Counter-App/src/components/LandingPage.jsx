import React from "react";

const LandingPage = () => {
  return (
    <>
      {/* <div className='flex items-start justify-center min-h-screen'>
    <h1 className='text-3xl'>Best Used Phones in Dhaka - Grab the deal now!!</h1>
 </div> */}
      <nav className="text-white bg-purple-800 h-16 px-3 pt-1">
        {/* <img
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNvAktavy6I5upj9umaEHBcMv20K2vml4CA&usqp=CAU"
          alt=""
          className="h-16 px-3 pt-3 rounded-2x"
        /> */}
        <ul className="flex justify-center items-center py-4 px-27 space-x-11">
          <li className="cursor-pointer">Home </li>
          <li className="cursor-pointer">About </li>
          <li className="cursor-pointer">Catalouge </li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
      </nav>
      <main className="flex justify-around bg-fuchsia-100">
        <div className="py-40 pl-20 h-90">
          <div className="text-6xl ">The best Phones in the town</div>
          <p className="w-1/3 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque esse
            atque, ratione error suscipit quidem delectus maxime debitis
            corrupti eos beatae explicabo pariatur earum doloribus? Quos illum
            deleniti quisquam explicabo?
          </p>
          <div className="space-x-4 ">
            <button className="px-4 py-2 text-white bg-purple-800 rounded-2xl hover:text-purple-600 hover:bg-slate-900">
              Buy Now
            </button>
            <button className="px-4 py-2 text-white bg-purple-800 rounded-2xl hover:text-purple-600 hover:bg-slate-900">
              Contact Us Now
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/883/402/original/cute-girl-talking-on-the-phone-cartoon-illustration-vector.jpg"
            alt=""
            className="w-90 h-80"
          />
        </div>
      </main>
    </>
  );
};

export default LandingPage;
