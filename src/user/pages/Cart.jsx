// import React from "react";
// import Navbar from "../../components/Navbar";
// import { useCart } from "../../contexts/CartContext";

// const CartPage = () => {
//   const { cart, dispatch } = useCart();

//   const handleRemove = (id) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
//   };

//   const handleQuantityChange = (id, quantity) => {
//     if (quantity > 0) {
//       dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
//     }
//   };

//   // const totalPrice = cart.reduce(
//   //   (total, item) => total + item.price * item.quantity,
//   //   0
//   // );
//   const totalPrice = cart.reduce(
//     (total, item) => total + Number(item.price) * Number(item.quantity),
//     0
//   );
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//         {cart.length > 0 ? (
//           <div>
//             {cart.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between border-b py-4"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-contain"
//                 />
//                 <div className="flex-1 px-4">
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(item.id, parseInt(e.target.value))
//                     }
//                     className="border w-16 text-center"
//                   />
//                   <button
//                     onClick={() => handleRemove(item.id)}
//                     className="ml-4 text-red-500"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="mt-6 text-right">
//               <h2 className="text-xl font-bold">
//                 Total: ${totalPrice.toFixed(2)}
//               </h2>
//               <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-orange-600">
//                 Checkout
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">Your cart is empty!</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;import React from "react";
import Navbar from "../../components/Navbar";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1 px-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="border w-16 text-center"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 text-right">
              <h2 className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h2>
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-orange-600"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        )}
      </div>
    </>
  );
};

export default CartPage;
