import {  useState } from "react"
import { useDispatch } from "react-redux"
import { postCardInfo } from "./creditCardSlice"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../cart/cartSlice"

const CreditCardForm =()=>{
    const [card, setCard] = useState({number:"", date:"", ccv:"", name:""})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChange =(e)=>{
        const id = e.target.id
        const val = e.target.value
        if (id==="date"){
            setCard({...card, [id]: val.replace(/\//g, "").substring(0, 2) +(val.length > 2 ? "/" : "") + val.replace(/\//g, "").substring(2, 4)})
        } else {
            setCard({...card, [id]:val.toUpperCase()})
        }
    }

    const validate = [card.name, card.date, card.ccv, card.number].every(Boolean)

    const onSubmit =()=> {
        if (validate) {
            dispatch(postCardInfo(card))
        }
        navigate("/complete")
        dispatch(clearCart())
    }

    return(
        <div className="page-bdy card-form-wrap">
            <div className="card-form-container">
                <form className="card-form">
                    <h2>Credit Card Information</h2>

                    <div className="card-info-start">
                        <label htmlFor="number">Card Number</label>
                        <input 
                            id="number"
                            name="number"
                            type="text" 
                            autoFocus
                            maxLength={19}
                            value={card.number.replace(/\s/g,"").replace(/(\d{4})/g, "$1 ").trim()}
                            onChange={onChange}
                            />

                            <label htmlFor="name">Card Holders</label>
                            <input 
                            id="name"
                            name="name"
                            type="text" 
                            value={card.name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="card-info-end">
                        <div className="input-field">
                            <label htmlFor="date">Expiration Date</label>
                            <input 
                            id="date"
                            name="date"
                            type="text"
                            inputMode="numeric"
                            value={card.date}
                            maxLength={5}
                            onChange={onChange}
                            />
                        </div>

                        <div className="input-field">
                            <label htmlFor="">CVV</label>
                            <input 
                            id="ccv"
                            name="ccv"
                            type="text" 
                            inputMode="numeric"
                            maxLength={3}
                            value={card.ccv}
                            onChange={onChange} />
                        </div>
                    </div>

                    

                    

                    <button type="submit" className="btn card-btn" onClick={onSubmit} disabled={!validate}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreditCardForm