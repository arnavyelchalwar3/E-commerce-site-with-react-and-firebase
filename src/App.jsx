import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import NoPage from "./Pages/NoPage/NoPage"; 
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import CartPage from "./Pages/Cart/CartPage";
import AllProduct from "./Pages/AllProduct/AllProduct";
import Signup from "./Pages/registration/Signup";
import Login from "./Pages/registration/Login";
const App = () => {
  return ( 
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />        
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;