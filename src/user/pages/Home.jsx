import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";
function Home() {
  const [smartphones, setSmartphones] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State to show a loading spinner or text
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from db.json via json-server
    axios
      .get("http://localhost:3000/smartphones") // Endpoint served by json-server
      .then((response) => {
        setSmartphones(response.data); // Set fetched data into state
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch products."); // Handle error
        setLoading(false);
      });
  }, []);

  // Display loading message while fetching data
  if (loading) {
    return <p className="text-center text-lg">Loading products...</p>;
  }

  // Display error message if fetching fails
  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Mobile Phones</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {smartphones.map((phone) => (
            <Link to={`/product/${phone.id}`} key={phone.id}>
              <div className="border rounded-lg shadow-sm p-3 flex flex-col items-center hover:shadow-md transition">
                {/* Product Image */}
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="w-24 h-24 object-cover mb-3"
                />
                {/* Product Details */}
                <h2 className="text-base font-semibold text-center">
                  {phone.name}
                </h2>
                <p className="text-sm text-gray-500 text-center">
                  {phone.specs}
                </p>
                <p className="text-lg font-bold text-orange-500">
                  ${phone.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
