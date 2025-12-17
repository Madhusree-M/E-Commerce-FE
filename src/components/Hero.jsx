import ProductCard from "./ProductCard";

const Hero = ({heroProducts}) => {
    return (
        <>
        <h1 className="text-center font-bold text-3xl text-yellow-900">Top Selling Products</h1>
        <span className="mx-auto block m-5 w-[30%] h-1 bg-yellow-800/90 rounded-full" ></span>

        <div className="mt-5 p-5 flex flex-wrap gap-5 justify-center">
        { //js
            heroProducts.map((product) =>
            {
                return(
                <ProductCard 
                    key={product.id} 
                    name={product.name} 
                    image={product.image} 
                    description={product.description} 
                    price={product.price}/>
                )
            })
        }
        </div>
        </>
    )
}

export default Hero;