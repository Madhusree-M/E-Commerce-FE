import { useState } from "react"

const ProductForm = ({setProducts}) => {
    
    const [productName,setProductName] = useState('')
    const [description,setDescription] = useState('')
    const [imageURL,setImageURL] = useState('')
    const [category, setCategory] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [ratings, setRatings] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProd = {
            product_id: Date.now(),
            name: productName,
            description: description,
            image_url: imageURL,
            category:category,
            original_price: Number(originalPrice),
            selling_price: Number(sellingPrice),
            ratings: Number(ratings),
        };

        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(newProd)
        });

        if (response.ok) {
            const data = await response.json();
            setProducts(prev => [...prev, data]);
            alert("Product added successfully!");
        }
        };

    return (
        <>
            <form className="w-[800px] my-10 mx-auto bg-yellow-800/20 flex flex-col gap-3 items-center p-6 shadow-lg rounded-lg"
                onSubmit={handleSubmit}>
        
            <h1 className=" text-3xl font-extrabold">Add Product</h1>
            
            <input 
                    type="text" 
                    placeholder="Product Name" 
                    className="p-5 border-2 border-yellow-800/50 rounded-md text-left w-full"
                    value = {productName}
                    onChange={(e) =>{
                        setProductName(e.target.value)
                    }}/>
                
            <input 
                    type="text" 
                    placeholder="Description" 
                    className="p-5 border-2 border-yellow-800/50 rounded-md text-left w-full"
                    value = {description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>



            <input 
                    type="text" 
                    placeholder="Image URL" 
                    className="p-5 border-2 border-yellow-800/50 rounded-md text-left w-full"
                    value = {imageURL}
                    onChange={(e) => {
                        setImageURL(e.target.value)
                    }}/>

        <input
        type="number"
        placeholder="Original Price"
        value={originalPrice}
        onChange={(e) => setOriginalPrice(e.target.value)}
        className="p-4 border rounded w-full"
        required
      />

      <input
        type="number"
        placeholder="Selling Price"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
        className="p-4 border rounded w-full"
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-4 border rounded w-full"
        required
        />

      <input
        type="number"
        step="0.1"
        placeholder="Ratings (eg: 4.5)"
        value={ratings}
        onChange={(e) => setRatings(e.target.value)}
        className="p-4 border rounded w-full"
        required
      />

            <button type="submit" className="border-1">
                Add Product
            </button>
        </form>
        </>
    )
}

export default ProductForm;