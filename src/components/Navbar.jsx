// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// function Navbar() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleLogout = () => {
//     logout(); // Clear user from state
//     navigate("/"); // Redirect to home
//   };

//   return (
//     <div className="flex w-screen p-4 h-[70px] bg-orange-300 shadow-lg items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/12516/12516313.png"
//           alt="logo"
//           className="w-12"
//         />
//         <p className="text-red-500 text-2xl font-bold ml-2">MOBIMART</p>
//       </div>

//       {/* Menu for large screens */}
//       <ul className="hidden md:flex space-x-4 font-semibold text-lg">
//         <NavLink to={"/"}>
//           <li>Home</li>
//         </NavLink>
//         <NavLink to={"/cart"}>
//           <li>Cart</li>
//         </NavLink>
//         <NavLink to={"/orders"}>
//           <li>Order</li>
//         </NavLink>
//       </ul>

//       {/* Search Bar */}
//       <div className="hidden md:block">
//         <input
//           type="text"
//           placeholder="Search here..."
//           className="w-[600px] rounded p-2 border border-slate-300"
//         />
//       </div>

//       {/* User Info */}
//       <ul className="hidden md:flex space-x-4 font-semibold">
//         {user ? (
//           <>
//             <li>{user.username}</li>
//             <li>
//               <button
//                 className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <button
//                 className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
//                 onClick={() => navigate("/login")}
//               >
//                 Login
//               </button>
//             </li>
//             <li>
//               <button
//                 className="bg-blue-500 rounded-lg p-1 hover:bg-blue-300 text-white"
//                 onClick={() => navigate("/signup")}
//               >
//                 Signup
//               </button>
//             </li>
//           </>
//         )}
//       </ul>

//       {/* Mobile Menu */}
//       <div className="block md:hidden">
//         <button onClick={toggleMenu}>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/61/61112.png"
//             alt="menu-icon"
//             className="w-8 h-8"
//           />
//         </button>
//       </div>

//       {/* Dropdown Menu for Mobile */}
//       {isMenuOpen && (
//         <div className="absolute top-[70px] left-0 w-full bg-orange-300 shadow-md md:hidden">
//           <ul className="flex flex-col items-start space-y-2 p-4 font-semibold text-lg">
//             <NavLink to={"/"}>
//               <li>Home</li>
//             </NavLink>
//             <NavLink to={"/cart"}>
//               <li>Cart</li>
//             </NavLink>
//             <NavLink to={"/orders"}>
//               <li>Order</li>
//             </NavLink>
//             <li>
//               <input
//                 type="text"
//                 placeholder="Search here..."
//                 className="w-full rounded p-2 border border-slate-300"
//               />
//             </li>
//             {user ? (
//               <>
//                 <li>{user.username}</li>
//                 <li>
//                   <button
//                     className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <button
//                     className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
//                     onClick={() => navigate("/login")}
//                   >
//                     Login
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className="bg-blue-500 rounded-lg p-1 hover:bg-blue-300 text-white"
//                     onClick={() => navigate("/signup")}
//                   >
//                     Signup
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import React, { useState } from "react";

function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const cartCount = (cart || []).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="flex w-screen p-4 h-[70px] bg-orange-300 shadow-lg items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/12516/12516313.png"
          alt="logo"
          className="w-12"
        />
        <p className="text-red-500 text-2xl font-bold ml-2">MOBIMART</p>
      </div>

      <ul className="hidden md:flex space-x-4 font-semibold text-lg">
        <NavLink to="/" className="block px-4 py-2 hover:text-red-500">
          Home
        </NavLink>
        <NavLink to="/cart" className="block px-4 py-2 hover:text-red-500">
          Cart {cartCount > 0 && `(${cartCount})`}
        </NavLink>
        <NavLink to="/orders" className="block px-4 py-2 hover:text-red-500">
          Order
        </NavLink>
      </ul>

      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search here..."
          className="w-[600px] rounded p-2 border border-slate-300"
        />
      </div>

      <ul className="hidden md:flex space-x-4 font-semibold">
        {user ? (
          <>
            <li>{user.username}</li>
            <li>
              <button
                className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="bg-blue-500 rounded-lg p-1 hover:bg-blue-300 text-white"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </li>
          </>
        )}
      </ul>

      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/255px-Hamburger_icon.svg.png"
            alt="menu-icon"
            className="w-8 h-8"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-start space-y-2 p-4 font-semibold text-lg">
            <NavLink to="/" className="block px-4 py-2 hover:text-red-500">
              Home
            </NavLink>
            <NavLink to="/cart" className="block px-4 py-2 hover:text-red-500">
              Cart {cartCount > 0 && `(${cartCount})`}
            </NavLink>
            <NavLink
              to="/orders"
              className="block px-4 py-2 hover:text-red-500"
            >
              Order
            </NavLink>
            <li className="w-full">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-grow rounded p-2 border border-slate-300"
                />
                <button className="bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-400">
                  Search
                </button>
              </div>
            </li>
            {user ? (
              <>
                <li>{user.username}</li>
                <li>
                  <button
                    className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    className="bg-red-500 rounded-lg p-1 hover:bg-orange-500 text-white"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="bg-blue-500 rounded-lg p-1 hover:bg-blue-300 text-white"
                    onClick={() => navigate("/signup")}
                  >
                    Signup
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
