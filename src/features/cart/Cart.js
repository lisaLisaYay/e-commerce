import { useSelector} from "react-redux"
import {cartItems} from "./cartSlice"
import CartItems from "./CartItems"
import CartCheckOut from "./CartCheckOut"
import { useState } from "react"
import CreditCardForm from "../Peyment/CreditCardField"

const Cart = ()=>{

    const [payment, setPayment] = useState(false)

    const onPayment =()=>{
        setPayment(true)
    }

    const cartContent = useSelector(cartItems)

    const content = 
    <div className="cart-wrap">
    <h2>Cart</h2>
        <div className="cart-body">
            <div className="cart-items">
                <CartItems cartItems={cartContent}/>
            </div>
            <div className="cart-check">
                <CartCheckOut onPayment={onPayment}/>
            </div>
        </div>
    </div>

    return(
        <div className="page-bdy cart">
            {payment && <CreditCardForm/>}
            {cartContent.length===0?<h1>Cart is empty</h1>:content}
        </div>
    )
}

export default Cart