import { Outlet } from "react-router"
import Navbar from "../components/navbar"
import Footer from "../components/Footer";

const HomeLayout = () => {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default HomeLayout;