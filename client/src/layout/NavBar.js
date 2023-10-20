import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { getCurrUser } from "../Helperfuncs";
import { CurrentUserContext } from "../Helperfuncs";

function Navbar() {
  const currentUser = sessionStorage.getItem('currentUser');
  // const currentUser = useContext(CurrentUserContext) this was set above but and is likely proper but for our purpose of having a working ternary session storage works
  //ALSO removed bang operator from currentUser in Ternary...it works though - SERGIO
  return (
    <div className="navbar">
      <Link to="/add-event">Add Event</Link>
      <Link to="/signup">Sign Up</Link>
      {!currentUser ? (
        <Link to="/login">Log In</Link>
      ) : (
        <Link to="/acctdash"> My Account</Link>
      )}
      <Link to="/home">Home</Link>
    </div>
  );
}

export default Navbar;
