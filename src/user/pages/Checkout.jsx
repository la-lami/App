// import React, { useState } from "react";
// import Navbar from "../../components/Navbar";
// import { useCart } from "../../contexts/CartContext";

// const CheckoutPage = () => {
//   const { cart } = useCart();
//   const [address, setAddress] = useState({
//     fullName: "",
//     phone: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate the form
//     const newErrors = {};
//     if (!address.fullName) newErrors.fullName = "Full Name is required.";
//     if (!address.phone) newErrors.phone = "Phone number is required.";
//     if (!address.street) newErrors.street = "Street is required.";
//     if (!address.city) newErrors.city = "City is required.";
//     if (!address.state) newErrors.state = "State is required.";
//     if (!address.zip) newErrors.zip = "ZIP Code is required.";
//     if (!paymentMethod) newErrors.paymentMethod = "Select a payment method.";

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Simulate submission (You can send the data to a backend here)
//     console.log("Order Submitted", { address, paymentMethod, cart });
//     alert("Order placed successfully!");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-6">Checkout</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Shipping Address */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={address.fullName}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-2"
//             />
//             {errors.fullName && (
//               <p className="text-red-500 text-sm">{errors.fullName}</p>
//             )}

//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={address.phone}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-2"
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm">{errors.phone}</p>
//             )}

//             <input
//               type="text"
//               name="street"
//               placeholder="Street Address"
//               value={address.street}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-2"
//             />
//             {errors.street && (
//               <p className="text-red-500 text-sm">{errors.street}</p>
//             )}

//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={address.city}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-2"
//             />
//             {errors.city && (
//               <p className="text-red-500 text-sm">{errors.city}</p>
//             )}

//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={address.state}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-2"
//             />
//             {errors.state && (
//               <p className="text-red-500 text-sm">{errors.state}</p>
//             )}

//             <input
//               type="text"
//               name="zip"
//               placeholder="ZIP Code"
//               value={address.zip}
//               onChange={handleInputChange}
//               className="w-full p-2 border rounded mb-2"
//             />
//             {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
//           </div>

//           {/* Payment Method */}
//           <div>
//             <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
//             <label>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Credit Card"
//                 checked={paymentMethod === "Credit Card"}
//                 onChange={handlePaymentChange}
//               />
//               Credit Card
//             </label>
//             <br />
//             <label>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="UPI"
//                 checked={paymentMethod === "UPI"}
//                 onChange={handlePaymentChange}
//               />
//               UPI
//             </label>
//             <br />
//             <label>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="Cash on Delivery"
//                 checked={paymentMethod === "Cash on Delivery"}
//                 onChange={handlePaymentChange}
//               />
//               Cash on Delivery
//             </label>
//             {errors.paymentMethod && (
//               <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//           >
//             Place Order
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useCart } from "../../contexts/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const newErrors = {};
    if (!address.fullName) newErrors.fullName = "Full Name is required.";
    if (!address.phone) newErrors.phone = "Phone number is required.";
    if (!address.street) newErrors.street = "Street is required.";
    if (!address.city) newErrors.city = "City is required.";
    if (!address.state) newErrors.state = "State is required.";
    if (!address.zip) newErrors.zip = "ZIP Code is required.";
    if (!paymentMethod) newErrors.paymentMethod = "Select a payment method.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7); // Delivery in 7 days

    const order = {
      cart,
      address,
      paymentMethod,
      date: deliveryDate.toISOString().split("T")[0],
    };

    // Save the order (update db.json or API)
    try {
      await axios.post("http://localhost:3000/orders", order);
      dispatch({ type: "CLEAR_CART" }); // Clear cart after successful order
      alert("Order placed successfully!");
      window.location.href = "/orders"; // Redirect to orders page
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={address.fullName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={address.street}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.street && (
              <p className="text-red-500 text-sm">{errors.street}</p>
            )}
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state}</p>
            )}
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={address.zip}
              onChange={handleInputChange}
              className="w-full p-2 border rounded mb-2"
            />
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === "Credit Card"}
                onChange={handlePaymentChange}
              />
              Credit Card
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={handlePaymentChange}
              />
              UPI
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Cash on Delivery"
                checked={paymentMethod === "Cash on Delivery"}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </label>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
