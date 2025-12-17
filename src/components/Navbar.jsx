import { Link } from "react-router";

const Navbar = () => {
    return(
        <div className="flex items-baseline justify-between px-15 text-xl text-yellow-900 bg-yellow-800/40 text-xl">
            <div className="flex gap-5 items-baseline font-bold text-xl">
                <i className="bi bi-bag-heart-fill text-3xl"></i>
                <p>Vasanthi Knots</p>
            </div>
            <div className="flex justify-center gap-20 py-7">
                <Link to = "/" >Home</Link>
                <Link to = "/products" >Products</Link>
                <Link to = "/cart" >Cart</Link>
                <Link to = "/orders" >Orders</Link>
                <Link to = "/" >Reviews</Link>
                <Link to = "/" >Contact</Link>

            </div>
            <div>
                <Link to='/login' className="bg-yellow-800/70 px-10 py-3 text-white/80 rounded-md">Login</Link>
            </div>
        </div>
    )
}

export default Navbar;
