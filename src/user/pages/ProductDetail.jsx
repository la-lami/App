// import { useLocation, useParams } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../../components/Navbar";
// import { useCart } from "../../contexts/CartContext";
// import React, { useEffect, useState } from "react";

// const ProductDetail = () => {
//   const location = useLocation();
//   const { id } = useParams();
//   const [product, setProduct] = useState(location.state || null);
//   const [loading, setLoading] = useState(true);
//   const { dispatch } = useCart();

//   useEffect(() => {
//     if (!product) {
//       axios
//         .get(`http://localhost:3000/smartphones/${id}`)
//         .then((response) => {
//           setProduct(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching product details:", error);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [id, product]);

//   const handleAddToCart = () => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//   };

//   if (loading) {
//     return (
//       <>
//         <Navbar />
//         <div className="text-center mt-10">
//           <p className="text-lg font-semibold">Loading...</p>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto p-4">
//         {product ? (
//           <div className="flex flex-col items-center">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-64 h-64 object-contain rounded-md mb-4"
//             />
//             <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
//             <p className="text-lg text-gray-600 mb-2">${product.price}</p>
//             <p className="text-gray-700 text-center">{product.description}</p>
//             <button
//               onClick={handleAddToCart}
//               className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ) : (
//           <p className="text-center text-red-500">
//             Product not found! Please try again.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default ProductDetail;
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useCart } from "../../contexts/CartContext";

const ProductDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(location.state || null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();

  useEffect(() => {
    if (!product) {
      axios
        .get(`http://localhost:3000/smartphones/${id}`)
        .then((response) => {
          setProduct(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [id, product]);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-10">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {product ? (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain rounded-md shadow-md max-w-xs mx-auto"
              />
            </div>

            {/* Product Details Section */}
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                {product.name}
              </h1>
              <p className="text-2xl font-semibold text-gray-700 mb-4">
                ${product.price}
              </p>
              <p className="text-lg text-gray-800 mb-6">
                {product.description}
              </p>
              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300 text-xl"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">
            Product not found! Please try again.
          </p>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
