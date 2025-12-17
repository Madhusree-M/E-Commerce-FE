import { useNavigate } from "react-router";
const API = import.meta.env.VITE_BACKEND_URL;


const ProductCard = ({ id, name, description, image, price}) => {

    const navigate = useNavigate()

    const addToCart = async (e) => {
    e.preventDefault();
    try {
        console.log("Id---------",id)
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
            alert(`Error: ${error.message || 'Failed to add to cart'}`);
            return;
        }

        navigate("/cart");
    } catch (error) {
        console.error("Network error:", error);
        alert("Failed to add to cart. Please try again.");
    }
};
    return (
        <div className="rounded-4xl bg-white/45 border-2 border-yellow-800
                            hover:scale-103 duration-300
                            hover:shadow-md min-h-117">


            <img src={image} className="mx-auto object-cover h-80 w-80 rounded-t-4xl"/>
            <h2 className="mx-4 mt-4 text-amber-950 text-2xl">{name}</h2>
            <p className="mx-4 text-sm text-amber-950/70">{description}</p>
            <div className="mx-4 flex justify-between items-center mt-5">
                <span className="font-bold text-2xl text-rose-600">₹{price}</span>
                 <button onClick={addToCart} className="px-3 py-2 bg-rose-500 text-white rounded-full text-sm">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;