import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Reveal from "./Reveal";

const API = import.meta.env.VITE_BACKEND_URL;

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlist = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(`${API}/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        console.log("data====>>>>>",data)
        setWishlist(data.items || []);
      } catch (error) {
        console.error("Wishlist fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [navigate]);


  const removeFromWishlist = async (productId) => {
    try {
      const token = sessionStorage.getItem("token");

      await fetch(`${API}/wishlist/remove/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setWishlist((prev) =>
        prev.filter((item) => item.product._id !== productId)
      );
    } catch (error) {
      console.error("Remove wishlist error:", error);
    }
  };

  const moveToCart = async (productId) => {
    try {
      const token = sessionStorage.getItem("token");

      await fetch(`${API}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          quantity: 1,
        }),
      });

      await removeFromWishlist(productId);

      navigate("/cart");
    } catch (error) {
      console.error("Move to cart error:", error);
    }
  };

  if (loading) {
    return (
      <p className="text-center mt-10 text-amber-900 text-lg">
        Loading wishlist...
      </p>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-amber-900">
          Your wishlist is empty ❤️
        </h3>
        <p className="text-amber-800/70 mt-3">
          Save items you love and buy them later.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-3xl text-amber-950 text-center m-5 font-bold">
        My Wishlist
      </h3>

      <span className="mx-auto block m-5 w-[30%] h-1 bg-amber-800/90 rounded-full"></span>

      <div className="flex flex-col gap-6 px-5 mb-10">
        {wishlist.map((item) => (
          <Reveal key={item.product._id}>
            <div
              className="bg-amber-50 border border-yellow-800/30 
                         flex gap-5 p-6 items-center rounded-3xl 
                         shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              <div className="h-40 w-40">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover rounded-2xl 
                             border border-yellow-800/20"
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-3 w-3/5 my-auto mx-6">
                  <h3 className="text-2xl font-bold text-amber-950">
                    {item.product.name}
                  </h3>

                  <p className="text-sm text-amber-900/70">
                    {item.product.description}
                  </p>

                  <h4 className="text-2xl font-bold text-rose-600">
                    ₹{item.product.price}
                  </h4>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 items-end pr-5">
                  <button
                    onClick={() => moveToCart(item.product._id)}
                    className="px-6 py-2 bg-amber-900 text-white 
                               rounded-full hover:bg-amber-800 transition"
                  >
                    Move to Cart
                  </button>

                  <button
                    onClick={() => removeFromWishlist(item.product._id)}
                    className="text-sm text-rose-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
};

export default WishlistPage;
