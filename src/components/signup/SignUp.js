import React from "react";

const SignUp = () => {
  return (
      <div className="py-5">
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="exampleInputName"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputConfirmPassword1" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                id="exampleInputConfirmPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputCountry1" className="form-label">
                Country
              </label>
              <input
                type="text"
                name="country"
                className="form-control"
                id="exampleInputCountry1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputCity1" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                className="form-control"
                id="exampleInputCity1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputState1" className="form-label">
                State
              </label>
              <input
                type="text"
                name="state"
                className="form-control"
                id="exampleInputState1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPCode1" className="form-label">
                Postal Code
              </label>
              <input
                type="number"
                name="postalCode"
                className="form-control"
                id="exampleInputPCode1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputMNumber1" className="form-label">
                Mobile Number
              </label>
              <input
                type="number"
                name="mobileNumber"
                className="form-control"
                id="exampleInputMNumber1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
