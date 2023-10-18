import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#1E90FF",
    padding: "14px",
    height: "60px",
    display: "flex",
    gap: "25px",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    margin: "0 10px",
    fontSize: "22px",
    fontWeight: "bold",
  };

  return (
    <div style={navbarStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/acct/new" style={linkStyle}>
        Create Account
      </NavLink>
      <NavLink to="/acct/login" style={linkStyle}>
        Log In
      </NavLink>
    </div>
  );
}

export default Navbar;
