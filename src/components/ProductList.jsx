import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () =>
{
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch("http://localhost:3000/products");
        
        const data = await res.json();
        setProducts(data);
      };
      fetchData();
    },[]);


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