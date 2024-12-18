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
import { CartProvider } from "./contexts/CartContext";
import Checkout from "./user/pages/Checkout";
import Order from "./user/pages/Order";
import AdminNavbar from "./admin/pages/AdminNavbar";
import Dashboard from "./admin/pages/Dashboard";
import ManageOrders from "./admin/pages/ManagerOrders";
import ManageProducts from "./admin/pages/ManageProducts";
import ManageUsers from "./admin/pages/ManageUsers";
import Reports from "./admin/pages/Reports";
function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/admin" element={<AdminNavbar />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manageorders" element={<ManageOrders />} />
              <Route path="/manageproducts" element={<ManageProducts />} />
              <Route path="/manageusers" element={<ManageUsers />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </Router>
        </AuthProvider>
      </CartProvider>
    </>
  );
}
export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProvider } from "./context/UserContext";
// import { CartProvider } from "./context/CartContext";
// import UserRouter from "./user/UserRouter";
// import AdminRouter from "./admin/AdminRouter";
// import { AuthProvider } from "./contexts/AuthContext";
// function App() {
//   return (
//     <UserProvider>
//       <CartProvider>
//         <AuthProvider>
//           <Router>
//             <Routes>
//               <Route path="/*" element={<UserRouter />} />
//               <Route path="/admin*" element={<AdminRouter />} />
//             </Routes>
//           </Router>
//         </AuthProvider>
//       </CartProvider>
//     </UserProvider>
//   );
// }

// export default App;
