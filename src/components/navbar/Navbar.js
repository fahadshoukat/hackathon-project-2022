import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/ContextApi";
import "./navbar.css";

const Navbar = () => {

    // const {order} = useContext(OrderContext);

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
              {0}
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
