import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/main/Main";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import { useSelector } from "react-redux";
import Login from "./Components/Login/Login";

function App() {
  const cart = useSelector((state) => state.cart.cart)
  const totalAmount =useSelector((state)=>state.cart.totalAmount)
  const totalPrice =useSelector((state)=>state.cart.totalPrice)
  const user = useSelector((state) => state.user.user)
  const { authUser } = user;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ authUser ? <Main></Main> :<Login></Login> }></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route   path="/filteredProducts/:type/:id"
             element={<SingleProduct/>}>
        
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
