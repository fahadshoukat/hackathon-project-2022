import Navbar from "./components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import AddProduct from "./components/addProduct/AddProduct";
import AllProducts from "./components/allProducts/AllProducts";
import Footer from "./components/footer/Footer";
import NoRoute from "./components/noRoute/NoRoute";
import Home from "./components/home/Home";

// Context
import OrderContextProvider from "./components/context/OrderContext";

function App() {
  return (
    <OrderContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="signup" element={ <SignUp /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="addProduct" element={ <AddProduct /> } />
          <Route path="allProducts" element={ <AllProducts /> } />
          <Route path="*" element={ <NoRoute /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </OrderContextProvider>
  );
}

export default App;
