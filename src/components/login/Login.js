import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({

  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs ( (s)=>({ ...s, [name]: value }) );
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/addProduct')
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('User not found')
        console.log(errorMessage);
      });
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col offset-md-4">
            <form onSubmit={handleLogin}  >
              <div class="mb-3 col-md-6">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputs}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3 col-md-6">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInputs}
                  class="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="d-flex gap-3 justify-space-evenly ">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button className="btn btn-success" onClick={()=> navigate('/signup')}>SignUp</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
