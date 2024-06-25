import { Link} from "react-router-dom"
import { addToCart, } from "../cart/cartSlice"
import { useDispatch,} from "react-redux"
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const OneProduct = ({product})=>{

    const {id, image, price, rating, title} = product

    const [button, setButton] = useState("add to cart")

    const dispatch = useDispatch()

    const handleAdd = ()=>{
        dispatch(addToCart(product))

        setButton("added")

        setTimeout(() => {
            setButton("add to cart")
        }, 100);
    }

    return(
        <div className="product-wrap">
            <Link to={`/product/page/${id}`}><img src={image} alt={title} className="product-img-mini"/></Link>
            <div>
            <Link to={`/product/page/${id}`} className="item-title"><h4>{title}</h4></Link>
                <div className="product-price"><p >${price}</p></div>
                <div className="product-rating">
                    <FaStar className="star"/>
                    <p>{rating.rate} <span className="count"> {rating.count} bought</span></p>
                </div>
            </div>
            <button onClick={handleAdd} className="btn" >{button}</button>
        </div>
        
    )
}

export default OneProduct