import "./App.css";
import ProductList from "./features/products/ProductList";
import Cart from "./features/cart/Cart"
import SingleProductPage from "./features/products/SingleProductPage"
import CategoryProducts from "./features/products/CategoryProducts";
import FrontPage from "./features/FrontPage";
import Layout from "./Layout"
import { Routes, Route  } from "react-router-dom";
import PayedDisplay from "./features/PayedDisplay";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element = {<FrontPage/>}/>
          <Route path="product">
            <Route index element ={<ProductList/>}/>
            <Route path="page/:id" element={<SingleProductPage/>}/>
            <Route path="category/:category" element={<CategoryProducts/>}/>
          </Route>
          <Route path="cart" element={<Cart/>}/>
          <Route path="complete" element={<PayedDisplay/>}/>
        </Route>
      </Routes>
  );
}

export default App;
