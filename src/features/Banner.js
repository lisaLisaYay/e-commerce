import img1 from "../img/img2.jpg"
import { Link } from "react-router-dom"

const Banner =()=>{
    return (
    <div className="banner-wrap">
            <div className="banner-body"><img src={img1} alt="banner" /></div>
                <div className="banner-info">
                    <p className="banner-title">About our products</p>
                    <p className="banner-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quam dicta minus blanditiis eius reprehenderit architecto reiciendis dolorem, voluptates debitis facilis illum ad velit perferendis rerum inventore fugiat! Maxime accusamus fugiat hic maiores voluptas quisquam possimus, consequuntur mollitia impedit doloribus.</p>
                    <Link className="banner-btn" to={"product"}>See More</Link>
                </div>
    </div>)
}

export default Banner