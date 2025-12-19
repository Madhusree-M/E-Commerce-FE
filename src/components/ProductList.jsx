import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const API = import.meta.env.VITE_BACKEND_URL;


const ProductList = () =>
{
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`${API}/products`);
        
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      };
      fetchData();
    },[]);

    if (loading) {
    return <p className="text-center mt-10">Loading orders...</p>;
  }

    return (
        <div className="mt-10 p-5 flex flex-wrap gap-5 justify-center">
        { //js
            products.map((product) =>
            {
                return(
                <ProductCard 
                    key={product.product_id} 
                    id={product._id}
                    name={product.name} 
                    image={product.image_url} 
                    description={product.description || "no desc"} 
                    price={product.selling_price}
                />
                )
            })
        }
        </div>
    )
}

export default ProductList;