import React from "react";
import {BsCartDash} from 'react-icons/bs';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container">
        <a className="navbar-brand text-light fw-bold fs-3">Try Basket</a>
        <div>
          <BsCartDash className="mx-4 text-light" fontSize='32px' />
          <button className="btn btn-light" type="button">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
