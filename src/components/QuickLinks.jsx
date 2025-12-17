import { Link } from "react-router";

const QuickLinks = () => {
    return(
        <div className="my-10 flex flex-wrap justify-center gap-8">
            <Link to={`/products`}>
            <button className="w-30 py-2 bg-yellow-800/70 text-white/90 rounded-sm duration-200
                                hover:scale-105 hover:bg-yellow-900/90 hover:shadow-md hover:shadow-black/50">
                View All
            </button>
            </Link>

            <button className="w-30 py-2 bg-yellow-800/70 text-white/90 rounded-sm duration-200
                                hover:scale-105 hover:bg-yellow-900/90 hover:shadow-md hover:shadow-black/50">
                Toys
            </button>

            <button className="w-30 py-2 bg-yellow-800/70 text-white/90 rounded-sm duration-200
                                hover:scale-105 hover:bg-yellow-900/90 hover:shadow-md hover:shadow-black/50">
                Keychains
            </button>

            <button className="w-30 py-2 bg-yellow-800/70 text-white/90 rounded-sm duration-200
                                hover:scale-105 hover:bg-yellow-900/90 hover:shadow-md hover:shadow-black/50">
                Gift Sets
            </button>

            <button className="w-40 py-2 bg-yellow-800/70 text-white/90 rounded-sm duration-200
                                hover:scale-105 hover:bg-yellow-900/90 hover:shadow-md hover:shadow-black/50">
                Custom Orders
            </button>
        </div>
    );
}
export default QuickLinks;