// import ProductForm from "./ProductForm";

// const AdminPage = () => {
//     return (
//         <>
//             <ProductForm/>
//         </>
//     )
// }
// export default AdminPage;





import { useEffect, useState } from "react";
// import AdminProductList from "./AdminProductList";
import ProductForm from "./ProductForm";
import EditProductForm from "./EditProductForm";
import AdminProductList from "./AdminProductList";

const AdminPage = () => {

    // const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

  // useEffect(() => {
  //     const fetchProducts = async () => {
  //     const res = await fetch("http://localhost:3000/products");
  //     const data = await res.json();
  //     setProducts(data);
  //     };
  //     fetchProducts();
  // }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

    // DELETE function
    const handleDelete = async (id) => {
        const ok = confirm("Are you sure you want to delete?");
        if (!ok) return;

        await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE"
        });

        // setProducts(products.filter(p => p.id !== id));
        setProducts(prev => prev.filter(p => p.product_id !== id));
        
    };

    //handle add is written in productForm
    //handle update is written in EditProductForm

    return (
    <div className="p-5">
      {editProduct ? (
        <EditProductForm 
        editProduct={editProduct}
        setEditProduct={setEditProduct}
        setProducts={setProducts}
        />
      ) : (
        <ProductForm 
        setProducts={setProducts}
        />
      )}

      {/* Product List */}
      <AdminProductList 
       products={products}
        setEditProduct={setEditProduct} 
        handleDelete={handleDelete} 
      />
    </div>
  );
};

export default AdminPage;