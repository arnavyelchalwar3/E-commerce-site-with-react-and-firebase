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
import UserDashboard from "./Pages/user/UserDashboard"; 
import AdminDashboard from "./Pages/admin/AdminDashboard";
import AddProductPage from "./Pages/admin/AddProductPage";
import UpdateProductPage from "./Pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser"
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin"
const App = () => {
  return ( 
    <div>
       <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo" element={<ProductInfo />} />        
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/Signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
           <Route path="/userdashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />
         <Route path="/admindashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } /> 
        </Routes>
        <Toaster/>
      </Router>
      
      </MyState>
    </div>
  );
}

export default App;