import { useLocation, useNavigate } from "react-router";
import Reveal from "./Reveal";
const API = import.meta.env.VITE_BACKEND_URL;


const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { cartProducts, quantities, totalAmount } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const orderItems = cartProducts.map((item, index) => ({
      product_id: item.product.product_id,
      name: item.product.name,
      price: item.product.selling_price,
      quantity: quantities[index],
      image_url: item.product.image_url
    }));

    const orderData = {
      items: orderItems,
      payment_method: form.payment.value,
      delivery_address: {
        name: form.name.value,
        phone: form.phone.value,
        street: form.street.value,
        city: form.city.value,
        state: form.state.value,
        pincode: form.pincode.value
      }
    };

    const res = await fetch(`${API}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      },
      body: JSON.stringify(orderData)
    });

    if (res.ok) {
      navigate("/orders");
    } else {
      alert("Order failed");
    }
  };

  return (
    <Reveal>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col rounded-lg bg-yellow-800/20 
                 w-[500px] mt-6 mx-auto px-10 py-10 gap-6 
                 border border-yellow-900/20 shadow-black/20 shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-yellow-800">
        Checkout
      </h2>

      <div className="flex flex-col gap-4">
        <input name="name" placeholder="Full Name" required
          className="p-3 border border-yellow-800/50 rounded-lg text-lg" />

        <input name="phone" placeholder="Phone Number" required
          className="p-3 border border-yellow-800/50 rounded-lg text-lg" />

        <input name="street" placeholder="Street Address" required
          className="p-3 border border-yellow-800/50 rounded-lg text-lg" />

        <input name="city" placeholder="City" required
          className="p-3 border border-yellow-800/50 rounded-lg text-lg" />

        <input name="state" placeholder="State" required
          className="p-3 border border-yellow-800/50 rounded-lg text-lg" />

        <input name="pincode" placeholder="Pincode" required
          className="p-3 border border-yellow-800/50 rounded-lg text-lg" />

        <select name="payment" required
          className="p-3 border border-yellow-800/50 rounded-lg text-lg">
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="CARD">Card</option>
        </select>
      </div>

      <button
        className="mx-auto py-3 w-[70%] bg-yellow-800 
                   text-white/80 rounded-lg text-xl font-bold mt-3"
      >
        Place Order (₹{totalAmount})
      </button>
    </form>
    </Reveal>
  );
};

export default Checkout;
