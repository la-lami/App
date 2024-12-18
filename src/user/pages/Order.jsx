import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        console.log("Fetched orders:", response.data); // Debugging
        setOrders(response.data || []); // Safeguard against undefined data
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]); // Fallback
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Product</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) && orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.cart?.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-2"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-contain"
                        />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.address
                      ? `${order.address.street}, ${order.address.city}, ${order.address.state}, ${order.address.zip}`
                      : "Address not available"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {order.cart?.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    $
                    {order.cart
                      ?.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No orders found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Order;
