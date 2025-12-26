import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Reveal from "./Reveal";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const API = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      const token = sessionStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const res = await fetch(`${API}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (res.ok) {
          setUser(data.user);
          setOrders(data.orders || []);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    fetchProfile();
  }, []);

  if (!user)
    return (
      <p className="text-center mt-10 text-yellow-900 font-bold">
        Loading profile...
      </p>
    );

  return (
    <Reveal>
      <div className="min-h-screen bg-yellow-50 p-10 text-yellow-900 flex flex-col items-center gap-10">

        {/* PAGE TITLE */}
        <h1 className="text-3xl font-bold text-center">My Profile</h1>
        <span className="w-[30%] h-1 bg-yellow-800/90 rounded-full"></span>

        {/* PROFILE CARD */}
        <div className="bg-yellow-800/20 rounded-xl shadow-lg w-full max-w-5xl p-8 flex flex-col md:flex-row gap-10">

          {/* LEFT: Avatar & Basic Info */}
          <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/3">
            <div className="w-32 h-32 rounded-full bg-yellow-900 text-white text-5xl flex items-center justify-center font-bold">
              {user.name.charAt(0)}
            </div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-yellow-950/80">{user.email}</p>
            {user.phone && <p className="text-yellow-950/80">{user.phone}</p>}
          </div>

          {/* RIGHT: Detailed Info + Actions */}
          <div className="flex flex-col gap-6 w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-lg">
              <div>
                <p className="text-yellow-950/60">Full Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-yellow-950/60">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              {user.phone && (
                <div>
                  <p className="text-yellow-950/60">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              )}
              {user.address && (
                <div>
                  <p className="text-yellow-950/60">Shipping Address</p>
                  <p className="font-medium">{user.address}</p>
                </div>
              )}
            </div>

            <div className="flex gap-5 mt-5 flex-wrap">
              <button className="bg-yellow-900 text-white px-6 py-3 rounded-md hover:bg-yellow-950">
                Edit Profile
              </button>
              <button className="border border-yellow-900 text-yellow-900 px-6 py-3 rounded-md hover:bg-yellow-100">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* ACCOUNT SUMMARY */}
        <div className="bg-yellow-800/20 text-yellow-900/90 w-full max-w-5xl p-8 rounded-xl shadow-lg flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Account Summary</h2>
          <div className="grid grid-cols-[200px_150px] gap-3 text-lg">
            <p>Total Orders:</p>
            <p>: {orders.length}</p>
            <p>Wishlist Items:</p>
            <p>: {user.wishlistCount || 0}</p>
            <p>Member Since:</p>
            <p>: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        {/* RECENT ORDERS */}
        {orders.length > 0 && (
          <div className="bg-yellow-800/20 w-full max-w-5xl p-8 rounded-xl shadow-lg flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-yellow-900">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-yellow-900">
                <thead className="bg-yellow-900/50 text-white">
                  <tr>
                    <th className="px-4 py-2">Order ID</th>
                    <th className="px-4 py-2">Items</th>
                    <th className="px-4 py-2">Total Amount</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Ordered At</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.slice(0, 5).map((order) => (
                    <tr key={order._id} className="border-b border-yellow-900/30">
                      <td className="px-4 py-2">{order.order_id}</td>
                      <td className="px-4 py-2">{order.items.length}</td>
                      <td className="px-4 py-2">₹{order.total_amount}</td>
                      <td className="px-4 py-2">{order.order_status}</td>
                      <td className="px-4 py-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </Reveal>
  );
};

export default Profile;
