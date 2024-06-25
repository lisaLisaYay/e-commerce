import { useParams } from "react-router-dom"
import { fetchSingleProduct, singleProduct, productStatus,fetchCategory} from "./productsSlice"
import { addToCart } from "../cart/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa6";

const SingleProductPage = ()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(singleProduct)
    const {category, description, image, price, rating, title} = product
    const status = useSelector(productStatus)

    const handleAdd =()=>{
        dispatch(addToCart(product))
    }

    useEffect(()=>{
        dispatch(fetchSingleProduct(id))
    },[id, dispatch])
    return(
        <div  className="page-bdy single-body">
            <div className="single-body-wrap">
                {
                status==="loading"? <h1>Loading...</h1>:
                <div className="single-product-container">
                    <img src={image} alt={title} className="product-img-full"/>
                    <div className="single-product-info">
                        <h2 className="single-title">{title}</h2>
                        <p className="single-price">${price}</p>
                        {rating?<div className="single-rating"> <p><FaStar className="star"/>{rating.rate}</p><p >{rating.count} reviews</p></div>:<p>no rating</p>}
                        <p className="single-desc">{description}</p>
                        <Link to={`/product/category/${category}`} onClick={()=>dispatch(fetchCategory(category))}>See more of {category}</Link>
                        <button className="btn" onClick={handleAdd}>add to cart</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default SingleProductPage