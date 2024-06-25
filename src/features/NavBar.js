import { Link } from "react-router-dom"
import { FaShopware } from "react-icons/fa6";
import { totalItemsAmount } from "./cart/cartSlice";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const NavBar =()=>{

    const cart = useSelector((state=>totalItemsAmount(state)))

    const ref = useRef()

    useEffect(()=>{
        window.addEventListener("scroll",(e)=>{
            const top = window.scrollY
            if(top>50){
                ref.current.style.background= "rgb(225,225,225,0.95)"
                ref.current.style.boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"  
            } else {
                ref.current.style.background= "transparent"
                ref.current.style.boxShadow= "none"
            }
        })
    },[])

    return(
    <nav ref={ref}>
        <div className="nav-wrap">
            <Link to="/" className="logo-link">
                <div className="logo">
                    <FaShopware className="logo-img" />
                    <p className="logo-text">store</p>
                </div>
            </Link>
            <div className="link-wrap">
                <Link to={"/"} className="link">Home</Link>
                <div className="link-container">
                        <p className="cart-count">{cart}</p>
                        <Link to="cart" className="link">Cart</Link>
                </div>
            </div>
                
        </div>  
    </nav>)
}

export default NavBar