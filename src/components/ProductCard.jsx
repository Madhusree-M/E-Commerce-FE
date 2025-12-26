import { useNavigate } from "react-router";
import Reveal from "./Reveal";
const API = import.meta.env.VITE_BACKEND_URL;
import { toast } from "react-toastify";



const ProductCard = ({ id, name, description, image, price}) => {

    const navigate = useNavigate()

    const addToCart = async (e) => {
        e.preventDefault();

        const token = sessionStorage.getItem("token");
        
        if (!token) {
        navigate("/login", {
        state: { from: "product" }
        });
        return;
    }

    
        try {
            const response = await fetch(`${API}/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    
                    productId: id,
                    quantity: 1
                })
            });

            if (!response.ok) {
                const error = await response.json();
                console.error("Cart error:", error);
                toast.error(`Error: ${error.message || 'Failed to add to cart'}`);
                return;
            }

            toast.success("Product added to cart")
        } catch (error) {
            console.error("Network error:", error);
            toast.error("Failed to add to cart. Please try again.");
        }
    };


    const addToWishlist = async (e) => {
  e.preventDefault();

  const token = sessionStorage.getItem("token");

  if (!token) {
    navigate("/login", {
      state: { from: "product" }
    });
    return;
  }

  try {
    const res = await fetch(`${API}/wishlist/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId: id }),
    });

    if (!res.ok) {
      const error = await res.json();
       toast(error.message || "Already in wishlist");
      return;
    }

     toast.success("Added to wishlist ❤️");
  } catch (error) {
    console.error("Wishlist error:", error);
  }
};

    return (
        <Reveal>
        <div className="rounded-4xl bg-white/45 border-2 border-yellow-800
                            hover:scale-103 duration-300
                            hover:shadow-md min-h-117">


            <div className="relative">
                <img
                    src={image}
                    className="mx-auto object-cover h-80 w-80 rounded-t-4xl"/>

                <button
                    onClick={addToWishlist}
                    className="absolute top-3 right-3 bg-white/40 
                            px-2 py-1 rounded-full shadow 
                            hover:bg-rose-100 transition">
                    ❤️
                </button>
            </div>
            <h2 className="mx-4 mt-4 text-amber-950 text-2xl">{name}</h2>
            <p className="mx-4 text-sm text-amber-950/70">{description}</p>
            <div className="mx-4 flex justify-between items-center mt-5">
                <span className="font-bold text-2xl text-rose-600">₹{price}</span>
                 <button onClick={addToCart} className="px-3 py-2 bg-rose-500 text-white rounded-full text-sm">Add to Cart</button>
            </div>
        </div>
        </Reveal>
    )
}

export default ProductCard;