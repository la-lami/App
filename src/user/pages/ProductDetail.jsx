// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// function ProductDetail() {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null); // State for product details
//   const [loading, setLoading] = useState(true); // State to show a loading spinner
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     // Fetch product details based on ID
//     axios
//       .get(`http://localhost:3000/smartphones/${id}`) // Endpoint for single product
//       .then((response) => {
//         setProduct(response.data); // Set fetched product into state
//         setLoading(false); // Stop loading
//       })
//       .catch((err) => {
//         console.error("Error fetching product details:", err);
//         setError("Failed to load product details.");
//         setLoading(false);
//       });
//   }, [id]);

//   // Show loading while fetching data
//   if (loading) {
//     return <p className="text-center text-lg">Loading product details...</p>;
//   }

//   // Show error message on failure
//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       {product && (
//         <div className="p-6">
//           <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center border rounded-lg shadow-lg">
//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-48 h-48 object-cover mb-4 md:mb-0 md:mr-6"
//             />
//             {/* Product Details */}
//             <div className="flex-1">
//               <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
//               <p className="text-gray-600 mb-2">{product.specs}</p>
//               <p className="text-2xl text-orange-500 font-bold mb-4">
//                 {product.price}
//               </p>
//               <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {/* <Footer /> */}
//     </>
//   );
// }

// export default ProductDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State for product details
  const [loading, setLoading] = useState(true); // State to show a loading spinner
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch product details based on ID
    axios
      .get(`http://localhost:5000/smartphones/${id}`) // Endpoint for single product
      .then((response) => {
        setProduct(response.data); // Set fetched product into state
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details.");
        setLoading(false);
      });
  }, [id]);

  // Function to add product to cart
  const addToCart = () => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if product already exists in cart
    const isProductInCart = existingCartItems.some(
      (item) => item.id === product.id
    );
    if (isProductInCart) {
      alert("Product is already in the cart!");
      return;
    }

    // Add product to cart
    const updatedCart = [...existingCartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };

  // Show loading while fetching data
  if (loading) {
    return <p className="text-center text-lg">Loading product details...</p>;
  }

  // Show error message on failure
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <Navbar />
      {product && (
        <div className="p-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center border rounded-lg shadow-lg">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 object-cover mb-4 md:mb-0 md:mr-6"
            />
            {/* Product Details */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-2">{product.specs}</p>
              <p className="text-2xl text-orange-500 font-bold mb-4">
                {product.price}
              </p>
              <button
                onClick={addToCart} // Call the addToCart function
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default ProductDetail;
