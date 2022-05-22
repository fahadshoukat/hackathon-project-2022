import Navbar from "./components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import AddProduct from "./components/addProduct/AddProduct";
import AllProducts from "./components/allProducts/AllProducts";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";
import NoRoute from "./components/noRoute/NoRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route exact path="/" element={[<Slider />,<AllProducts />]} />        
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="addProduct" element={<AddProduct />} />
      <Route path="allProducts" element={<AllProducts />} />
      <Route path="*" element={<NoRoute />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
