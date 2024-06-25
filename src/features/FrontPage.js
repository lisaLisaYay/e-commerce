import Banner from "./Banner"
import ProductPreview from "./ProductPreview"
import FilterButtons from "./products/FilterButtons"

const FrontPage =()=>{
    return (<div>
                <Banner/>
                <div className="front-btns">
                    <h2>Discover more:</h2>
                    <FilterButtons/>
                </div>
                <ProductPreview/>
            </div>)
}

export default FrontPage