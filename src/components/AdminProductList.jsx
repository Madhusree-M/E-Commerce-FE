import { useEffect, useState } from "react";
import AdminProductCard from "./AdminProductCard";

const AdminProductList = ({products,setEditProduct,handleDelete}) => {

    return(
    <div className="mt-10 p-5 flex flex-wrap gap-5 justify-center">
      {products.map((product) => (
        <AdminProductCard
          key={product.product_id}
          id={product.product_id}
          name={product.name}
          image={product.image_url}
          description={product.description}
          price={product.sellingPrice}

          setEditProduct={setEditProduct}
          handleDelete={handleDelete}
        />
      ))}
    </div>
    )
}

export default AdminProductList;