import React, { useState } from "react";
import { auth, fireStore } from "../../config/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        addUserIntoFireStore(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  const addUserIntoFireStore = async (user) => {
    console.log("user add firestore func", user);

    const { name, email, state, country, postalCode, city, mobileNumber } =
      inputs;

    let formData = {
      name,
      email,
      state,
      country,
      postalCode,
      city,
      mobileNumber,
    };
    formData.uid = user.uid;
    formData.dateCreated = serverTimestamp()

    try {
     
      await setDoc(doc(fireStore, "users", user.uid), formData);

    } catch (e) {
      console.error("Error adding document: ", e);
    }

  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
                <h1 className="text-center">Sign Up</h1>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputName"
                  onChange={handleInputs}
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputEmail"
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
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label
                  htmlFor="exampleInputConfirmPassword1"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  onChange={handleInputs}
                  name="confirmPassword"
                  className="form-control"
                  id="exampleInputConfirmPassword1"
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputCountry1" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputCountry1"
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputCity1" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputCity1"
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputState1" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputState1"
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputPCode1" className="form-label">
                  Postal Code
                </label>
                <input
                  type="number"
                  name="postalCode"
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputPCode1"
                  required
                />
              </div>
              <div className="mb-3 col-md-6 offset-md-3">
                <label htmlFor="exampleInputMNumber1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="mobileNumber"
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleInputMNumber1"
                  required
                />
              </div>
              <div className="mb-3 text-center col-md-6 offset-md-3">
              <button type="submit" className="btn btn-primary" onClick={() => navigate('/')}>
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
