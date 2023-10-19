import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getCurrUser } from "../Helperfuncs";
import { CurrentUserContext } from "../Helperfuncs";

function Navbar() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="navbar">
      <Link to="/contact-page">Contact Us</Link>
      <Link to="/signup">Sign Up</Link>
      {!currentUser ? (
        <Link to="/login">Log In</Link>
      ) : (
        <Link to="/acctdash"> My Account</Link>
      )}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
