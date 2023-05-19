import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">Workout Buddy</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/signup" className="navbar-link btn-secondary">
          Signup
        </Link>
        <Link to="/logout" className="navbar-link">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
