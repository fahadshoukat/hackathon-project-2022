import React from "react";
import { BsCartDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand text-dark fw-bold fs-3">
          Try Basket
        </Link>
        <div className="d-flex gap-3">
          <button type="button" class="btn btn-success position-relative">
            cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              2
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
          <button className="btn btn-light" type="button">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
