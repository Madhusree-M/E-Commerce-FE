import { Link, useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const status = sessionStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-15 bg-yellow-800/40 text-yellow-900 text-xl">

      {/* LOGO */}
      <div className="flex gap-5 items-center font-bold">
        <i className="bi bi-bag-heart-fill text-3xl"></i>
        <p>Vasanthi Knots</p>
      </div>

      {/* LINKS */}
      <div className="flex justify-center gap-20 py-7">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/">Contact</Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative">

        {/* IF NOT LOGGED IN */}
        {!isLoggedIn && (
          <Link
            to="/login"
            className="bg-yellow-800/70 px-10 py-3 text-white/80 rounded-md"
          >
            Login
          </Link>
        )}

        {/* IF LOGGED IN */}
        {isLoggedIn && (
          <>
            {/* PROFILE ICON */}
            <button
              onClick={() => setOpen(!open)}
              className="bg-yellow-900 text-white w-12 h-12 rounded-full flex items-center justify-center"
            >
              <i className="bi bi-person-fill text-md text-800/40"></i>
            </button>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-md text-lg z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-3 hover:bg-yellow-700/20"
                >
                  My Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-3 hover:bg-yellow-700/20"
                >
                  My Orders
                </Link>
                <Link
                  to="/wishlist"
                  className="block px-4 py-3 hover:bg-yellow-700/20"
                >
                  Wishlist
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 hover:bg-red-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;
