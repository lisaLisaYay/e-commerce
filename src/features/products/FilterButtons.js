import { useDispatch, useSelector  } from "react-redux"
import { fetchCategory, allProducts } from "./productsSlice"
import { Link } from "react-router-dom"

const FilterButtons = ()=>{
    const dispatch = useDispatch()
    const allproducts = useSelector(allProducts)
    
    const filterBtn= [...new Set( allproducts.map((item)=>item.category))]

    return(
       <div className="filter-btn-container">
        <div className="filter-btn">
        <Link to="/product" className="category-links">all products</Link>
        {filterBtn.map((item)=>{
            return <Link to={`/product/category/${item}`} key={item} className="category-links" onClick={()=>dispatch(fetchCategory(item))}>{item}</Link>
        })}
        </div>
       </div>
    )
}

export default FilterButtons