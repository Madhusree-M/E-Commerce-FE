const Footer = () => {
    return(
        <footer className="bg-yellow-900/70 text-white/75 py-10 mt-10 shadow-xl shadow-black/20">
        <div className="max-w-6xl flex mx-auto gap-10 justify-between">

            <div>
                <h2 className="text-3xl font-bold text-white/90 mb-2">Vasanthi Knots</h2>
                <p className="text-white/70 text-sm pl-1">
                    Crochets crafted with ❤️ and care
                </p>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white/90 mb-3">Quick Links</h3>
                <ul className="space-y-2 text-lg pl-1">
                    <li><a href="#" className="hover:text-white transition">Home</a></li>
                    <li><a href="#" className="hover:text-white transition">Products</a></li>
                    <li><a href="#" className="hover:text-white transition">Gallery</a></li>
                    <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white/90 mb-3">Support</h3>
                <ul className="space-y-2 text-lg pl-1">
                    <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                    <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
                    <li><a href="#" className="hover:text-white transition">Return Policy</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-semibold text-white/90 mb-3">Follow Us</h3>
                <div className="flex gap-4 text-2xl">
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-youtube"></i>
                </div>
            </div>
        </div>

        
        <div className="text-center text-white/70 text-sm mt-8 border-t border-white/10-700 pt-4">
            <p>© 2025 Vasanthi Knots — All Rights Reserved.</p>
        </div>
    </footer>
    );
}

export default Footer;