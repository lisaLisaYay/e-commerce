import OneProduct from "../products/OneProduct"

const useList =(currentList)=>{
    return(
        <div className="product-list-wrap">
            <div className="product-list">
                {currentList.map((item)=>{
                    return(<OneProduct key={item.id} product={item} />)
                })}
            </div>
        </div>
    )

}

export default useList