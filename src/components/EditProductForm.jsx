// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router";

// const EditProductForm = (props) => {
//   const { id } = useParams();  // get product id from URL
//   const navigate = useNavigate();


//   const [name , setName] = useState('')
//   const [price , setPrice] = useState('')
//   const [description , setDescription] = useState('')
//   const [image , setImage] = useState('')


//   // Fetch existing product data
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch(`http://localhost:3000/products/${id}`);
//       const data = await res.json();
      
//       setName(data.name || '');
//         setPrice(data.price || 0);
//         setDescription(data.description || '');
//         setImage(data.image || '');

//     };

        
//         fetchData();
//     },[id]);

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedProduct = {
//       name,
//       price,
//       description,
//       image
//     };


//     await fetch(`http://localhost:3000/products/edit/${id}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedProduct)
//     });

//     props.setProducts(prev => prev.map(p => p.id === id ? updatedProduct : p));
//     props.setEditProduct(null); // close edit form
//     alert("Product updated successfully!");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mx-auto max-w-xl p-5">
//       <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

//       <input 
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value )}
//         className="border p-2 mb-3 w-full"
//       />

//       <input 
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(Number(e.target.value))}
//         className="border p-2 mb-3 w-full"
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value )}
//         className="border p-2 mb-3 w-full"
//       />

//       <input 
//         type="text"
//         placeholder="Image URL"
//         value={image}
//         onChange={(e) => setImage(e.target.value )}
//         className="border p-2 mb-3 w-full"
//       />

//       <button type="submit" className="bg-yellow-800 text-white px-4 py-2 rounded">
//         Update Product
//       </button>
//     </form>
//   );
// };

// export default EditProductForm;


import { useState } from "react";
const API = import.meta.env.VITE_BACKEND_URL;


const EditProductForm = ({ editProduct, setEditProduct, setProducts }) => {

  const [name, setName] = useState(editProduct.name);
  const [description, setDescription] = useState(editProduct.description || "");
  const [imageURL, setImageURL] = useState(editProduct.image || editProduct.image_url);
  const [category, setCategory] = useState(editProduct.category || "");
  const [originalPrice, setOriginalPrice] = useState(editProduct.original_price || "");
  const [sellingPrice, setSellingPrice] = useState(editProduct.selling_price || "");
  const [ratings, setRatings] = useState(editProduct.ratings || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      description,
      image_url: imageURL,
      category,
      original_price: Number(originalPrice),
      selling_price: Number(sellingPrice),
      ratings: Number(ratings),
    };

    const res = await fetch(
      `${API}/products/${editProduct.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      }
    );

    const data = await res.json();

    if (res.ok) {
      // ✅ update UI instantly
      setProducts(prev =>
        prev.map(p =>
          p.product_id === editProduct.id ? data : p
        )
      );

      setEditProduct(null);
      alert("Product updated successfully!");
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="w-[800px] mx-auto my-10 bg-yellow-800/20 p-6 flex flex-col gap-4 rounded-lg"
    >
      <h2 className="text-3xl font-bold">Edit Product</h2>

      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="p-4 border rounded" />

      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="p-4 border rounded" />

      <input value={imageURL} onChange={e => setImageURL(e.target.value)} placeholder="Image URL" className="p-4 border rounded" />

      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" className="p-4 border rounded" />

      <input type="number" value={originalPrice} onChange={e => setOriginalPrice(e.target.value)} placeholder="Original Price" className="p-4 border rounded" />

      <input type="number" value={sellingPrice} onChange={e => setSellingPrice(e.target.value)} placeholder="Selling Price" className="p-4 border rounded" />

      <input type="number" step="0.1" value={ratings} onChange={e => setRatings(e.target.value)} placeholder="Ratings" className="p-4 border rounded" />

      <div className="flex gap-4">
        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Update
        </button>

        <button
          type="button"
          onClick={() => setEditProduct(null)}
          className="bg-gray-400 text-white px-6 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
