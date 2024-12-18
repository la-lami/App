// import Signup from "./Auth/Pages/Signup";
// import Login from "./Auth/Pages/Login";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import Home from "./user/pages/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductDetail from "./user/pages/ProductDetail";
// import { UserProvider } from "./contexts/UserContext";
// function App() {
//   return (
//     <UserProvider>
//       <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <div className="flex-grow">
//           {/* <Router> */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/navbar" element={<Navbar />} />
//             {/* <Route path="/products" element={<Home />} /> */}
//             <Route path="/product/:id" element={<ProductDetail />} />
//             {/* <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/order" element={<Order />} /> */}
//           </Routes>
//         </div>
//         <Footer />
//         {/* </Router> */}
//       </div>
//     </UserProvider>
//   );
// }

// export default App;
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./user/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Auth/Pages/Login";
import Signup from "./Auth/Pages/Signup";
import ProductDetail from "./user/pages/ProductDetail";
import Cart from "./user/pages/Cart";
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
