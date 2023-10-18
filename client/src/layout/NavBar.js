import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/contact-page">Contact Us</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Log In</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
