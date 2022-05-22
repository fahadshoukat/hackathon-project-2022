import Navbar from "./components/navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
