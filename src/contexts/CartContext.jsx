// import React, { createContext, useContext, useReducer, useEffect } from "react";

// // Initial state (retrieved from localStorage if available)
// const initialState = JSON.parse(localStorage.getItem("cart")) || [];

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const updatedCart = [...state, { ...action.payload, quantity: 1 }];
//       localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//       return updatedCart;

//     case "REMOVE_FROM_CART":
//       const newCart = state.filter((item) => item.id !== action.payload.id);
//       localStorage.setItem("cart", JSON.stringify(newCart)); // Save to localStorage
//       return newCart;

//     case "UPDATE_QUANTITY":
//       const updatedQuantityCart = state.map((item) =>
//         item.id === action.payload.id
//           ? { ...item, quantity: action.payload.quantity }
//           : item
//       );
//       localStorage.setItem("cart", JSON.stringify(updatedQuantityCart)); // Save to localStorage
//       return updatedQuantityCart;

//     default:
//       return state;
//   }
// };

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
