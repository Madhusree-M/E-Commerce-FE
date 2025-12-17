import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const API = import.meta.env.VITE_BACKEND_URL;

const Cart = () => {
    
    const [cartProducts, setCartProducts] = useState([]);
    const [quantities, setQuantities] = useState([]);

    const navigate = useNavigate();


      useEffect(() => {
        const fetchCart = async () => {
        const res = await fetch(`${API}/cart`, {
            headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
        });
        const data = await res.json();

        setCartProducts(data.cart.products ? data.cart.products : []);
        setQuantities(data.cart.products?.map(() => 1) || []);
        };
        fetchCart();
    }, []);

    // prod 1 = 150 , 100
    // prod 2 = 250 , 200

    // Summary 
        // Original price = (150 + 250) => 400
        // Discount price = (150 - 100) + (250 - 200) =>100
        // Shipping price = 50

        // Total => Original price - Discount price + Shipping price

    let originalPrice = 0;
    let discountPrice = 0;
    const shippingCharge = 50;

    
    useEffect(() => {
        setQuantities(cartProducts.map(() => 1));
    }, [cartProducts]);
        
        const increment = (index) => {
            setQuantities(prev => {
                const newQty = [...prev];
                newQty[index] += 1;
                return newQty;
            });
        };
        
        const decrement = (index) => {
            setQuantities(prev => {
                const newQty = [...prev];
                if (newQty[index] > 1) newQty[index] -= 1;
                return newQty;
            });
        };

        cartProducts.forEach((prod,index) => {
            originalPrice += prod.product.original_price * quantities[index];
            discountPrice += (prod.product.original_price - prod.product.selling_price) * quantities[index];
        })
        
        const removeProduct = async (index) => {
        try {
            // console.log("print------------",cartProducts[index].product)
            const productId = cartProducts[index].product._id;

            const res = await fetch(
            `${API}/cart/${productId}`,
            {
                method: "DELETE",
                headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            }
            );

            if (!res.ok) {
            throw new Error("Failed to delete item");
            }

            // update UI after DB success
            setCartProducts(prev => prev.filter((_, i) => i !== index));
            setQuantities(prev => prev.filter((_, i) => i !== index));

        } catch (error) {
            // console.error(error);
            alert("Unable to remove product");
        }
        };

        // EMPTY CART VIEW
if (cartProducts.length === 0) {
  return (
    <>
      <h3 className="text-3xl text-yellow-900 text-center m-5 font-bold">
        Your Cart
      </h3>
      <span className="mx-auto block m-5 w-[30%] h-1 bg-yellow-800/90 rounded-full"></span>

      <div className="flex flex-col items-center justify-center min-h-[50vh] text-yellow-900">
        <h2 className="text-4xl font-bold mb-4">Your Cart is Empty 🛒</h2>
        <p className="text-lg text-yellow-800/80 mb-6">
          Add some beautiful products to continue
        </p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-yellow-900 text-white rounded-lg text-lg"
        >
          Continue Shopping
        </button>
      </div>
    </>
  );
}



    return (
        <>
        <h3 className="text-3xl text-yellow-900 text-center m-5 font-bold">Your Cart</h3>
        <span className="mx-auto block m-5 w-[30%] h-1 bg-yellow-800/90 rounded-full" ></span>

        <div className="flex justify-between gap-5 ml-5">
            {/* image 2 products ,description , counter */}
            <div className="flex flex-col gap-5"> 
                {
                    cartProducts.map((prod,index) => 
                        <div className="bg-yellow-800/30 flex w-[1000px] gap-5 items-center p-5  rounded-md">
                            <div className="h-40 w-40 flex">
                                <img src={prod.product.image_url} className="w-full h-full object-cover"/>
                            </div>

                            <div className="flex justify-between w-full items-center">
                                <div className="flex flex-col gap-3 w-50">
                                    <h3 className="text-2xl font-bold text-yellow-900">{prod.product.name}</h3>
                                    <div className="flex gap-10">
                                        <h4 className="text-md line-through">₹{prod.product.original_price}</h4>
                                        <h4 className="text-2xl font-bold text-yellow-950">₹{prod.product.selling_price}</h4>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mt-2">
                                    <button 
                                        onClick={() => decrement(index)} 
                                        className="px-5 py-1 bg-yellow-900 text-white rounded"
                                    >-</button>

                                    <span className="text-3xl font-bold text-yellow-800 p-5">{quantities[index]}</span>

                                    <button 
                                        onClick={() => increment(index)} 
                                        className="px-5 py-1 bg-yellow-900 text-white rounded"
                                    >+</button>
                                </div>
                                <button 
                                    onClick={() => removeProduct(index)}
                                    className="px-3 py-2 bg-yellow-900 text-white rounded-sm text-center text-white/70">
                                    <svg className="w-8 h-8 text-white/60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                    </svg>

                                </button>
                                
                            </div>
                        </div>
                    )
                }
            </div>

            {/* calculate => order summary  */}
            <div className="bg-yellow-800/30 text-yellow-800/90 w-full flex flex-col items-center p-5 mr-5  rounded-md">
                <h3 className="font-bold text-2xl mb-5 text-yellow-950/90">Order Summary</h3>
                <div className="grid grid-cols-[150px_70px] gap-3 text-xl">
                    <p>Original Price </p>
                    <p>: {originalPrice}</p>

                    <p>Discount Price</p>
                    <p>: {discountPrice}</p>

                    <p>Shipping Charge</p>
                    <p>: {shippingCharge}</p>
                </div>
                <span className="m-5 w-[80%] h-1 bg-yellow-800/90"></span>
                    <div className="grid grid-cols-[180px_90px] gap-3 text-xl">
                        <p className="text-center">Total Amount</p>
                        <p>: {originalPrice - discountPrice + shippingCharge}</p>
                    </div>
                <span className="m-5 w-[80%] h-1 bg-yellow-800/90"></span>
                <button
                    onClick={() =>
                        navigate("/checkout", {
                        state: {
                            cartProducts,
                            quantities,
                            totalAmount: originalPrice - discountPrice + shippingCharge
                        }
                        })
                    }
                    className="px-3 bg-yellow-900 h-12 text-white rounded-sm w-[80%]">
                    Checkout
                </button>
            </div>
        </div>
        </>
    );
}

export default Cart;