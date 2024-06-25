import { useSelector } from "react-redux"
import { allProducts } from "./productsSlice"
import useList from "../hooks/useList"
import FilterButtons from "./FilterButtons"


const ProductList = ()=>{
    const allproducts = useSelector(allProducts)

    const renderList = useList(allproducts)

    return (<div className="page-bdy product-page">
                <FilterButtons/>
                {renderList}
            </div>)
}

export default ProductList