import { useSelector} from "react-redux"
import {totalItemsPrice} from "./cartSlice"
import { totalItemsAmount } from "./cartSlice"

const CartCheckOut =({onPayment})=>{
    const totalprice = useSelector((state)=>totalItemsPrice(state)).toFixed(2)
    const totalAmount = useSelector((state)=>totalItemsAmount(state))

    return(
        <div className="cart-check-content">
            <button className="btn" onClick={onPayment}>payment</button>
            <div className="total-information">
                <h2>Your cart</h2>
                <div className="double"><p>Items({totalAmount}):</p> <p>${totalprice}</p></div>
                <div className="double">Login to use a coupon</div>
            </div>
            <h2>${totalprice}</h2>
        </div>
    )
}

export default CartCheckOut