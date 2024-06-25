import { Outlet } from "react-router-dom"
import NavBar from "./features/NavBar"
import Footer from "./features/Footer"

const Layout = ()=>{
    return(
        <>
        <div className="body">
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
        </>
    )
}

export default Layout