import useList from "../hooks/useList"
import { filterProduct, categoryStatus } from "./productsSlice"
import { useSelector } from "react-redux"
import FilterButtons from "./FilterButtons"

const CategoryProducts = ()=>{
    const productsByCategory = useSelector(filterProduct)
    const status = useSelector(categoryStatus)

    const currentList = useList(productsByCategory)

    return (
        <div className="page-bdy product-page">
            <FilterButtons/>
            {status==="loading"? <h1>Loading...</h1>:currentList}
        </div>
    )
}

export default CategoryProducts