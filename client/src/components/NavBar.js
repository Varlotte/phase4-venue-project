import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#1E90FF", // Washington DC-themed blue color
    padding: "14px",
    height: "60px",
    display: "flex",
    gap: "25px",
    justifyContent: "center", // Center the content horizontally
    alignItems: "center", // Center the content vertically
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff", // White text color
    margin: "0 10px",
    fontSize: "22px",
    fontWeight: "bold",
  };

  return (
    <div style={navbarStyle}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/museums" style={linkStyle}>
        Museums
      </NavLink>
      <NavLink to="/museums/new" style={linkStyle}>
        Add Museum
      </NavLink>
    </div>
  );
}

export default Navbar;
