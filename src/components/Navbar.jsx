// import React from 'react'

// function Navbar() {
//   return (
//     <div className="flex w-screen p-4 h-[70px] bg-orange-300 shadow-lg items-center justify-between">
//         <div className="flex">
//                 <img src="https://cdn-icons-png.flaticon.com/512/12516/12516313.png" alt="logo" className="w-12" />
//                 <p className="text-red-500 text-2xl font-bold">MOBIMART</p>
//         </div>
//         <ul className="flex space-x-4 font-semibold text-lg">
//             <li>Home</li>
//             <li>Cart</li>
//             <li>Orders</li>

//         </ul>
//         <div>
//             <input type="text" placeholder="Search here..." className="w-[600px] rounded p-2 border-slate-200" />
//         </div>
//         <ul className="flex space-x-4">
//             <li>username</li>
//             <button className='bg-red-500 rounded-lg p-1 hover:bg-orange-500' >Logout</button>

//         </ul>

//     </div>
//   )
// }

// export default Navbar
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const HandleLogin = () => {
    navigate("/login");
  };
  const HandleSignup = () => {
    navigate("/signup");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex w-screen p-4 h-[70px] bg-orange-300 shadow-lg items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/12516/12516313.png"
          alt="logo"
          className="w-12"
        />
        <p className="text-red-500 text-2xl font-bold ml-2">MOBIMART</p>
      </div>

      {/* Menu for large screens */}
      <ul className="hidden md:flex space-x-4 font-semibold text-lg">
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/cart"}>
          <li>Cart</li>
        </NavLink>
        <NavLink to={"/order"}>
          <li>Order</li>
        </NavLink>
      </ul>

      {/* Search Bar */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search here..."
          className="w-[600px] rounded p-2 border border-slate-300"
        />
      </div>

      {/* User Info */}
      <ul className="hidden md:flex space-x-4 font-semibold">
        {/* <li>username</li> */}
        <li>
          <button
            className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white "
            onClick={HandleLogin}
          >
            Login
          </button>
        </li>
        <li>
          <button
            className="bg-blue-500 rounded-lg p-1 hover:bg-blue-300 text-white"
            onClick={HandleSignup}
          >
            Signup
          </button>
        </li>
      </ul>

      {/* Menu Icon for Mobile */}
      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/61/61112.png"
            alt="menu-icon"
            className="w-8 h-8"
          />
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-orange-300 shadow-md md:hidden">
          <ul className="flex flex-col items-start space-y-2 p-4 font-semibold text-lg">
            <li>Home</li>

            <li>Cart</li>

            <li>Order</li>

            {/* <li>username</li> */}
            <li>
              <button
                onClick={HandleLogin}
                className="bg-red-500 rounded-lg p-1 hover:bg-orange-500
                text-white"
              >
                {" "}
                Login
              </button>
            </li>
            <li>
              <button
                className="bg-blue-500 rounded-lg p-1 hover:bg-blue-300 text-white"
                onClick={HandleSignup}
              >
                Signup
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
