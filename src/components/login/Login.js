import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Footer from "../footer/Footer"

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={ handleLogin }  >
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={ (e) => setEmail(e.target.value) }
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={ (e) => setPassword(e.target.value) }
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <div className="mt-4 text-center col-md-6 offset-md-3">
              <p>Don't have account?</p>
              <button className="btn btn-success" onClick={ () => navigate('/signup') }>SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
