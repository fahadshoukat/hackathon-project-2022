import Navbar from "./components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import AddProduct from "./components/addProduct/AddProduct";
import AllProducts from "./components/allProducts/AllProducts";
import NoRoute from "./components/noRoute/NoRoute";
import Home from "./components/home/Home";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import CartProducts from "./components/cartProducts/CartProducts";

// Context
import OrderContextProvider from "./components/context/OrderContext";
import AuthContextProvider from "./components/context/AuthContext";
import ProductsContextProvider from "./components/context/ProductsContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <OrderContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={ <Home /> } />
              <Route path="signup" element={ <SignUp /> } />
              <Route path="login" element={ <Login /> } />
              <Route path="addProduct" element={ <ProtectedRoute><AddProduct /></ProtectedRoute> } />
              <Route path="allProducts" element={ <AllProducts /> } />
              <Route path="cartProducts" element={ <CartProducts /> } />
              <Route path="*" element={ <NoRoute /> } />
            </Routes>
          </BrowserRouter>
        </OrderContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
