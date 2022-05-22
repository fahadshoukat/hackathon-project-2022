import React from "react";
import {BsCartDash} from 'react-icons/bs';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-light fw-bold fs-3">E-STORE</a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
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
