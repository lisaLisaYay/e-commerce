import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import {addItem, clearCart,deleteCartItem} from "./cartSlice"
import { useDispatch} from "react-redux"

const CartItems =({cartItems})=>{
    const dispatch = useDispatch()
    return (
    <div>
        <div>{cartItems.map((item)=>{
        return(
            <div key={item.id} className="single-cart-item">
                <div className="cart-item-left">
                    <div><button className="delete-btn" onClick={()=>dispatch(deleteCartItem({id:item.id}))}><MdDelete /></button></div>
                    <div className="img-container">
                        <Link to={`/product/page/${item.id}`} target="_blank"><img src={item.image} alt={item.title} className="cart-img" /></Link>
                    </div>
                    <h4>{item.title}</h4>
                </div>
                <div className="cart-item-price"><p>${item.price}</p></div>
                
                <div className="item-amount-btn">
                    <button onClick={()=>dispatch(addItem({id:item.id, action:"decrease"}))}>-</button>
                    <p>{item.amount}</p>
                    <button onClick={()=>dispatch(addItem({id:item.id, action:"increase"}))}>+</button>
                </div>
            </div>
            )
        })}</div>
        <button className="btn" onClick={()=>dispatch(clearCart())}>clear all items</button>
    </div>
    )
}

export default CartItems