import React from "react";
import { Link } from "react-router-dom";

function Navbar() {


  return (
    <div className ='navbar'>
      <Link to="/contact-page">
      Contact Us
      </Link>
      <Link to="/acct/new">
        Create Account
      </Link>
      <Link to="/acct/login">
        Log In
      </Link>
      <Link to="/">
        Home
      </Link>
    </div>
  );
}

export default Navbar;
