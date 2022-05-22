import Navbar from "./components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import AddProduct from "./components/addProduct/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
      <Route path="addProduct" element={<AddProduct />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
