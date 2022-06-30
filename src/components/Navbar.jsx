import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
      <div className="flex justify-between items-center px-2 w-full h-full">
        <div>
        <h1 className="text-3xl font-bold mr-4 sm:text-4xl font-Finlandica"> BRAND </h1>
        </div>

        <div className="hidden md:flex mr-4">
        <div className="flex items-center mr-20">
          <ul className="hidden md:flex">
            <a href='#home'> <li className="font-Finlandica transform duration-200 ease-in-out hover:scale-x-125">Home</li> </a>
            <a href='#about'> <li className="font-Finlandica transform duration-200 ease-in-out hover:scale-x-125">About</li> </a>
            <a href='#support'> <li className="font-Finlandica transform duration-200 ease-in-out hover:scale-x-125">Support</li> </a>
            <a href='#pricing'> <li className="font-Finlandica transform duration-200 ease-in-out hover:scale-x-125">Pricing</li> </a>
            <a href='#contact'> <li className="font-Finlandica transform duration-200 ease-in-out hover:scale-x-125">Contact</li> </a>
          </ul>
        </div>
          <button className="border-none bg-transparent text-black mr-4">
            Sing in
          </button>
          <button className="px-8 py-2">Sing up</button>
        </div>

        <div
          className="md:hidden p-3 mr-4 cursor-pointer"
          onClick={handleChange}
        >
          {nav ? <XIcon className="w-7" /> : <MenuIcon className="w-7" />}
        </div>
      </div>

      <ul className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <li className="border-b-2 border-zinc-300 w-full"> <a href='#home' onClick={handleChange}>Home</a> </li>
        <li className="border-b-2 border-zinc-300 w-full"> <a href='#about' onClick={handleChange}>About</a> </li>
        <li className="border-b-2 border-zinc-300 w-full"> <a href='#support' onClick={handleChange}>Support</a> </li>
        <li className="border-b-2 border-zinc-300 w-full"> <a href='#pricing' onClick={handleChange}>Pricing</a> </li>
        <li className="border-b-2 border-zinc-300 w-full"> <a href='#contact' onClick={handleChange}>Contact</a> </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
