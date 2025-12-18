import React, { useEffect, useState } from "react";
import OrderStepper from "./OrderStepper";
import Reveal from "./Reveal";
const API = import.meta.env.VITE_BACKEND_URL;


const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = sessionStorage.getItem("token");

        const res = await fetch(`${API}/orders`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        const data = await res.json();
        console.log("data-------------",data.orders)
        setOrders(data.orders || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p className="text-center mt-10">No orders found</p>;
  }

  return (
    <>
      <h3 className="text-3xl text-yellow-900 text-center m-5 font-bold">
        Your Orders
      </h3>
      <span className="mx-auto block m-5 w-[30%] h-1 bg-yellow-800/90 rounded-full"></span>

      <div className="flex flex-col gap-5 px-5 mb-10 justify-center">
        {orders.map(order =>
          order.items.map((prod, index) => (
            <Reveal>
            <div
              key={`${order._id}-${index}`}
              className="bg-yellow-800/20 flex gap-5 p-5 items-center rounded-md shadow"
            >
              {/* Product Image */}
              <div className="h-40 w-40 flex">
                <img
                  src={prod.image_url}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-3 w-3/5 my-auto mx-10">
                  <h3 className="text-2xl font-bold text-yellow-900">
                    {prod.name}
                  </h3>

                  <div className="flex gap-10 mt-2 mb-5">
                    <h4 className="text-2xl font-bold text-pink-900">
                      ₹{prod.price}
                    </h4>
                    <p className="text-md text-yellow-900/80">
                      Qty: {prod.quantity}
                    </p>
                  </div>
                <OrderStepper status={order.order_status} />
                </div>


                {/* Order Info */}
                <div className="flex flex-col gap-2 items-end pr-5">
                  <p className="text-lg font-semibold text-yellow-950">
                    Status : {" "}
                    <span className="font-bold text-green-800">
                      {order.order_status}
                    </span>
                  </p>

                  <p className="text-md text-yellow-900/80">
                    Order Date:{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                  <p className="text-md text-yellow-900/80">
                    Order ID: {order.order_id}
                  </p>

                  <p className="text-xl font-bold text-yellow-900 mt-3">
                    Total: ₹{order.total_amount}
                  </p>

                  <button className="mt-3 px-5 py-2 bg-yellow-900 text-white rounded-md">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            </Reveal>
          ))
        )}
      </div>
    </>
  );
};

export default OrdersPage;
