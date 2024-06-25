import { useSelector } from "react-redux"
import { allProducts } from "./products/productsSlice"
import useList from "./hooks/useList"

const ProductPreview = ()=>{

    const products = useSelector(allProducts)

    const topProducts = products.filter((item)=>item.rating.rate>4).slice(0,4)
    
    return (
    <div className="preview-wrap">
        <div className="preview-container">
            <div>
            <p className="preview-text">Top products</p>
            {useList(topProducts)}
            </div>
        </div>
    </div>)
}

export default ProductPreview