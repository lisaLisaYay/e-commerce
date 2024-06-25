import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PayedDisplay = ()=>{

    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },3000)
    },[navigate])

    return(
        <div className="page-bdy complete">
            <div className="complete-wrap">
                <div className="complete-container">
                    <div className="complete-text-wrap">
                    <div className="complete-text">
                        <h1>Thank you</h1>
                        <h2>for your order!</h2>
                    </div>
                    <p>Check your e-mail for a 10% coupon for your next order!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayedDisplay