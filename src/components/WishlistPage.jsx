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
        setWishlist(data.wishlist.items || []);
        console.log("dataitems=====>",data.wishlist.items)
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
      <h3 className="text-3xl text-yellow-900 text-center m-5 font-bold">
        Wishlist
      </h3>

      <span className="mx-auto block m-5 w-[30%] h-1 bg-yellow-800/90 rounded-full"></span>

      <div className="flex flex-col gap-6 px-5 mb-10">
        {wishlist.map((item) => (
          <Reveal key={item.product._id}>
            <div className="bg-yellow-800/30 flex w-[80%] mx-auto gap-5 items-center 
             p-5 rounded-md">
              {/* Product Image */}
              <div className="h-40 w-40 flex">
                <img
                  src={item.product.image_url}
                  alt={item.product.name}
                  className="w-full h-full object-cover rounded-md 
                             border border-yellow-800/20"
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-3 w-3/5 my-auto mx-6">
                  <h3 className="text-2xl font-bold text-yellow-900">
                    {item.product.name}
                  </h3>

                  <p className="text-sm text-yellow-800/80">
                    {item.product.description}
                  </p>

                  <h4 className="text-2xl font-bold text-yellow-950">
                    ₹{item.product.selling_price}
                  </h4>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 items-end pr-5">
                  <button
                    onClick={() => moveToCart(item.product._id)}
                    className="px-3 py-2 bg-yellow-800/90 text-white  rounded-sm text-center text-white/70"
                  >
                   <svg class="w-8 h-8 text-white/90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                  </svg>

                  </button>

                  <button 
                      onClick={() => removeFromWishlist(index)}
                      className="px-3 py-2 bg-yellow-800/90 text-white  rounded-sm text-center text-white/70">
                      <svg className="w-8 h-8 text-white/90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                      </svg>

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
